import styles from '@/styles/components/product-amount.module.scss';

export default function ProductAmount({ label,Weigh, checked, handleChange }) {
  
  return (
    <div className={styles.product_amount} >
      <input
        type='radio'
        name='amount'
        id={`amount-${label}`}
        value={label}
        checked={checked === Weigh ? true : false}
        onChange={handleChange}
      />
      <label htmlFor={`amount-${label}`}>{label}</label>
    </div>
  );
}
