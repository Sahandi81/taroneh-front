import OrderProduct from "./order-product";
import styles from "@/styles/components/orders.module.scss";
import OrderTracking from "./order-tracking";
import formatPrice from "@/helpers/formatPrice";

export default function OrderDetail({ address, products, final_price }) {
	// console.log(products[0].type)
	return (
		<div className={styles.detail}>
			{/* recepient */}
			<div className={styles.recepient}>
				<h4 className={styles.recepient_title}>اطلاعات</h4>
				<div className={styles.recepient_content}>
					{/* <div>
            <span>نحوه ارسال سفارش:</span>
            <span>پیک موتوری</span>
          </div> */}

					{/* <div>
            <span>شماره تماس:</span>
            <span>09121234567</span>
          </div> */}

					{/* <div>
            <span>هزینه ارسال:</span>
            <span className={styles.delivery}>رایگان</span>
          </div> */}

					{/* <div>
            <span>نام و نام خانوادگی:</span>
            <span>محمد اکبری</span>
          </div> */}

					<div>
						<span>آدرس تحویل:</span>
						<span>{address}</span>
					</div>

					{/* <div>
            <span>زمان تحویل:</span>
            <span>1400/10/01</span>
          </div> */}

					<div>
						<span>مبلغ سفارش:</span>
						<span>{formatPrice(final_price)} تومان</span>
					</div>
				</div>
			</div>
			{/* order tracking */}
			{/* <OrderTracking /> */}
			{/* products */}
			<div className={styles.products}>
				<h4 className={styles.products_title}>محصولات خریداری شده</h4>
				<div className={styles.products_content}>
					{products.map((item) => (
						<OrderProduct
							key={item.id}
							name={item.type.name}
							img="/img/product-02.jpg"
							price={item.type.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
