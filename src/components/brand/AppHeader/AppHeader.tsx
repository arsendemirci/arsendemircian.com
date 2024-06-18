'use client';
import styles from './AppHeader.module.scss';
import { useContext, Fragment, useState } from 'react';
import { AppContext } from '@/context/contextProvider';
import { AppHeaderProps } from '@types';
import { links } from '@/config/menu';
import Icon from '@icon';

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ctx = useContext(AppContext);
  const goTo = (path: string) => {
    ctx.setPath(path);
  };
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
          <a onClick={toggleMenu}>
            <span
              className={`${styles.bars} ${isOpen ? styles.isOpen : ''}`}
            ></span>
            {/* <Icon height={32} width={34} icon="bars"></Icon> */}
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
