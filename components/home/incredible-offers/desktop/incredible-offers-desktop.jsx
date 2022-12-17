import Image from 'next/image';
import IncredibleOffersList from './incredible-offers-list';
import styles from '@/styles/components/incredible-offers-desktop.module.scss';
import { useState } from 'react';
import formatPrice from '@/helpers/formatPrice';
import imageLoader from '@/helpers/imageLoader';

export default function IncredibleOffersDesktop({offers}) {
  const [activeIndex, setActiveIndex] = useState(1);
  const {products, expire, percent } = offers;
  // console.log(expire - Date.now())

  const entres = products[activeIndex - 1].types
  delete entres[0][0].package.inventory
    // console.log(entres[0][0].package)
    const calculate = Object.entries(entres[0][0].package)
    
  // console.log(entres[0][0].package["1000"], calculate[0][1],'types')

  // let productPrice;
  // if(entres[0][0].package["1000"]){
  //     productPrice = entres[0][0].package["1000"]
  // }else{
  //   productPrice = 1000 / calculate[0][0]
  // }
  // console.log(expire , (Date.now() * 1) ,offers,'expire')
  let pack;
  if(calculate[0][0] !== 'Pack' && calculate[0][0] !== 'One' ){
    pack = `قیمت هر ${calculate[0][0]} گرم `
  }else if(calculate[0][0] === 'Pack'){
    pack = `قیمت هر بسته  `
  }else if(calculate[0][0] === 'One'){
    pack = `قیمت هر دانه  `
  }

  const includePng = `/storage/${products[activeIndex - 1].code}/${products[activeIndex - 1].photos[0]}`.endsWith('.png');

  const hours = (expire / (60 * 60 * 1000)).toFixed(0)
  // const minute = 
  return (
    <section className='section'>
      <div className={styles.container}>
        <h2 className={styles.title}>پیشنهادات شگفت انگیز</h2>
        <IncredibleOffersList activeIndex={activeIndex}
         setActiveIndex={setActiveIndex} percent={percent} items={offers}/>
        
        <div className={styles.timer}>
          <p>زمان باقی مانده تا پایان سفارش</p>
          <div>
            <span>30</span>
            <span>:</span>
            <span>35</span>
            <span>:</span>
            <span>{20}</span>
          </div>
        </div>
        <div className={styles.price}>
          <span>توضیحات</span>
          <span>ویژه طارونه</span>
          <span>{pack}</span>
          <span>
          {entres[0][0].package["1000"]?formatPrice(entres[0][0].package["1000"]):formatPrice(calculate[0][1])}
            
            تومان</span>
        </div>
        <div className={styles.image}>
          <Image
          loader={includePng && imageLoader}
          src ={
          includePng?`/storage/${products[activeIndex - 1].code}/${products[activeIndex - 1].photos[0]}`:'/img/offers.jpg'}
            alt='Product'
            width={300}
            height={170}
            placeholder='blur'
            blurDataURL={includePng?
            `/storage/${products[activeIndex - 1].code}/${products[activeIndex - 1].photos[0]}`:'/img/offers.jpg'}
            layout='responsive'
          />
        </div>
      </div>
    </section>
  );
}
