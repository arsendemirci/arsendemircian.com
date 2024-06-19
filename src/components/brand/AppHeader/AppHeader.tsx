'use client';
import styles from './AppHeader.module.scss';
import { useContext, Fragment, useState, useRef, useEffect } from 'react';
import { AppContext } from '@/context/contextProvider';
import { AppHeaderProps } from '@types';
import { links } from '@/config/menu';
// import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  // const ref = useRef<any | null[]>([]);
  // const pushRef = (el: any | null) => ref.current.push(el!);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ctx = useContext(AppContext);
  const pathName = usePathname();
  const router = useRouter();
  const goTo = (path: string) => {
    ctx.setPath(path);
  };
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (pathName !== ctx.currentPath) {
      ctx.setPageClassName('close');
       setTimeout(() => {
      // let refIndex =
      //   ctx.currentPath == '/home'
      //     ? 0
      //     : ctx.currentPath == '/resume'
      //       ? 1
      //       : ctx.currentPath == '/portfolio'
      //         ? 2
      //         : 3;
      let opt = { shallow: true };
      router.push(ctx.currentPath, opt as any);

      // ref.current[refIndex].click();
       }, 450);
    } else {
      ctx.setPageClassName('open');
    }
  }, [ctx.currentPath, pathName]);

  return (
    <Fragment>
      <header className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.navigation}>
            <ul>
              {links.map((link, index) => (
                <li key={index + 1}>
                  <a
                    className={`${ctx.currentPath == link.href ? styles.active : ''}`}
                    onClick={() => goTo(link.href)}
                  >
                    {link.name}
                  </a>
                  {/* <Link
                    className={styles.routeLink}
                    ref={pushRef}
                    href={link.href}
                  ></Link> */}
                </li>
              ))}
            </ul>
            <div className={styles.links}></div>
          </div>
          <h1>{title}</h1>
        </div>
      </header>
      <header className={styles.headerMobile}>
        <div className={styles.logo}>Arsen Demirci</div>
        <div className={styles.menu}>
          <a onClick={toggleMenu}>
            <span
              className={`${styles.bars} ${isOpen ? styles.isOpen : ''}`}
            ></span>
          </a>
        </div>
        <nav className={`${isOpen ? styles.isOpen : ''}`}>
          <ul>
            {links.map((link, index) => (
              <li key={index + 1}>
                <a
                  onClick={() => {
                    setIsOpen(false);
                    goTo(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default AppHeader;
