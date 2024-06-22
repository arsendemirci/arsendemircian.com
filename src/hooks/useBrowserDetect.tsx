import { useEffect, useState, useCallback } from 'react';
import { checkBrowser } from '@/app/actions';

const useBrowserDetect = () => {
  const [detectedBrowser, setDetectedBrowser] = useState<string>('');
  const isSafari = useCallback(async () => {
    const { browser } = await checkBrowser();
    if (browser) {
      setDetectedBrowser(browser);
    }
  }, []);

  useEffect(() => {
    isSafari();
  }, []);

  return {
    browser: detectedBrowser,
    isSafari: new RegExp(detectedBrowser.toLowerCase()).test('safari'),
  };
};

export default useBrowserDetect;