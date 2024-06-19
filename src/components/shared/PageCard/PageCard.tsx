'use client';
import { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '@/context/contextProvider';
import styles from './PageCard.module.scss';
import { PageCardProps } from '@types';
import { HomeHeader } from '@/components';
import { usePathname } from 'next/navigation';

const PageCard: React.FC<PageCardProps> = ({ children }) => {
  const [mainClass, setMainClass] = useState(`${styles.main}`);
  const ctx = useContext(AppContext);
  const pathName = usePathname();
  const divRef = useRef<any>();

  useEffect(() => {
    setMainClass(`${styles.main} ${styles[ctx.pageClass]}`);

    if (ctx.pageClass === 'open') {
      const { current } = divRef;
      if (current !== null) {
        current.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }
    }
  }, [ctx.pageClass, pathName]);

  return (
    <section className={mainClass}>
      <div ref={divRef}></div>
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
