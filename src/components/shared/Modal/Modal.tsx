import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('@/components/shared/Modal/ModalComponent'),
  {
    ssr: false,
  },
);

export default Modal;
