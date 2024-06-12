import Image from 'next/image';
import styles from './page.module.scss';
import {
  AppHeader,
  AppFooter,
  PageCard,
  UnderConstruction,
} from '@/components';

export default function home() {
  return (
    <main className={styles.main}>
      <PageCard title="Home">
        <UnderConstruction />
      </PageCard>
    </main>
  );
}
