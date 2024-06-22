'use server';
import { headers } from 'next/headers';
// import { getSelectorsByUserAgent } from 'react-device-detect';

export async function checkBrowser() {
  'use server'; // mark function as server action
  const headersList = headers();
  const browser = headersList.get('x-browser') ?? '';
  //   const isSafari = new RegExp(browser?.toLowerCase()).test('safari');

  try {
    return { browser };
  } catch (err) {
    return { isSafari: false };
  }
}
