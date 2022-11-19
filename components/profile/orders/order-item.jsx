import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ArrowGreenIcon from "@/components/icons/arrow-green-icon";
import Button from "@/components/ui/button";
import formatPrice from "@/helpers/formatPrice";
import styles from "@/styles/components/orders.module.scss";
import OrderDetail from "./order-detail";
import { calender } from "@/data/calender";
// import JMoment from "jalali-moment";

export default function OrderItem({
	id,
	code,
	final_price,
	created_at,
	products,
	address,
}) {
	const [showDetail, setShowDetail] = useState(false);
	const handleClickDetails = (e) => setShowDetail((prevState) => !prevState);
	const router = useRouter();

	useEffect(() => {
		if (router.asPath.slice(16) === id) {
			setShowDetail(true);
		}
	}, []);

	const handleClickReOrder = () => {
		// console.log(products);
		// dispatch(
		// 	addItem({
		// 		id,
		// 		title,
		// 		img,
		// 		price,
		// 		quantity,
		// 		weight,
		// 		code,
		// 		packageName: packageName.name,
		// 	})
		// );
		// closeModal();
	};

	return (
		<div className={styles.item}>
			<div className={styles.master} id={id}>
				<h4>#{code}</h4>
				<h4>{formatPrice(final_price)} تومان</h4>
				<h4>{calender(created_at)}</h4>
				<div className={styles.actions}>
					{/* <Button variant="primary" handleClick={handleClickReOrder} rounded>
						خرید مجدد
					</Button> */}
					<Button
						variant="primary-outline"
						handleClick={handleClickDetails}
						rounded
					>
						<span>
							جزئیات سفارش <ArrowGreenIcon className={styles.icon} />
						</span>
					</Button>
				</div>
			</div>
			{showDetail && (
				<OrderDetail
					products={products}
					address={address}
					final_price={final_price}
				/>
			)}
		</div>
	);
}
