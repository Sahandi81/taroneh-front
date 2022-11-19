import { useGetShoppingHistoryQuery } from "@/app/services/apiSlice";
import Container from "@/components/ui/container";
import styles from "@/styles/components/orders.module.scss";
import OrderItem from "./order-item";

export default function Orders({ items }) {
	const { data, isLoading } = useGetShoppingHistoryQuery();

	// console.log("SHOPPINGHIS: ", data);
	// console.log(data.data[16])
	return (
		<Container title="سفارشات">
			<div className={styles.container}>
				<div className={styles.header}>
					<h3>شماره سفارش</h3>
					<h3>مبلغ پرداختی</h3>
					<h3>تاریخ ثبت سفارش</h3>
					<h3>عملیات</h3>
				</div>
				<div className={styles.body}>
					{!isLoading &&
						data?.data?.map(({ _id, ...otherProps }) => (
							<OrderItem key={_id} id={_id} {...otherProps} />
						))}
				</div>
			</div>
		</Container>
	);
}

Orders.defaultProps = {
	items: [
		{ id: "123456", number: "123456", price: 200000, date: "1400/01/25" },
		{ id: "order-02", number: "123456", price: 300000, date: "1400/03/12" },
		{ id: "order-03", number: "123456", price: 400000, date: "1400/04/02" },
		{ id: "order-04", number: "123456", price: 500000, date: "1400/05/09" },
	],
};
