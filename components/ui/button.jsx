import PlusIcon from '../icons/plus-icon';
import MinusIcon from '../icons/minus-icon';
import styles from '@/styles/components/button.module.scss';

export default function Button({
  variant,
  color,
  handleClick,
  rounded,
  children,
  isLoading,
  ...otherProps
}) {
  let type = variant === 'submit' ? 'submit' : 'button';

  return (
    <button
      type={type}
      className={`${styles.btn} ${color ? styles[color] : ''} ${
        rounded ? styles.rounded : ''
      } ${styles[variant]}`}
      onClick={handleClick}
      disabled={isLoading}
      {...otherProps}
    >
      {variant === 'addToCart' && (
        <span>
          <PlusIcon className={styles.icon} />
        </span>
      )}
      {variant === 'plus' && <PlusIcon className={styles.icon} />}
      {variant === 'minus' && <MinusIcon className={styles.icon} />}
      {isLoading ? <span className={styles.loading}>&nbsp;</span> : children}
    </button>
  );
}
