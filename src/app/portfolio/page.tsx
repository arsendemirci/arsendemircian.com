'use client';
import Image from 'next/image';
import s from './page.module.scss';
import { portfolio, chips } from '@/config';
import { useState } from 'react';
import { IconChip, ProjectCard, Modal } from '@/components';

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className={s.main}>
        <div className={s.filter}></div>
        <div className={s.portfolio}>
          {portfolio.map((item, index) => (
            <ProjectCard key={index} {...item} readMore={setModalOpen} />
          ))}
        </div>
      </div>
      <Modal open={modalOpen} />
    </>
  );
}
