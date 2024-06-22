import styles from './TimeLineItem.module.scss';
import { TimelineItemPropsType } from '@types';

const TimeLineItem = (props: TimelineItemPropsType) => {
  const logoStyle = {
    backgroundImage: `url(/logo/${props.logo})`,
    backgroundSize: props.logoSize,
    backgroundPosition: props.logoPos ?? 'center',
  };
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <div style={logoStyle} className={styles.img}></div>
          </div>
          <div className={styles.content}>
            <h4 className={styles.company}>{props.company}</h4>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.date}>
              {props.dateFrom} - {props.dateTo}
            </span>
          </div>
        </div>

        <p className={styles.details}>{props.description}</p>
      </div>
    </div>
  );
};

export default TimeLineItem;
