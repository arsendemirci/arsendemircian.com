import Image from 'next/image';
import styles from './page.module.scss';
import { AppHeader, AppFooter } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <AppHeader title="Arsen Demirci" />
      <div className={styles.container}>PAGES WILL SLIDE HERE</div>
      <AppFooter />
    </main>
  );
}
