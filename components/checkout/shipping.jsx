import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "@/features/auth/authSlice";
import { selectCartItems, setCartDetails } from "@/features/cart/cartSlice";
import ProgressBar from "./progress-bar";
import Basket from "./basket";
import RadioButton from "../ui/radio-button";
import Button from "../ui/button";
import ArrowLeft from "../icons/arrow-left-white-icon";
import Notification from "../ui/notification";
import Modal from "../ui/modal";
import AddAddress from "../profile/addresses/add-address";
import styles from "@/styles/components/shipping.module.scss";

import {
	selectUserAddresses,
	useBuyMutation,
	useGetUserDetailsQuery,
	useCostPostMutation
} from "@/app/services/apiSlice";
import { MSG_SELECT_ADDRESS, MSG_EMPTY_BASKET } from "@/data/messages";

export default function Shipping() {
	const { data } = useGetUserDetailsQuery();
	// console.log(data, 'data')
	const [shipping, setShipping] = useState({
		address: "",
		deliveryTime: "",
		note: "",
	});
	const [theWay, setTheWay] = useState(0);
	const [notification, setNotification] = useState({
		show: false,
		status: null,
		message: "",
	});

	
	
	useEffect(() => {
		if (notification.show) {
			const timer = setTimeout(() => {
				setNotification({
					show: false,
					status: null,
					message: "",
				});
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [notification.show]);

	const [buy, { isLoading }] = useBuyMutation();
	const [showAddAddress, setShowAddAddress] = useState(false);

	const handleClickAddAddress = () => setShowAddAddress(true);
	const handleClose = () => setShowAddAddress(false);

	const router = useRouter();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	const userAddress = useSelector(selectUserAddresses);
	const cartItems = useSelector(selectCartItems);

	const handleClickStep = (routerPath) => {
		if (routerPath === "/checkout/payment") {
			if (shipping.address.length === 0) {
				setNotification({
					show: true,
					status: "error",
					message: MSG_SELECT_ADDRESS,
				});
				return;
			}

			if (cartItems && cartItems.length === 0) {
				setNotification({
					show: true,
					status: "error",
					message: MSG_EMPTY_BASKET,
				});
				return;
			}
		}

		router.push(routerPath);
	};

	const handleClickContinue = (e) => {
		console.log('shipping')
		e.preventDefault();
		if (shipping.address.length === 0) {
			setNotification({
				show: true,
				status: "error",
				message: MSG_SELECT_ADDRESS,
			});
			return;
		}

		if (cartItems && cartItems.length === 0) {
			setNotification({
				show: true,
				status: "error",
				message: MSG_EMPTY_BASKET,
			});
			return;
		}

		// prepare cart items
		const products = cartItems.map((item) => {
			return {
				id: item.id,
				type: {
					name: item.packageName,
					package: `${item.weight}`,
					number: item.quantity,
				},
			};
		});

	
		dispatch(
			setCartDetails({
				address: shipping.address[0]._id,
				delivery_time: shipping.deliveryTime || "زمان تست",
			})
		);

		buy({
			details: {
				address: shipping.address[0]._id,
				delivery_time: shipping.deliveryTime || "زمان تست",
			},
			products,
			create_factor: false,
		})
			.unwrap()
			.then((data) => {
				// console.log(data);
				// costPost({cost: theWay, min:theWay}).unwrap().then(res=>{

				// })
				router.push("/checkout/payment");

			})
			.catch((error) => {
				console.error(error,'uyugy');
			});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
			// console.log( value, name)
		setShipping((prevShipping) => ({
			...prevShipping,
			[name]: user.address.filter(el=> el._id  === value ),
		}));
	};
	// console.log(user)
	return (
		<section className="section">
			<div className={styles.container}>
				{/* <Map/> */}
				<div className={styles.shipping}>
					<ProgressBar step={1} handleClick={handleClickStep} />
					<div className={styles.body}>
						<h1>انتخاب مکان و زمان</h1>
						<div className={styles.content}>
							{/* user info */}
							<div className={styles.box}>
								<h2 className={styles.title}>اطلاعات کاربری</h2>
								<div className={styles.userInfo}>
									<div>
										<span>نام و نام ‌خانوادگی:</span>
										<span>{`${user?.f_name} ${user?.l_name}`}</span>
									</div>
									<div>
										<span>شماره موبایل:</span>
										<span>{user?.phone}</span>
									</div>
								</div>
							</div>
							
							{/* address */}
							<div className={styles.box}>
								<h2 className={styles.title}>آدرس انتخاب شده</h2>
								<div className={styles.address}>
									{ user?.address.length > 0 && user?.address[0]._id ? user?.address?.map((item, index) => (
										<div key={item._id}>
											<RadioButton
												name="address"
												value={item._id}
												id={`address-${index}`}
												handleChange={handleChange}
											/>
											<p>{item.address}</p>
										</div>
									)):null}
									{/* <div>
										<RadioButton
											name="address"
											value="address-1"
											id="address-1"
											handleChange={handleChange}
										/>
										<p>
											خیابان شهید بهشتی، خیابان پاکستان جنب پمپ بنزین، کوچه اول
											سمت چپ (کوچه دوم) ، پلاک ۱۵
										</p>
									</div>
									<div>
										<RadioButton
											name="address"
											value="address-2"
											id="address-2"
											handleChange={handleChange}
										/>
										<p>
											تهران، بلوار مرزداران، تقاطع خیابان آریافر، پلاک ۱۲۵،
											ساختمان دانش، طبقه ۵، واحد ۹
										</p>
									</div> 
									*/}
									<Button
										color="blue"
										rounded
										handleClick={handleClickAddAddress}
									>
										+&nbsp; ثبت آدرس جدید
									</Button>
								</div>
							</div>
							{/* date and time */}
							{/* <div className={styles.box}>
                <div className={styles.days}>
                  <h2 className={`${styles.title} ${styles.title_active}`}>
                    چهارشنبه آذر 20
                  </h2>
                  <h2 className={styles.title}>پنجشنبه آذر 21</h2>
                </div>
                <div className={styles.clock}>
                  <div>
                    <RadioButton
                      name='deliveryTime'
                      value='time-1'
                      id='time-1'
                      handleChange={handleChange}
                    />
                    <p>ساعت 9 الی 15</p>
                  </div>
                  <div>
                    <RadioButton
                      name='deliveryTime'
                      value='time-2'
                      id='time-2'
                      handleChange={handleChange}
                    />
                    <p>ساعت 15 الی 20</p>
                  </div>
                </div>
              </div> */}
							{/* description */}
							<div className={styles.box}>
								<h2 className={styles.title}>یادداشت همراه سفارش</h2>
								<div className={styles.note}>
									<textarea
										className={styles.textarea}
										name="note"
										value={shipping.note}
										id="note"
										rows="7"
										onChange={handleChange}
										placeholder="اگر پیشنهادی درمورد نحوه‌ی ارسال یا سفارش خود دارید، در این قسمت بنویسید"
									></textarea>
								</div>
							</div>
							{/* button */}
							<Button
								color="primary"
								rounded
								handleClick={handleClickContinue}
								isLoading={isLoading}
								disabled={isLoading}
							>
								ادامه فرآیند خرید <ArrowLeft className={styles.button_icon} />
							</Button>
						</div>
					</div>
				</div>
				<Basket />
				
			</div>
			<Modal onClose={handleClose} show={showAddAddress} title="ثبت آدرس جدید">
				<AddAddress handleModal={handleClose} />
			</Modal>
			<Notification {...notification} />
		</section>
	);
}
