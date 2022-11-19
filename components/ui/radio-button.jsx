import styles from '@/styles/components/radio-button.module.scss';

export default function RadioButton({ id, handleChange, ...otherProps }) {
  return (
    <>
      <input className={styles.radio} type='radio' id={id} onChange={handleChange} {...otherProps} />
      <label className={styles.label} htmlFor={id}></label>
    </>
  );
}
