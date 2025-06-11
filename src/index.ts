import devtoolsDetector from 'devtools-detector'
import { useEffect, useState } from 'react'

export type DevToolsDetectorOptions = {
	/** Interval in ms to check if devtools is open. Default is `500ms` */
	interval?: number

	/** Enable or disable the detector. Default is `true` */
	enabled?: boolean
}

export default function useIsDevToolsOpen(
	options: DevToolsDetectorOptions = {},
): boolean {
	const { interval, enabled = true } = options
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (!enabled) {
			setIsOpen(false)
			return
		}

		devtoolsDetector.addListener(setIsOpen)
		if (interval) {
			devtoolsDetector.setDetectDelay(interval)
		}

		const isLaunched = devtoolsDetector.isLaunch()
		if (!isLaunched) {
			devtoolsDetector.launch()
		}

		return () => {
			devtoolsDetector.removeListener(setIsOpen)
			devtoolsDetector.stop()
		}
	}, [enabled, interval])

	return isOpen
}
