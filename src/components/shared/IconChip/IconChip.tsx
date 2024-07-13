import Icon from '@icon';
import s from './IconChip.module.scss';
import { IconChipPropsType } from '@types';

const IconChip = ({
  icon,
  label,
  text,
  labelBg,
  labelColor,
  textBg,
  textColor,
}: IconChipPropsType) => {
  const textStyle = {
    backgroundColor: textBg,
    color: textColor,
  };
  return (
    <div className={s.main}>
      <div className={`${s.box} ${s.left}`}>
        <Icon icon={icon} width={20} height={20} color={textBg}></Icon>
        <label>{label}</label>
      </div>
      {text && (
        <div className={`${s.box} ${s.right} ${s.mobileup}`} style={textStyle}>
          {text}
        </div>
      )}
      <div className={`${s.box} ${s.right} ${s.mobiledown}`} style={textStyle}>
        {label}
      </div>
    </div>
  );
};

export default IconChip;
