import VerifiedIcon from '@/components/icons/verified-icon';
import styles from '@/styles/components/personal-info.module.scss';

export default function FormInput({
  label,
  id,
  error,
  isVerified,
  handleChange,
  ...otherProps
}) {
  return (
    <div className={styles.form_input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={handleChange}
        className={error && styles.error_state}
        {...otherProps}
        autoComplete='off'
      />
      {isVerified && (
        <span className={styles.verified}>
          <VerifiedIcon />
          تایید شده
        </span>
      )}

      <small className={styles.error}>{error}</small>
    </div>
  );
}
