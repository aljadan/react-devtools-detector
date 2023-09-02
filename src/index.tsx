import devtoolsDetector from 'devtools-detector';
import { useEffect, useState } from 'react';

export default function useIsDevtoolsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    devtoolsDetector.addListener(setIsOpen);
    devtoolsDetector.launch();

    return () => {
      devtoolsDetector.stop();
      devtoolsDetector.removeListener(setIsOpen);
    };
  }, []);

  return isOpen;
}
