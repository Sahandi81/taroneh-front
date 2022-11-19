import { useRouter } from 'next/router';
import CheckedIcon from '../icons/checked-icon';
import styles from '@/styles/components/progress-bar.module.scss';

export default function ProgressBar({step, handleClick}) {

  const router = useRouter();

  const handleClickStep = routerPath => {
    handleClick(routerPath);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 onClick={() => handleClickStep('/checkout/shipping')}>انتخاب مکان و زمان</h3>
        <h3 onClick={() => handleClickStep('/checkout/payment')}>پیش فاکتور و پرداخت</h3>
        <h3>وضعیت خرید</h3>
      </div>

      <div className={styles.progress}>
        <div className={`${styles.step}`} onClick={() => handleClickStep('/checkout/shipping')}>
          {step > 1 && <CheckedIcon />}
        </div>

        <div className={`${styles.bar} ${step > 1 ? styles.active : ''}`}></div>

        <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`} onClick={() => handleClickStep('/checkout/payment')}>
          {step > 2 && <CheckedIcon />}
        </div>

        <div className={`${styles.bar} ${step === 3 ? styles.active : ''}`}></div>

        <div className={`${styles.step} ${step === 3 ? styles.active : ''}`}>
          {step === 3 && <CheckedIcon />}
        </div>
      </div>
    </div>
  );
}
