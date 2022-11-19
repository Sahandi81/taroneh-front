import Image from 'next/image';
import styles from '@/styles/components/orders.module.scss';

export default function OrderTracking() {
  return (
    <div className={styles.order_tracking}>
      <div className={styles.step}>
        <div className={styles.step_image}>
          <Image
            src='/img/order-tracking-step-1.png'
            alt='Order Tracking Step 1'
            width={400}
            height={400}
          />
        </div>
        <p className={styles.ative_step}>تایید سفارش</p>
      </div>

      <div className={styles.order_tracking_line}></div>

      <div className={styles.step}>
        <div className={styles.step_image}>
          <Image
            src='/img/order-tracking-step-2-light.png'
            alt='Order Tracking Step 2'
            width={400}
            height={400}
          />
        </div>
        <p>آماده سازی سفارش</p>
      </div>

      <div className={styles.order_tracking_line}></div>

      <div className={styles.step}>
        <div className={styles.step_image}>
          <Image
            src='/img/order-tracking-step-3-light.png'
            alt='Order Tracking Step 3'
            width={400}
            height={400}
          />
        </div>
        <p>تحویل به مامور ارسال</p>
      </div>

      <div className={styles.order_tracking_line}></div>

      <div className={styles.step}>
        <div className={styles.step_image}>
          <Image
            src='/img/order-tracking-step-4-light.png'
            alt='Order Tracking Step 4'
            width={400}
            height={400}
          />
        </div>
        <p>تحویل مرسوله به مشتری</p>
      </div>
    </div>
  );
}
