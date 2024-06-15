import { ReactElement, ReactNode, useContext } from 'react';
import { AppContext } from '@/context/contextProvider';
import styles from './PageCard.module.scss';
import { PageCardProps } from '@types';
import { HomeHeader } from '@/components';

const PageCard: React.FC<PageCardProps> = ({ children }) => {
  const ctx = useContext(AppContext);
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {ctx.currentPath == '/home' ? <HomeHeader /> : ctx.pageTitle}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
};

export default PageCard;
