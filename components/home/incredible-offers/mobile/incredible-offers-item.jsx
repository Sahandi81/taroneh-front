import Image from 'next/image';

import styles from '@/styles/components/incredible-offers-mobile.module.scss';
import imageLoader from '@/helpers/imageLoader';
import formatPrice from '@/helpers/formatPrice';
import { useRouter } from 'next/router';

export default function IncredibleOffersItem({id, title, img, price, percent}) {
    // const priceHandller =(types)=>{
    
  const entres =price
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
  
  const router = useRouter();
  const goToProductHandller=()=>{
        router.push(`/products/${id}`)
  }
 
  return (
    <div onClick={goToProductHandller} className={styles.item}>
      <div className={styles.image}>
        <Image loader={imageLoader} src={img} alt={title} width={200} height={120} layout='responsive' />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price}>
        <p>{pack}</p>
        <p>{entres[0][0].package["1000"]?formatPrice(entres[0][0].package["1000"]):formatPrice(calculate[0][1])} <span>تومان</span></p>
      </div>
      <div className={styles.percent}>{percent} %</div>
    </div>
  )
}
