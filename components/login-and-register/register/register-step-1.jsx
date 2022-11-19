import Image from 'next/image';
import { useState } from 'react';
import Input from '../../ui/input';
import Button from '../../ui/button';
import styles from '@/styles/components/register.module.scss';

export default function RegisterStep1({
  handleChange,
  email,
  phone,
  password,
  confirmPassword,
  handleSubmit,
  isLoading
}) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(prevState => !prevState);
  };

  return (
    <>
      <div style={{ alignSelf: 'center' }}>
        <Image
          src='/img/register.png'
          alt='register'
          width={330}
          height={273}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          label='نام '
          name='email'
          type='text'
          handleChange={handleChange}
          value={email.value}
          error={email.error}
          required
          autoFocus
        />

        <Input
          label='شماره موبایل'
          name='phone'
          type='text'
          maxLength={11}
          handleChange={handleChange}
          value={phone.value}
          error={phone.error}
          required
        />

        <div className={styles.password_box}>
          <Input
            label='رمز عبور'
            name='password'
            type={passwordShown ? 'text' : 'password'}
            maxLength={30}
            handleChange={handleChange}
            value={password.value}
            error={password.error}
            passwordShown={passwordShown}
            togglePasswordVisibility={togglePasswordVisibility}
            required
            w_auto
          />

          <Input
            label='تکرار رمز'
            name='confirmPassword'
            type={confirmPasswordShown ? 'text' : 'password'}
            maxLength={30}
            handleChange={handleChange}
            value={confirmPassword.value}
            error={confirmPassword.error}
            passwordShown={confirmPasswordShown}
            togglePasswordVisibility={toggleConfirmPasswordVisibility}
            required
            w_auto
          />
        </div>
        <div className={styles.actions}>
          <Button variant='submit' isLoading={isLoading} disabled={isLoading}>
            ثبت نام
          </Button>
        </div>
      </form>
    </>
  );
}
