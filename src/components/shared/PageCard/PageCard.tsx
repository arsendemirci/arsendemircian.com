'use client';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/contextProvider';
import styles from './PageCard.module.scss';
import { PageCardProps } from '@types';
import { HomeHeader } from '@/components';
import { usePathname, useRouter } from 'next/navigation';

const PageCard: React.FC<PageCardProps> = ({ children }) => {
  const [mainClass, setMainClass] = useState(`${styles.main}`);
  const ctx = useContext(AppContext);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    console.log('context path degisti', ctx.currentPath);
    if (pathName !== ctx.currentPath) {
      setMainClass(`${styles.main} ${styles.close}`);
      setTimeout(() => {
        setMainClass(`${styles.main} ${styles.open}`);
        router.push(ctx.currentPath);
      }, 700);
    } else {
      setMainClass(`${styles.main} ${styles.open}`);
    }
  }, [ctx.currentPath, router, pathName]);
  return (
    <section className={mainClass}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {pathName == '/home' ? <HomeHeader /> : pathName.replace(/^\//, '')}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
};

export default PageCard;
