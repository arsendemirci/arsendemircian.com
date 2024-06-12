import Image from 'next/image';
import styles from './page.module.scss';
import { PageCard, UnderConstruction } from '@/components';

export default function resume() {
  return (
    <main className={styles.main}>
      <PageCard title="Resume">
          <UnderConstruction />
      </PageCard>
    </main>
  );
}
