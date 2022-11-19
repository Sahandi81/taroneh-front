import OrderItem from './order-item-mobile'
import styles from '@/styles/components/orders-mobile.module.scss';

export default function OrdersMobile({ items }) {
  return (
    <div className={styles.container}>
      {items.map(({ id, ...otherProps }) => (
        <OrderItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

OrdersMobile.defaultProps = {
  items: [
    {
      id: 'order-001',
      number: '228445485',
      price: '500,000',
      date: '1400/12/01',
      status: 'سفارش موفق'
    },
    {
      id: 'order-002',
      number: '228445485',
      price: '500,000',
      date: '1400/12/01',
      status: 'سفارش موفق'
    },
    {
      id: 'order-003',
      number: '228445485',
      price: '500,000',
      date: '1400/12/01',
      status: 'سفارش موفق'
    }
  ]
};
