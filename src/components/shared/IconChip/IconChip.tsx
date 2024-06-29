import Icon from '@icon';
import s from './IconChip.module.scss';
import { IconChipPropsType } from '@types';

const IconChip = ({ icon, label, text }: IconChipPropsType) => {
  return (
    <div className={s.main}>
      <div className={s.left}>
        <Icon icon={icon} width={20} height={20}></Icon>
        <label>{label}</label>
      </div>
      {text && <div className={s.right}>{text}</div>}
    </div>
  );
};

export default IconChip;
