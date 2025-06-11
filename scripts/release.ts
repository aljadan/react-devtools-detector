#!/usr/bin/env bun

import { $ } from 'bun'

type ReleaseType = 'patch' | 'minor' | 'major'

const releaseType = (process.argv[2] as ReleaseType) || 'patch'

console.log(`🚀 Starting ${releaseType} release...`)

try {
	// 1. Build the package
	console.log('📦 Building package...')
	await $`bun run build`

	// 2. Get current version and bump it
	const packageJson = await Bun.file('package.json').json()
	const currentVersion = packageJson.version
	console.log(`📋 Current version: ${currentVersion}`)

	// 3. Bump version using npm version
	console.log(`⬆️  Bumping ${releaseType} version...`)
	const result = await $`npm version ${releaseType} --no-git-tag-version`
	const newVersion = result.text().trim().replace('v', '')
	console.log(`✅ New version: ${newVersion}`)

	// 4. Build again with new version
	console.log('🔨 Rebuilding with new version...')
	await $`bun run build`

	// 5. Commit changes
	console.log('📝 Committing changes...')
	await $`git add .`
	await $`git commit -m "chore: release v${newVersion}"`

	// 6. Create and push tag
	console.log('🏷️  Creating and pushing tag...')
	await $`git tag v${newVersion} -m "Release v${newVersion}"`
	await $`git push origin main`
	await $`git push origin v${newVersion}`

	// 7. Publish to npm
	console.log('📤 Publishing to npm...')
	await $`npm publish`

	console.log(`🎉 Successfully released v${newVersion}!`)
	console.log(
		`🔗 Create GitHub release: https://github.com/aljadan/react-devtools-detector/releases/new?tag=v${newVersion}`,
	)
} catch (error) {
	console.error(
		'❌ Release failed:',
		error instanceof Error ? error.message : error,
	)
	process.exit(1)
}
