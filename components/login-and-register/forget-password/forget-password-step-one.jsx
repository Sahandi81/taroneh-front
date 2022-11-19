import Input from '../../ui/input';
import Button from '../../ui/button';

export default function ForgetPasswordStepOne({handleChange, value, error}) {
  return (
    <>
      <Input
        name='phone'
        type='text'
        placeholder='شماره موبایل خود را وارد نمایید'
        maxLength={11}
        handleChange={handleChange}
        value={value}
        error={error}
        required
        autoFocus
      />
      <Button variant='submit'>ارسال کد بازیابی</Button>
    </>
  )
}
