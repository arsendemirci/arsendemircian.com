import Icon from '@icon';
import s from './SkillChip.module.scss';

const SkillChip = () => {
  return (
    <div className={s.main}>
      <div className={s.left}><Icon icon="javascript" width={20} height={20}></Icon> <label>vue</label></div>
      <div className={s.right}>3.2.1</div>
    </div>
  );
};

export default SkillChip;
