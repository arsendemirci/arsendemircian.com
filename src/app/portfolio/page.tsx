import Image from 'next/image';
import s from './page.module.scss';
import { portfolio, chips } from '@/config';

import { IconChip } from '@/components';

export default function Portfolio() {
  return (
    <div className={s.main}>
      <div className={s.filter}></div>
      <div className={s.portfolio}>
        {portfolio.map((item, index) => (
          <div key={index} className={s.card}>
            <div>
              <Image
                src={item.images[0]}
                width={100}
                height={50}
                alt="item image"
              />
            </div>
            <div>
              <h3>{item.name}</h3>
              <div>
                {item.links?.length &&
                  item.tags.map((tag, l) => {
                    let skill: string[] = tag.split('-');
                    let icon: string = skill[0];
                    let text: string = skill[1] || chips[icon].text || '';
                    return (
                      <IconChip
                        key={l}
                        icon={icon}
                        label={chips[icon].label}
                        text={text}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
