import Button from '../ui/button';
import styles from '@/styles/components/sign-out-modal.module.scss';

export default function SignOutModal({
  isLoading,
  handleClickOk,
  handleClickNo
}) {
  return (
    <div className={styles.container}>
      <p>آیا میخواهید از حساب کاربری خود خارج شوید؟</p>
      <div className={styles.actions}>
        <Button
          variant='primary'
          handleClick={handleClickOk}
          isLoading={isLoading}
          rounded
        >
          بله
        </Button>
        <Button variant='gray' handleClick={handleClickNo} rounded>
          خیر
        </Button>
      </div>
    </div>
  );
}
