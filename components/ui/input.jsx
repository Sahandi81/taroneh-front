import EyeIcon from '../icons/eye-icon';
import EyeSlashIcon from '../icons/eye-slash-icon';
import styles from '@/styles/components/input.module.scss';

export default function Input({
  label,
  handleChange,
  togglePasswordVisibility,
  passwordShown,
  textCenter,
  error,
  w_auto,
  ...otherProps
}) {
  let customStyle;
  if (w_auto) {
    customStyle = {
      width: 'auto'
    };
  }
  return (
    <div className={styles.container} style={customStyle}>
      <div className={`${styles.field} ${error ? styles.error : ''}`}>
        <input
          className={styles.input}
          onChange={handleChange}
          autoComplete='off'
          style={{ textAlign: textCenter ? 'center' : 'unset' }}
          {...otherProps}
        />
        <label>{label}</label>
        {(otherProps.name === 'password' ||
          otherProps.name === 'confirmPassword') && (
          <div onClick={togglePasswordVisibility}>
            {!passwordShown && <EyeIcon className={styles.icon} />}
            {passwordShown && <EyeSlashIcon className={styles.icon} />}
          </div>
        )}
      </div>
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
}
