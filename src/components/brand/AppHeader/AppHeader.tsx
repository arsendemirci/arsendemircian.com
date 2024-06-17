'use client';
import styles from './AppHeader.module.scss';
import { useContext, Fragment } from 'react';
import { AppContext } from '@/context/contextProvider';
import { AppHeaderProps } from '@types';
import { links } from '@/config/menu';
import Icon from '@icon';

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const ctx = useContext(AppContext);
  const goTo = (path: string) => {
    ctx.setPath(path);
  };
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
          <a>
            <Icon height={32} width={34} icon="bars"></Icon>
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default AppHeader;
