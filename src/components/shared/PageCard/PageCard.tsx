'use client';
import {
  useContext,
  useEffect,
  useState,
  useRef,
  Fragment,
  useCallback,
  forwardRef,
} from 'react';
import { AppContext } from '@/context/contextProvider';
import styles from './PageCard.module.scss';
import { PageCardProps } from '@types';
import { HomeHeader, Loader } from '@/components';
import { usePathname } from 'next/navigation';

const PageCard: React.FC<PageCardProps> = forwardRef(
  ({ children }: PageCardProps, refPage: any) => {
    const [mainClass, setMainClass] = useState(`${styles.main}`);
    const ctx = useContext(AppContext);
    const pathName = usePathname();
    const divRef = useRef<any>();

    useEffect(() => {
      if (ctx.pageClass === 'close' && ctx.currentPath === pathName) return;
      setMainClass(`${styles.main} ${styles[ctx.pageClass]}`);

      if (ctx.pageClass === 'open') {
        const { current } = divRef;
        if (current !== null) {
          current.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
      }
    }, [ctx.pageClass]);

    return (
      <Fragment>
        <Loader show={ctx.pageClass !== 'open'}></Loader>
        <section ref={refPage} className={mainClass}>
          <div ref={divRef}></div>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              {pathName == '/home' ? (
                <HomeHeader />
              ) : (
                pathName.replace(/^\//, '')
              )}
            </div>
            <div className={styles.body}>{children}</div>
          </div>
        </section>
      </Fragment>
    );
  },
);
PageCard.displayName = 'PageCard';

export default PageCard;
