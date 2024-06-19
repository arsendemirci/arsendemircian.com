import { LoaderPropsType } from '@types';
import styles from './Loader.module.scss';

const Loader = ({ show }: LoaderPropsType) => {
  return (
    <div className={`${styles.backdrop} ${show ? styles.show : ''}`}>
      <div className={styles.loader}>
        <div className={`${styles.inner} ${styles.one}`}></div>
        <div className={`${styles.inner} ${styles.two}`}></div>
        <div className={`${styles.inner} ${styles.three}`}></div>
      </div>
    </div>
  );
};

export default Loader;
