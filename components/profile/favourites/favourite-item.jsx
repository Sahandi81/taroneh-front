import Image from 'next/image';
import StarIcon from '../../icons/star-icon';
import HeartIcon from '../../icons/heart-icon';
import TimesIcon from '../../icons/times-icon';
import formatPrice from '@/helpers/formatPrice';

import styles from '@/styles/components/favourites.module.scss';
import { isProductInWishList, useAddToWishListMutation } from '@/app/services/apiSlice';
import { useSelector } from 'react-redux';
import Spinner from '@/components/ui/spinner';
// import addToWishList from 'pages/api/add_to_wish_list';


export default function FavouriteItem({ id, name, img, price,types }) {
  const [addToWishList, { isLoading }] = useAddToWishListMutation();
	const productInWishList = useSelector((state) =>
		isProductInWishList(state, id)
	);
  

	const handleAddToWishList = async () => {
    
		try {
      
			await addToWishList(id);
		} catch (error) {
			console.log(error);
		}
	};
  const entres = types
  const calculate = Object.entries(entres[0][0].package)

  let pack;
  if(calculate[0][0] !== 'Pack' && calculate[0][0] !== 'One' ){
    pack = `قیمت هر ${calculate[0][0]} گرم `
  }else if(calculate[0][0] === 'Pack'){
    pack = `قیمت هر بسته  `
  }else if(calculate[0][0] === 'One'){
    pack = `قیمت هر دانه  `
  }
  return (
    <div className={styles.item}>
      {/* delete */}
      <div className={styles.delete}>
        <TimesIcon variant={3} />
      </div>
      {/* header */}
      <div className={styles.content}>
        <div className={styles.header}>
          <span  className={styles.rating}>
            5/4 <StarIcon />
          </span>
          {isLoading ? (
					<Spinner className={styles.heart_icon} />
				) : (
					<HeartIcon
						active={true}
						handleClick={handleAddToWishList}
						className={styles.heart_icon}
					/>
				)}
        </div>
        {/* image */}
        <div className={styles.image}>
          <Image
            src={img}
            alt={name}
            width={110}
            height={110}
            placeholder='blur'
            blurDataURL={img}
          />
        </div>
        {/* name */}
        <h3 className={styles.name}>{name}</h3>
        {/* price */}
        <div className={styles.price}>
        <span>{entres[0][0].package["1000"]?"قیمت هر کیلو":pack}</span>
        <span>
            {entres[0][0].package["1000"]?formatPrice(entres[0][0].package["1000"]):formatPrice(calculate[0][1])}
            {formatPrice(price)} <small>تومان</small>
          </span>
        </div>
      </div>
    </div>
  );
}
