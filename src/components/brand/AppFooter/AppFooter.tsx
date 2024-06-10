import styles from './AppFooter.module.scss';
import Image from 'next/image';

const AppFooter = () => {
  return (
    <footer className={styles.main}>
      <div className="copyright">
        <div>
          <p>
            <a href="#" target="_self">
              ©2020. | Designed By: Pooja Nahelia. | All rights reserved.{' '}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
