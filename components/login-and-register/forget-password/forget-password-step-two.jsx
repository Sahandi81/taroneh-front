import { useState } from 'react';

import useTimer from '@/helpers/useTimer';

import Input from '../../ui/input';
import Button from '../../ui/button';

import styles from '@/styles/components/forget-password.module.scss';

export default function ForgetPasswordStepTwo({
  handleChange,
  recoveryCode,
  password,
  confirmPassword,
  errorRecoveryCode,
  errorPassword,
  errorConfirmPassword,
  sendCodeVerify
}) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const {timer, toggleTimer, setToggleTimer} = useTimer();

  const handleClickResendCode = e => {
    setToggleTimer(true);
    sendCodeVerify()
  };

  const togglePasswordVisibility = e => {
    setPasswordShown(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = e => {
    setConfirmPasswordShown(prevState => !prevState);
  };

  return (
    <>
      <Input
        name='recoveryCode'
        type='text'
        placeholder='کد بازیابی پیامک شده'
        maxLength={6}
        handleChange={handleChange}
        value={recoveryCode}
        error={errorRecoveryCode}
        required
        autoFocus
      />
      <Input
        name='password'
        type={passwordShown ? 'text' : 'password'}
        placeholder='رمز عبور جدید'
        maxLength={30}
        handleChange={handleChange}
        value={password}
        error={errorPassword}
        passwordShown={passwordShown}
        togglePasswordVisibility={togglePasswordVisibility}
        required
      />
      <Input
        name='confirmPassword'
        type={confirmPasswordShown ? 'text' : 'password'}
        placeholder='تکرار رمز عبور جدید'
        maxLength={30}
        handleChange={handleChange}
        value={confirmPassword}
        error={errorConfirmPassword}
        passwordShown={confirmPasswordShown}
        togglePasswordVisibility={toggleConfirmPasswordVisibility}
        required
      />
      <div className={styles.actions}>
        {toggleTimer ? (
          <div className={styles.timer}>
            <span>00:{timer < 10 ? '0' + timer : timer}</span>
            <span>مانده تا ارسال کد</span>
          </div>
        ) : (
          <Button variant='resendCode' handleClick={handleClickResendCode}>
            ارسال مجدد کد
          </Button>
        )}
        <Button variant='submit'>تایید</Button>
      </div>
    </>
  );
}
