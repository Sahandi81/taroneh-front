import { useState, useRef } from 'react';
import styles from '@/styles/components/contact-page.module.scss';
import FormInput from './form-input';
import Button from '../ui/button';
import { DEPARTMENT_DATA } from './department.data';
import Department from './department';
import { useAddContactMessageMutation } from '@/app/services/apiSlice';
import Spinner from '../ui/spinner';

export default function Form({notification, setNotification}) {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });
 
  const handleChange = e => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleClick = value =>
    setInfo(prevInfo => ({ ...prevInfo, department: value }));

    const [sendContactMessage, { isLoading } ] = useAddContactMessageMutation()
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(info);
    const data ={
      name: info.name,
      email: info.email,
      mobile: info.phone,
      type: info.department,
      body: info.message 
    }
    await sendContactMessage(data).unwrap().then(res=>{
      setNotification({show: true,
      status: "success",
      message: 'پیام ارسال شد'})
    }).catch(er=>{
      setNotification({
        show: true,
        status: "error",
        message: 'پیام ارسال نشد'
      })

    })

    setTimeout(()=>{
        setNotification({show: false,
          status: null,
          message: ''})
    },[3000])
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>به راحتی باما در تماس باشید</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <FormInput
            id='name'
            label='نام و نام خانوادگی:'
            placeholder='مثال: احمد احمدی'
            name='name'
            value={info.name}
            handleChange={handleChange}
            type='text'
            required
            style={{ width: '75%' }}
          />
          <div
            className={styles.email_phone}
            // style={{
            //   display: 'flex',
            //   gap: '1rem',
            //   justifyContent: 'space-between',
            //   width: '75%'
            // }}
          >
            <FormInput
              id='email'
              label='ایمیل:'
              placeholder='مثال: name@taroneh.ir'
              name='email'
              value={info.email}
              handleChange={handleChange}
              type='email'
              required
            />

            <FormInput
              id='phone'
              label='شماره موبایل:'
              placeholder='مثال: 09121234567'
              name='phone'
              value={info.phone}
              handleChange={handleChange}
              type='text'
              required
            />
          </div>
          {/* <FormInput
            id='department'
            label='دپارتمان:'
            placeholder='تیم مورد نظر خود را انتخاب کنید'
            name='department'
            value={info.department}
            handleChange={handleChange}
            required
            style={{ width: '75%' }}
          /> */}
          <Department
            items={DEPARTMENT_DATA}
            handleClick={handleClick}
            currentValue={info.department}
          />
          {/* dpojfdsuih */}
        </div>
        <div className={styles.message}>
          <label htmlFor='message'>متن پیام:</label>
          <textarea
            name='message'
            placeholder='پیام خود را بنویسید و ارسال را بزنید'
            onChange={handleChange}
            rows={13}
            value={info.message}
            required
          ></textarea>
          {isLoading?<Spinner></Spinner>:<Button
            type='submit'
            variant='primary'
            rounded
            style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}
          >
            ارسال پیام
          </Button>}
        </div>
      </form>
      
    </div>
    
  );
}
