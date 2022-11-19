import { useState } from 'react';
import cn from 'classnames';
import FormInput from './form-input';
import styles from '@/styles/components/contact-page.module.scss';

export default function Department({ items, currentValue, handleClick }) {
  const [show, setShow] = useState(false);

  const handleClickInput = () => setShow(prevShow => !prevShow);

  const localHandleClick = value => {
    setShow(false);
    handleClick(value);
  }

  return (
    <div className={styles.department}>
      <FormInput
        id='department'
        label='بخش ها'
        placeholder='تیم مورد نظر خود را انتخاب کنید'
        name='department'
        defaultValue={currentValue}
        onClick={handleClickInput}
        style={{ width: '75%', cursor: 'pointer' }}
        required
        readOnly
      />
      <span className={cn({
        [styles.select_icon]: true,
        [styles.select_icon_active]: show
      })}></span>
      <div className={cn({
        [styles.options]: true,
        [styles.options_show]: show
      })}>
        {items.map(({ id, value }) => (
          <p key={id} onClick={() => localHandleClick(value)}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
