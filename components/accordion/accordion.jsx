import { useState } from 'react';
import QuestionIcon from '../icons/question-icon';
import ArrowTopIcon from '../icons/arrow-top-icon';

import styles from '@/styles/components/accordion.module.scss';

export default function Accordion() {
  const [contentShown, setContentShown] = useState(false);

  const handleClick = () => setContentShown(prevState => !prevState);

  return (
    <div className={styles.container}>
      <QuestionIcon className={styles.question_icon}/>
      <div className={styles.title}>
        <p onClick={handleClick}>
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در دهه شصت می باشد؟</p>
      </div>
      <ArrowTopIcon className={`${styles.arrow} ${contentShown ? styles.arrow_close : ''}`} handleClick={handleClick} />
      <div className={`${styles.content} ${contentShown ? styles.content_shown : ''}`}>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف 
.بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.</p>
      </div>
    </div>
  )
}
