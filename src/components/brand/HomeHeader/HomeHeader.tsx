import styles from './HomeHeader.module.scss';
import Image from 'next/image';
import Icon from '@icon';

const HomeHeader = () => {
  return (
    <div className={styles.row}>
      <div className={styles.titleDiv}>
        <div className={styles.titleBlock}>
          <h1>Arsen Demirci</h1>
          <div className={styles.carousel}>
            <div>
              <div className={styles.active}>Front-End Lead</div>
              <div>Front-End Architect</div>
              <div>Front-End Engineer</div>
              <div>Web Designer</div>
            </div>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/arsen-demirci-2a3046a6"
              target="_blank"
            >
              <Icon icon="linkedin" width={40} height={40} />
            </a>
            <a href="https://codepen.io/arsen-demircian" target="_blank">
              <Icon icon="codepen" width={40} height={40} />
            </a>
            <a href="https://github.com/arsendemirci" target="_blank">
              <Icon icon="github" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <div className={styles.photo}>
          <Image src="/image/myphoto.jpg" width={274} height={274} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
