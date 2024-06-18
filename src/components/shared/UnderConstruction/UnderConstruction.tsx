import styles from './UnderConstruction.module.scss';
import Image from 'next/image';
const UnderConstruction = () => {
  return (
    <div className={styles.main}>
      <Image
        src="/image/underconstruction.webp"
        alt=""
        width={260}
        height={260}
      ></Image>
    </div>
  );
};

export default UnderConstruction;
