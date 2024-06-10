import styles from './AppHeader.module.scss';
import Image from 'next/image';
interface AppHeaderProps {
  title: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <ul>
            <li>
              <a className={styles.active} href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className={styles.links}></div>
        </div>
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default AppHeader;
