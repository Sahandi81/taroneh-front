import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
	getCartDiscount,
	selectCartDetails,
	selectCartItems,
	selectCartTotalPrice,
} from "@/features/cart/cartSlice";
import OrderProductsList from "./order-products-list";
import formatPrice from "@/helpers/formatPrice";
import WarningIcon from "../icons/warning-icon";
import TimesIcon from "../icons/times-2-icon";
import styles from "@/styles/components/receipt.module.scss";
import imageLoader from "@/helpers/imageLoader";
import { selectUserAddresses } from "@/app/services/apiSlice";

const currency = "تومان";

export default function Receipt() {
	const cartItems = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotalPrice);
	const discount = useSelector(getCartDiscount);
	const cartDetails = useSelector(selectCartDetails);
	const userAddress = useSelector(selectUserAddresses);

	return (
		<div className={styles.container}>
			<h2>پیش فاکتور</h2>
			<div className={styles.title}>
				<WarningIcon />
				<p>این پیش فاکتور صرفا به منزله بررسی و پرداخت نهایی شما است</p>
			</div>
			<div className={styles.header}>
				<p className={styles.address}>
					<span>آدرس و کد پستی محل تحویل:</span>
					<span>
						{
							userAddress.find((item) => item.id === cartDetails.address)
								?.address
						}
					</span>
				</p>
				{/* <div className={styles.deliver_time}>
          <h4>زمان تحویل:</h4>
          <div>
            <span>چهارشنبه آذر 20</span>
            <span>ساعت 9 تا 15</span>
          </div>
        </div> */}
			</div>
			<OrderProductsList data={cartItems} />
			<table className={styles.table}>
				<thead>
					<tr>
						<th>عکس محصول</th>
						<th>کد محصول</th>
						<th>نام محصولات</th>
						<th>مقدار (کیلوگرم)</th>
						<th>قیمت محصول</th>
						<th>تخفیف</th>
						<th>قیمت کل</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((item) => {
						// console.log(item);
						return (
							<tr key={item.id}>
								<td>
									<Image
										loader={imageLoader}
										src={`/storage/${item.code}/${item.img}`}
										alt={item.name}
										width={70}
										height={70}
									/>
								</td>
								<td>{item.code}</td>
								<td>{item.title}</td>
								<td>{item.quantity}</td>
								<td>
									{formatPrice(item.price)} {currency}
								</td>
								<td>0</td>
								<td>
									{formatPrice(item.price * item.quantity)} {currency}
								</td>
							</tr>
						);
					})}
					{/* <tr>
            <td></td>
            <td>7725549</td>
            <td>خرما</td>
            <td>23</td>
            <td>120,000 {currency}</td>
            <td>50,000 {currency}</td>
            <td>70,000 {currency}</td>
          </tr>

          <tr>
            <td></td>
            <td>8245423</td>
            <td>پرتقال خشک</td>
            <td>5</td>
            <td>50,000 {currency}</td>
            <td>10,000 {currency}</td>
            <td>40,000 {currency}</td>
          </tr>

          <tr>
            <td></td>
            <td>4598753</td>
            <td>پسته خندان</td>
            <td>5</td>
            <td>500,000 {currency}</td>
            <td>70,000 {currency}</td>
            <td>430,000 {currency}</td>
          </tr> */}
				</tbody>
				{/* <tfoot>
          <tr>
            <td colSpan={6}>مجموع:</td>
            <td>500,000 {currency}</td>
          </tr>
          <tr>
            <td colSpan={6}>مقدار کل تخفیف:</td>
            <td>100,000 {currency}</td>
          </tr>
          <tr>
            <td colSpan={6}>مبلغ کسر شده بعد از اعمال کد تخفیف:</td>
            <td>25,000 {currency}</td>
          </tr>
          <tr>
            <td colSpan={6}>مبلغ نهایی بعد از تخفیف:</td>
            <td>800,000 {currency}</td>
          </tr>
        </tfoot> */}
			</table>
			<div className={styles.footer}>
				{discount && (
					<div>
						<button>
							<TimesIcon className={styles.button_icon} />
							<span>حذف تخفیف</span>
						</button>
						<p>
							مبلغ تخفیف <span>0</span> {currency} &nbsp; از فاکتور شما کسر
							گردید
						</p>
					</div>
				)}
				<p>
					مبلغ قابل پرداخت
					<span>{formatPrice(totalPrice)}</span>
					{currency}
				</p>
			</div>
		</div>
	);
}
