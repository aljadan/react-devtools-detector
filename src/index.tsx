import devtoolsDetector from 'devtools-detector';
import { useEffect, useState } from 'react';

interface DevToolsDetectorOptions {
  /** Interval in ms to check if devtools is open. Default is `500ms` */
  interval?: number;

  /** Enable or disable the detector. Default is `true` */
  enabled?: boolean;
}

export default function useIsDevToolsOpen(
  options: DevToolsDetectorOptions = {}
) {
  const { interval = 500, enabled = true } = options;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    devtoolsDetector.addListener(setIsOpen);
    devtoolsDetector.setDetectDelay(interval);
    devtoolsDetector.launch();

    return () => {
      devtoolsDetector.stop();
      devtoolsDetector.removeListener(setIsOpen);
    };
  }, [enabled, interval]);

  return isOpen;
}
