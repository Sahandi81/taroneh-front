import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import formatPrice from '@/helpers/formatPrice';
import StarIcon from '../icons/star-icon';
import HeartIcon from '../icons/heart-icon';
import {
	isProductInWishList,
	selectWishListItems,
	useAddToWishListMutation,
  useDeleteWishListMutation,
  useGetWishListQuery
} from "@/app/services/apiSlice";
import styles from '@/styles/components/swiper-item.module.scss';
import imageLoader from "@/helpers/imageLoader";
import { useSelector } from 'react-redux';
import Spinner from '../ui/spinner';

export default function SwiperItem({ id, name, img,slug, price,amount, percent,product_code, types, stars }) {
  const [addToWishList, { isLoading }] = useAddToWishListMutation();
  const [deleteWishList] = useDeleteWishListMutation();
  const {data } = useGetWishListQuery()
  // console.log(data, 'aihdi')
	const productInWishList = useSelector((state) =>
		isProductInWishList(state, id)
	);
  // const route = useRouter();
  // console.log(`/storage/${product_code}/${img}`,'swip')
	const handleAddToWishList = async () => {
    
		try {
      if(!productInWishList){
			await addToWishList(id).unwrap().then(res=>{
        // console.log(res)
      }).catch(er=>console.log(er));
    }else{
      
      await deleteWishList({wish_list_id: id})
      // useGetWishListQuery()
    }
		} catch (error) {
			console.log(error);
		}
	};
 
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${slug}`);
  };

  // const handleClickLike = () => {
  //   console.log(id)
  // };
  const entres = types
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
  let pack;
  if(calculate[0][0] !== 'Pack' && calculate[0][0] !== 'One' ){
    pack = `قیمت هر ${calculate[0][0]} گرم `
  }else if(calculate[0][0] === 'Pack'){
    pack = `قیمت هر بسته  `
  }else if(calculate[0][0] === 'One'){
    pack = `قیمت هر دانه  `
  }

  const DiscoutionCalculation = (amount) => (amount * (1 - percent/100)).toFixed(0);
  
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onClick={handleClick}>
        <div className={styles.header}>
          <div className={styles.rating}>
            {stars}/ 5
            <StarIcon className={styles.star_icon} />
          </div>
          {/* <HeartIcon className={styles.heart_icon} /> */}
        </div>
        <div className={styles.img}>
          <Image
            loader={imageLoader}
            src={`/storage/${product_code}/${img}`}
            alt={name}
            width={110}
            height={110}
            placeholder='blur'
            blurDataURL={`/storage/${product_code}/${img}`}
          />
          
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.price}>
            <p>{entres[0][0].package["1000"]?"قیمت هر کیلو":pack}</p>
            {percent > 0 ?<del>
            {entres[0][0].package["1000"]?formatPrice(entres[0][0].package["1000"]):formatPrice(calculate[0][1])}
             <small>تومان</small>
            </del>:<span style={{color:'#fff'}}>_</span>}
            <p>
            {entres[0][0].package["1000"]?formatPrice(DiscoutionCalculation(entres[0][0].package["1000"])):
            formatPrice(DiscoutionCalculation(calculate[0][1]))}
             <small>تومان</small>
            </p>
          </div>
          <div className={styles.percent}>{percent} %</div>
        </div>
      </div>
      {isLoading ? (
					<Spinner className={styles.heart_icon} />
				) : (
					<HeartIcon
						active={productInWishList}
						handleClick={handleAddToWishList}
						className={styles.heart_icon}
					/>
				)}
      {/* <HeartIcon className={styles.heart_icon} handleClick={handleAddToWishList} /> */}
    </div>
  );
}
