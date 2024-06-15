import styles from './AppHeader.module.scss';
import { useContext } from 'react';
import { AppContext } from '@/context/contextProvider';
import { AppHeaderProps } from '@types';
import { links } from '@/config/menu';
import { HomeHeader } from '@/components';

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  const ctx = useContext(AppContext);

  return (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <ul>
            {links.map((link, index) => (
              <li key={index + 1}>
                <a
                  className={`${ctx.currentPath == link.href ? styles.active : ''}`}
                  href={link.href}
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
  );
};

export default AppHeader;
