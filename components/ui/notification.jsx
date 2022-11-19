import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '@/styles/components/notification.module.scss';

export default function Notification({show, status, message}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  let statusClasses;

  switch (status) {
    case 'success':
      statusClasses = styles.success;
      break;
    case 'error':
      statusClasses = styles.error;
      break;
    case 'pending':
      statusClasses = styles.pending;
      break;
    default:
      break;
  }

  const activeClasses = `${styles.container} ${statusClasses}`;

  const notificationContent = show ? (
    <div className={activeClasses}>
      <p>{message}</p>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      notificationContent,
      document.getElementById('notification-root')
    );
  } else {
    return null;
  }
}
