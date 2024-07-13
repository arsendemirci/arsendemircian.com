'use client';
import s from './page.module.scss';
import { portfolio, chips } from '@/config';
import { useCallback, useState } from 'react';
import { PortfolioItemType } from '@/types/types';
import { IconChip, ProjectCard, Modal } from '@/components';

const initialItem: PortfolioItemType = {
  name: '',
  description: '',
  images: [],
  tags: [],
  links: [],
};
export default function Portfolio() {
  const [modal, setModal] = useState<any>({
    item: initialItem,
    open: false,
  });
  const openPortfolioItem = useCallback(
    (item: PortfolioItemType) => {
      setModal({ ...modal, item, open: true });
    },
    [modal],
  );
  const closePortfolioItem = useCallback(() => {
    setModal({ ...modal, open: false });

    const timout = setTimeout(() => {
      setModal({ open: false, item: initialItem });
    }, 1000);

    return () => {
      clearTimeout(timout);
    };
  }, [modal]);
  return (
    <>
      <div className={s.main}>
        <div className={s.filter}></div>
        <div className={s.portfolio}>
          {portfolio.map((item, index) => (
            <ProjectCard key={index} {...item} readMore={openPortfolioItem} />
          ))}
        </div>
      </div>
      <Modal open={modal.open} item={modal.item} onClose={closePortfolioItem} />
    </>
  );
}
