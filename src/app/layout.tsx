'use client';
// import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import '@/style/global.scss';
import styles from './layout.module.scss';
import App from '@/App';
import { AppContextProvider, AppContext } from '@/context/contextProvider';
const inter = Inter({ subsets: ['latin'] });
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <AppContextProvider currentPath={pathName}>
            <App>{children}</App>
          </AppContextProvider>
        </main>
      </body>
    </html>
  );
}
