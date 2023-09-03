import devtoolsDetector from 'devtools-detector';
import { useEffect, useState } from 'react';

export default function useIsDevtoolsOpen(interval = 500) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    devtoolsDetector.addListener(setIsOpen);
    devtoolsDetector.setDetectDelay(interval);
    devtoolsDetector.launch();

    return () => {
      devtoolsDetector.stop();
      devtoolsDetector.removeListener(setIsOpen);
    };
  }, [interval]);

  return isOpen;
}
