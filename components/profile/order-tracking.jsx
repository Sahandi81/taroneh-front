import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/auth/authSlice';
import styles from '@/styles/components/order-tracking.module.scss';

export default function OrderTracking({handleClose}) {
  const [orderNumber, setOrderNumber] = useState('');
  const [error, setError] = useState(false);
  const user = useSelector(selectUser);
  const router = useRouter();

  const handleChange = e => {
    const { value } = e.target;
    const re = /^[0-9\b]+$/;

    if (value === '' || re.test(value)) {
      setOrderNumber(value);
      setError(false);
    }
  };

  const handleClick = () => {
    if (orderNumber) {
      if (user) {
        router.push(`/profile/orders#${orderNumber}`);
      } else {
        router.push('/login');
      }
      handleClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label htmlFor='orderNumber'>
          شماره پیگیری خرید خود را وارد نمایید
        </label>
        <input
          id='orderNumber'
          type='text'
          onChange={handleChange}
          value={orderNumber}
          autoFocus
        />
      </div>
      <button className={styles.button} onClick={handleClick}>
        جستجو
      </button>
      {error && (
        <p className={styles.error}>شماره پیگیری وارد شده صحیح نمی باشد</p>
      )}
    </div>
  );
}
