'use client';

import s from './Modal.module.scss';

import { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from '@icon';
import Image from 'next/image';
import { chips } from '@config';
import { IconChip } from '@/components';

export const ModalComponent = (props: any) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [descOverflow, setDescOverflow] = useState<string>('');
  const refdescWrap = useRef(null);
  const refDescText = useRef(null);
  const closeModal = () => {
    props.onClose();
  };
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = props.open
      ? 'hidden'
      : 'auto';
    if (!props.open) setActiveSlide(0);
  }, [activeSlide, props.open]);
  useEffect(() => {
    let styleHeight =
      refdescWrap.current && getComputedStyle(refdescWrap.current);
    let wrapHeight =
      (styleHeight && parseFloat(styleHeight['max-height'])) || 0;

    let textHeight =
      (refDescText.current &&
        parseFloat(getComputedStyle(refDescText.current).height)) ||
      0;
    if (props.open && textHeight > wrapHeight) setDescOverflow('overflow');
    if (!props.open) setDescOverflow('');
  }, [props.open, descOverflow]);

  return createPortal(
    <Fragment>
      <div className={`${s.backdrop} ${props.open && s.open}`}></div>
      <div className={`${s.modalwrap} ${props.open && s.open}`}>
        <div className={`${s.modal} ${props.open && s.open}`}>
          <a className={s.buttonclose} onClick={closeModal}>
            <Icon icon="times" width={40} height={40}></Icon>
          </a>
          <div className={s.container}>
            <div className={s.slider}>
              <div className={s.carousel}>
                {props.item.images.map((item: string, index: number) => (
                  <div
                    key={index}
                    className={`${s.slide} ${index == activeSlide ? s.active : index < activeSlide ? s.left : index > activeSlide ? s.right : ''}`}
                  >
                    <Image src={item} alt="vue1" width={720} height={600} />
                  </div>
                ))}
              </div>
              <div className={s.controls}>
                <a
                  onClick={() => setActiveSlide((prev) => prev - 1)}
                  className={`${s.navcontrol} ${s.navleft} ${activeSlide === 0 && s.disabled} `}
                >
                  <Icon icon="navleft" width={40} height={40}></Icon>
                </a>
                <a
                  onClick={() => setActiveSlide((prev) => prev + 1)}
                  className={`${s.navcontrol} ${s.navright} ${activeSlide === props.item.images.length - 1 && s.disabled}`}
                >
                  <Icon icon="navright" width={40} height={40}></Icon>
                </a>
              </div>
            </div>
            <div className={s.content}>
              <div className={s.heading}>
                <div className={s.title}>
                  <h2>{props.item.name}</h2>
                  <div className={s.links}>
                    {props.item.links.map((link: any, index: number) => {
                      return (
                        <a
                          key={index}
                          href={link.link}
                          target="_blank"
                          title={link.name}
                        >
                          <Icon icon={link.icon} width={30} height={30} />
                        </a>
                      );
                    })}
                  </div>
                </div>
                <hr />
                <div className={s.tags}>
                  {props.item.tags.map((tag: string, index: number) => {
                    let keys = tag.split('-');
                    let icon = keys[0];
                    let text = chips[icon].text || keys[1] || '';

                    return (
                      <IconChip
                        {...chips[icon]}
                        key={index}
                        icon={icon}
                        text={text}
                      ></IconChip>
                    );
                  })}
                </div>
              </div>
              <div ref={refdescWrap} className={s.description}>
                <div ref={refDescText} className={s[descOverflow]}>
                  {props.item.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>,
    document.body,
  );
};
export default ModalComponent;
