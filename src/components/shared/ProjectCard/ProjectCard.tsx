
import s from './ProjectCard.module.scss';
import Image from 'next/image';
import Icon from '@icon';
import { PortfolioItemType } from '@types';

const ProjectCard = (props: PortfolioItemType) => {
  return (
    <div className={s.main}>
      <Image src={props.images[0]} alt="project" width={360} height={300} />
      <div className={s.content}>
        <h2>{props.name}</h2>
        <div className={s.detail}>
          <p>{props.description}</p>
          <hr />
          <div className={s.actions}>
            <div className={s.links}>
              {props.links?.map((item) => (
                <a key={item.icon} href={item.link} title={item.name}>
                  <Icon icon={item.icon} width={26} height={26} />
                </a>
              ))}
            </div>
            <a onClick={() => props.readMore(true)} className={s.more} role='button'>
              Read more <i className={s.arrow}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
