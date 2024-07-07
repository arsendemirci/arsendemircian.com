import s from './Modal.module.scss';

const Modal = ({ show }) => {
  return (
    <div className={s.main}>
      <div className={s.backdrop}></div>
      <div className={s.modal}> this is modal page</div>
    </div>
  );
};

export default Modal;
