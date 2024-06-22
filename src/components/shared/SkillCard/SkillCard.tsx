import styles from './SkillCard.module.scss';
import Icon from '@icon';
import { SkillCardPropsType } from '@types';

const SkillCard = ({ name, xp, icon, browser }: SkillCardPropsType) => {
  return (
    <div className={`${styles.main} ${browser && styles[browser]}`}>
      <div className={`${styles.diskBorder} ${styles[`animateFill_${xp}`]}`}>
        <div className={styles.disk}>
          <Icon {...icon}></Icon>
        </div>
      </div>

      <div className={styles.text}>{name}</div>
      <div className={styles.xp}>{xp} Years</div>
    </div>
  );
};

export default SkillCard;
