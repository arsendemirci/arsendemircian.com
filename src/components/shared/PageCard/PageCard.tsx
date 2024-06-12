import { ReactElement } from 'react';
import styles from './PageCard.module.scss';
interface PageCardProps {
  title: String;
  children: ReactElement;
}
const PageCard: React.FC<PageCardProps> = ({ title, children }) => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.header}>{title}</div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
};

export default PageCard;
