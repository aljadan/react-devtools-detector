import isolatedDecl from 'bun-plugin-isolated-decl'
await Bun.build({
	entrypoints: ['./src/index.ts'],
	outdir: './dist',
	plugins: [isolatedDecl()],
	external: ['*'],
})
