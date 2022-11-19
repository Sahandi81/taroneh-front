import Image from 'next/image';
import Input from '../../ui/input';
import Button from '../../ui/button';
import styles from '@/styles/components/login.module.scss';

export default function LoginStep2({ phone, handleClick, handleChange }) {
  return (
    <>
      <div className={styles.step2} style={{ paddingTop: '3rem' }}>
        <Input
          label='شماره موبایل خود را وارد نمایید'
          name='phone'
          type='text'
          maxLength={11}
          handleChange={handleChange}
          value={phone.value}
          error={phone.error}
          required
          autoFocus
        />

        <div className={styles.actions}>
          <Button
            variant='submit'
            handleClick={handleClick}
            // isLoading={isLoading}
            // disabled={isLoading}
          >
            ارسال رمز یکبار مصرف
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src='/img/verify-code.png'
          alt='verify code'
          width={327}
          height={259}
        />
      </div>
    </>
  );
}
