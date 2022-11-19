import { useBuyMutation } from "@/app/services/apiSlice";
import { selectCartItems } from "@/features/cart/cartSlice";
import styles from "@/styles/components/payment.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../ui/spinner";

export default function DiscountAndPaymentType() {
	const [discount, setDiscount] = useState("");

	const [buy, { isLoading }] = useBuyMutation();
	const cartItems = useSelector(selectCartItems);

	const addDiscount = () => {
		buy({
			discount_code: discount,
			create_factor: false,
			products: cartItems.map((item) => {
				return {
					id: item.id,
					type: {
						name: item.packageName,
						package: `${item.weight}`,
						number: item.quantity,
					},
				};
			}),
		})
			.unwrap()
			.then((data) => {
				// console.log(data);
			})
			.catch((error) => {
				console.error(error);
				alert(
					error.data.errors?.discount_code
						? "کد تخفیف وارد شده نامعتبر است"
						: "خطایی رخ داده است"
				);
			});
	};
	return (
		<div className={styles.discount}>
			<h2>تخفیف و نوع پرداخت</h2>
			<div className={styles.box}>
				<h2 className={styles.title}>کد تخفیف</h2>
				<div className={styles.discount_gift_cart}>
					<div>
						<div>
							<label htmlFor="discountCode">کد تخفیف</label>
							<div className={styles.input}>
								<input
									type="text"
									id="discountCode"
									value={discount}
									onChange={(e) => setDiscount(e.target.value)}
								/>
								{isLoading ? (
									<Spinner />
								) : (
									<button onClick={addDiscount}>ثبت تخفیف</button>
								)}
							</div>
						</div>
					</div>
					{/* <div>
            <div>
              <label htmlFor="giftCart">کارت هدیه</label>
              <div className={styles.input}>
                <input type="text" id='giftCart' />
                <button>ثبت کارت هدیه</button>
              </div>
            </div>
          </div> */}
				</div>
			</div>
			<div className={styles.box}>
				<h2 className={styles.title}>پرداخت آنلاین</h2>
				<div className={styles.peyment_type}>
					<div className={styles.zarinpal}>
						<img src="/zarinpal.png" alt="Zarinpal" />
					</div>
				</div>
			</div>
		</div>
	);
}
