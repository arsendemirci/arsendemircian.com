import styles from './TimeLineItem.module.scss';
import { TimelineItemPropsType } from '@types';

const TimeLineItem = (props: TimelineItemPropsType) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h4 className={styles.company}>{props.company}</h4>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.date}>
          {props.dateFrom} - {props.dateTo}
        </span>
        <p className={styles.details}>{props.description}</p>
      </div>
    </div>
  );
};

export default TimeLineItem;
