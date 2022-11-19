import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import { selectUser } from "@/features/auth/authSlice";

import Button from "../ui/button";
import WeightIcon from "../icons/weight-icon";
import formatPrice from "@/helpers/formatPrice";
import styles from "@/styles/components/product-add-to-cart-modal.module.scss";
import imageLoader from "@/helpers/imageLoader";

export default function ProductAddToCartModal({
	id,
	title,
	img,
	price,
	totalPrice,
	quantity,
	weight,
	handleClickPlus,
	handleClickMinus,
	closeModal,
	code,
	packageName,
}) {
	const router = useRouter();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	const handleClickCheckout = () => {
		dispatch(
			addItem({
				id,
				title,
				img,
				price,
				quantity,
				weight,
				code,
				packageName: packageName.name,
			})
		);
		if (user) {
			router.push("/checkout/shipping");
		} else {
			router.push("/login");
		}
	};

	const handleClickContinueShopping = () => {
		dispatch(
			addItem({
				id,
				title,
				img,
				price,
				quantity,
				weight,
				code,
				packageName: packageName.name,
			})
		);
		closeModal();
	};

	return (
		<div  className={styles.container}>
			<div  className={styles.body}>
				<div className={styles.img}>
					<Image
						src={`/storage/${code}/${img}`}
						alt={title}
						width={170}
						height={170}
						placeholder="blur"
						blurDataURL={`/storage/${code}/${img}`}
						loader={imageLoader}
					/>
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<div className={styles.price}>
						<span>قیمت</span>
						<div>
							<span>{formatPrice(totalPrice)}</span>
							<span>تومان</span>
						</div>
					</div>
					<div className={styles.weight}>
						<div>
							<span>تعداد</span>
							<div className={styles.weight_icon}>
								<span>{quantity}</span>
								<WeightIcon />
							</div>
						</div>
						<div>
							<Button variant="plus" handleClick={handleClickPlus} />
							<Button variant="minus" handleClick={handleClickMinus} />
						</div>
					</div>
					<div className={styles.actions}>
						<Button
							variant="continueShopping"
							rounded
							handleClick={handleClickContinueShopping}
						>
							ادامه خرید
						</Button>
						<Button
							variant="checkout"
							rounded
							handleClick={handleClickCheckout}
						>
							نهایی کردن خرید
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
