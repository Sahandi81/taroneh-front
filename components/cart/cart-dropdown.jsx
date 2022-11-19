import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleCart,
	selectCartItems,
	selectCartTotalPrice,
} from "@/features/cart/cartSlice";
import { selectUser } from "@/features/auth/authSlice";
import formatPrice from "@/helpers/formatPrice";
import Button from "../ui/button";
import CartItem from "./cart-item";
import CartEmptyIcon from "../icons/cart-empty-icon";
import styles from "@/styles/components/cart-dropdown.module.scss";

export default function CartDropdown() {
	const router = useRouter();
	const dispatch = useDispatch();
	const items = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotalPrice);
	const user = useSelector(selectUser);
	const dropdownRef = useRef(null);

	// console.log(items,"items")
	useEffect(() => {
		function handleClickOutside(event) {
			// debugger;
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				dispatch(toggleCart());
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef, dispatch]);

	const handleClick = () => {
		dispatch(toggleCart());

		if (user) {
			router.push("/checkout/shipping");
		} else {
			router.push("/login");
		}
	};
		// console.log(items)
	return (
		<div className={styles.container} ref={dropdownRef}>
			{/* Items */}
			{items.length > 0 && (
				<div className={styles.items}>
					{items.map((item) => (
						<CartItem key={item.id} item={item} />
					))}

				</div>
			)}

			{/* Actions */}
			{items.length > 0 && (
				<div className={styles.actions}>
					<div className={styles.totalPrice}>
						<label>قیمت کل</label>
						<p>
							{formatPrice(totalPrice)} <span>تومان</span>
						</p>
					</div>
					{/* یخسهتبعهیساع */}
					<Button variant="checkout" rounded handleClick={handleClick}>
						نهایی کردن خرید
					</Button>
				</div>
			)}

			{/* Cart Empty */}
			{items.length === 0 && (
				<div className={styles.empty}>
					<h2>سبد خرید</h2>
					<CartEmptyIcon />
					<h3>سبد خرید شما خالی است</h3>
				</div>
			)}
		</div>
	);
}
