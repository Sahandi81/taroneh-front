import { useEffect, useState } from "react";

import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";
import ProductOtherInfo from "./product-other-info";
import ProductModal from "./product-modal";
import ProductRelateList from "./product-relate-list";
import ProductAddToCartModal from "./product-add-to-cart-modal";
import Modal from "../ui/modal";
import styles from "@/styles/components/product.module.scss";

export default function Product({ product, relatedProducts }) {
	const [showGalley, setShowGalley] = useState(false);
	const [showAddToCart, setShowAddToCart] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [weight, setWeight] = useState(250);
	const [price, setPrice] = useState(50000);
	const [oldPrice, setOldPrice] = useState(70000);
	const [selectedPackage, setSelectedPackage] = useState(product.types[0][0]);
	const handleClickGallery = () => setShowGalley(true);
	const handleCloseGallery = () => setShowGalley(false);

	const handleClickAddToCart = () => setShowAddToCart(true);
	const handleCloseAddToCart = () => setShowAddToCart(false);


	useEffect(()=>{
		delete product.types[0][0].package.inventory
		const value = Object.entries(product.types[0][0].package);

			setQuantity(1);
			setWeight(value[0][0]);
			setPrice(value[0][1]);
			setOldPrice(value[0][1]);
	},[product.types[0][0].package])

	useEffect(() => {
		setPrice(Number(quantity * selectedPackage.package[weight]));
		setOldPrice(Number(quantity * selectedPackage.package[weight]));
	}, [quantity, product.types, weight, selectedPackage.package]);

	if (!product) return null;

	const handleClickPlus = () => {
		setQuantity((prevState) => prevState + 1);
	};
	const handleClickMinus = () => {
		setQuantity((prevState) => (prevState === 1 ? 1 : prevState - 1));
	};
	const DiscoutionCalculation = (amount) => {
		
		const percent = Number(product.amount);
		return (Number(amount) * (1 - percent/100)).toFixed(0)
	};
	const handleSelectWeight = (e) => {
		const { value } = e.target;
		setQuantity(1);
		setWeight(value);
		setPrice(selectedPackage.package[value]);
		setOldPrice(selectedPackage.package[value]);
		
	};
	// console.log(price, oldPrice)
	const handleSelectPackage = (e) => {
		const { value } = e.target;
		setSelectedPackage(product.types[0].find((item) => item.name === value));
	};
		// console.log(product.photos)
	return (
		<section className="section">
			<div className={styles.container}>
				<article>
					<ProductGallery
						handleClickItem={handleClickGallery}
						img={product.photos[0]}
						images={product.photos}
						product_code={product.code}
					/>
					
					<ProductInfo
						handleClickAddToCart={handleClickAddToCart}
						handleClickPlus={handleClickPlus}
						handleClickMinus={handleClickMinus}
						handleSelectWeight={handleSelectWeight}
						handleSelectPackage={handleSelectPackage}
						DiscoutionCalculation={DiscoutionCalculation}
						quantity={quantity}
						price={price}
						oldPrice={oldPrice}
						item={product}
						selected_package={selectedPackage}
						Weigh={weight}
					/>
				</article>
				
				<ProductOtherInfo />
				<ProductRelateList alikeProduct={product._id} _id={product._id} items={relatedProducts} />
				
				
			</div>
			<Modal onClose={handleCloseGallery} show={showGalley}>
				<ProductModal
					img={product.photos[0]}
					images={product.photos}
					product_code={product.code}
				/>
				
			</Modal>
			<Modal
				onClose={handleCloseAddToCart}
				show={showAddToCart}
				title="افزودن به سبد خرید"
			>
				
				<ProductAddToCartModal
					handleClickPlus={handleClickPlus}
					handleClickMinus={handleClickMinus}
					closeModal={handleCloseAddToCart}
					DiscoutionCalculation= {DiscoutionCalculation}
					quantity={quantity}
					totalPrice={product.amount > 0?DiscoutionCalculation(price):price}
					price={product.amount > 0?DiscoutionCalculation((selectedPackage.package[weight])):(selectedPackage.package[weight])}
					packageName={selectedPackage}
					weight={weight}
					img={product.photos[0]}
					id={product._id}
					{...product}
				/>
			</Modal>
		</section>
	);
}
