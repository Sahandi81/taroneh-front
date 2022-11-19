import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../icons/close-icon';
import styles from '@/styles/components/modal.module.scss';

export default function Modal({ show, onClose, title, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = e => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={handleCloseClick}></div>
      <div className={styles.body}>
        {title && (
          <div className={styles.header}>
            <span onClick={handleCloseClick}>
              <CloseIcon />
            </span>
            <h3 className={styles.title}>{title}</h3>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
