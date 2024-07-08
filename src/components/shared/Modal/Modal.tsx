'use client';
import s from './Modal.module.scss';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from '@icon';
import Image from 'next/image';
import { IconChip } from '@/components';

const images = [
  '/image/projects/vue3-leaderboard-1.png',
  '/image/projects/vue3-leaderboard-2.png',
  '/image/projects/ag-autocomplete-1.png',
  '/image/projects/ag-autocomplete-2.png',
];
const Modal = (props: any) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  useEffect(() => {
    console.log('active slide', activeSlide);
  }, [activeSlide]);
  return createPortal(
    <div className={`${s.backdrop} ${props.open && s.open}`}>
      <div className={`${s.modal} ${props.open && s.open}`}>
        <div className={s.container}>
          <div className={s.slider}>
            {images.map((item, index) => (
              <div
                key={index}
                className={`${s.slide} ${index == activeSlide ? s.active : index < activeSlide ? s.left : index > activeSlide ? s.right : ''}`}
              >
                <Image src={item} alt="vue1" width={720} height={600} />
              </div>
            ))}

            <div className={s.controls}>
              <a
                onClick={() => setActiveSlide((prev) => prev - 1)}
                className={`${s.navcontrol} ${s.navleft} ${activeSlide === 0 && s.disabled} `}
              >
                <Icon icon="navleft" width={40} height={40}></Icon>
              </a>
              <a
                onClick={() => setActiveSlide((prev) => prev + 1)}
                className={`${s.navcontrol} ${s.navright} ${activeSlide === images.length - 1 && s.disabled}`}
              >
                <Icon icon="navright" width={40} height={40}></Icon>
              </a>
            </div>
          </div>
          <div className={s.heading}>
            <div className={s.title}>
              <h2>Project Title</h2>
              <div className={s.links}>
                <a
                  href="https://www.linkedin.com/in/arsen-demirci-2a3046a6"
                  target="_blank"
                >
                  <Icon icon="linkedin" width={36} height={36} />
                </a>
                <a href="https://codepen.io/arsen-demircian" target="_blank">
                  <Icon icon="codepen" width={36} height={36} />
                </a>
                <a href="https://github.com/arsendemirci" target="_blank">
                  <Icon icon="github" width={36} height={36} />
                </a>
              </div>
            </div>
            <hr />
            <div className={s.tags}>
              <IconChip icon="vue" label="Vue.js" text="3.4.1"></IconChip>
              <IconChip icon="react" label="React.js" text="18"></IconChip>
              <IconChip
                icon="javascript"
                label="JS"
                text="JavaScript"
              ></IconChip>
            </div>
          </div>
          <div className={s.description}>
            vue3-leaderboard is a project for a case study. Task is to traverse
            the dates data and create a design to show top 3 dates with the most
            event counts.
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
