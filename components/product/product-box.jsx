import Image from "next/image";

import StarIcon from "../icons/star-icon";
import HeartIcon from "../icons/heart-icon";

import styles from "@/styles/components/product-box.module.scss";
import imageLoader from "@/helpers/imageLoader";
import {
	isProductInWishList,
	selectWishListItems,
	useAddToWishListMutation,
} from "@/app/services/apiSlice";
import Spinner from "../ui/spinner";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import formatPrice from "@/helpers/formatPrice";


export default function ProductBox({
	id,
	name,
	img,
	price,
	percent,
	handleClick,
	types,
	stars
}) {
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
	// entres[0][0].package.inventory
    let calculate ;
	
	let pack;
	if(types){
		delete entres[0][0].package.inventory;
	//   console.log(entres[0][0].package)
	calculate = Object.entries(entres[0][0].package)
  if(calculate[0][0] !== 'Pack' && calculate[0][0] !== 'One' ){
    pack = `قیمت هر ${calculate[0][0]} گرم `
  }else if(calculate[0][0] === 'Pack'){
    pack = `قیمت هر بسته  `
  }else if(calculate[0][0] === 'One'){
    pack = `قیمت هر دانه  `
  }};
  const DiscoutionCalculation = (amount) => (amount * (1 - percent/100)).toFixed(0);

	return (
		<Link href={`/products/${id}`} passHref>
		<div className={styles.container} onClick={handleClick}>
			<div className={styles.header}>
				<div className={styles.rating}>
					5 / {stars}
					<StarIcon className={styles.star_icon} />
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
			</div>

			<>
				<div className={styles.img}>
					<Image
						loader={imageLoader}
						src={img}
						alt={name}
						width={90}
						height={90}
						placeholder="blur"
						blurDataURL={img}
					/>
				</div>
				
					<div className={styles.content}>
						<h3 className={styles.title}>{name}</h3>
						<div className={styles.price}>
							<p>
							{entres?entres[0][0].package["1000"]?"قیمت هر کیلو":pack:"قیمت هر کیلو"}
							</p>
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
						{percent > 0 && <div className={styles.percent}>{percent} %</div>}
					</div>
			</>
		</div>
				</Link>
	);
}
