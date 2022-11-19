import { useState } from 'react';
import FormInput from './form-input';
import styles from '@/styles/components/personal-info.module.scss';
import Button from '@/components/ui/button';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState({
    value: '',
    error: ''
  });

  const [password, setPassword] = useState({
    value: '',
    error: ''
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'oldPassword':
        setOldPassword({ error: '', value });
        break;
      case 'password':
        setPassword({ error: '', value });
        break;
      case 'confirmPassword':
        setConfirmPassword({ error: '', value });
        break;
      default:
        break;
    }
    
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      setConfirmPassword(prevState => ({
        ...prevState,
        error: 'Confirm Password does not match to Password!!!'
      }));
      return;
    }
  };

  return (
    <div className={styles.change_password}>
      <form onSubmit={handleSubmit}>
        <FormInput
          id='oldPassword'
          name='oldPassword'
          type='password'
          value={oldPassword.value}
          handleChange={handleChange}
          label='کلمه عبور فعلی'
          required
        />

        <FormInput
          id='password'
          name='password'
          type='password'
          value={password.value}
          handleChange={handleChange}
          label='کلمه عبور جدید'
          required
        />

        <FormInput
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          value={confirmPassword.value}
          handleChange={handleChange}
          label='تکرار کلمه عبور جدید'
          error={confirmPassword.error}
          required
        />

        <Button type='submit' variant='primary' rounded>
          تغییر رمز عبور
        </Button>
      </form>
    </div>
  );
}
