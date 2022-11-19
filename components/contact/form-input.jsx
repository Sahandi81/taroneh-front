import styles from '@/styles/components/contact-page.module.scss';

export default function FormInput({id, label, handleChange, ...otherProps}) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={handleChange} {...otherProps} autoComplete='off' />
    </div>
  )
}
