import styles from './HomeHeader.module.scss';
import Image from 'next/image';

const HomeHeader = () => {
  return (
    <div className={styles.row}>
      <div className={styles.imageDiv}>
        <div className={styles.photo}>
          <Image
            src={`https://picsum.photos/274/274`}
            width={274}
            height={274}
            alt=""
          />
        </div>
      </div>
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
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
