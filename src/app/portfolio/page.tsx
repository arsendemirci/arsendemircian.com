import Image from 'next/image';
import s from './page.module.scss';
import portfolio from '@/config/portfolio';
import { SkillChip } from '@/components';

export default function Portfolio() {
  return (
    <div className={s.main}>
      <div className={s.filter}></div>
      <div className={s.portfolio}>
        {portfolio.map((item, index) => (
          <SkillChip key={index}></SkillChip>
        ))}
      </div>
    </div>
  );
}
