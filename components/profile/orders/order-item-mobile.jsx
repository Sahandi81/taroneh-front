import Button from '@/components/ui/button';
import formatPrice from '@/helpers/formatPrice';
import styles from '@/styles/components/orders-mobile.module.scss';

export default function OrderItem({ id, number, price, date, status }) {
  const handleClickReorder = () => {};
  const handleClickDetails = () => {};

  return (
    <div className={styles.item}>
      <div className={styles.master} id={id}>
        <div className={styles.block}>
          <p>شماره سفارش</p>
          <h4>#{number}</h4>
        </div>

        <div className={styles.block}>
          <p>مبلغ پرداختی</p>
          <h4>{formatPrice(price)} تومان</h4>
        </div>

        <div className={styles.block}>
          <p>تاریخ ثبت سفارش</p>
          <h4>{date}</h4>
        </div>

        <div className={styles.block}>
          <p>وضعیت</p>
          <h4 className={styles.success}>{status}</h4>
        </div>

        <div className={styles.actions}>
          <Button variant='primary' handleClick={handleClickReorder} rounded>
            خرید مجدد
          </Button>
          <Button
            variant='primary-outline'
            handleClick={handleClickDetails}
            rounded
          >
            جزئیات سفارش
          </Button>
        </div>
      </div>
    </div>
  );
}
