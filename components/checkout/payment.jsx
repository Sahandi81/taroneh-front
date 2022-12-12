import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ProgressBar from "./progress-bar";
import Receipt from "./receipt";
import DiscountAndPaymentType from "./discount-and-payment-type";
import Button from "../ui/button";
import Basket from "./basket";
import ArrowLeft from "../icons/arrow-left-white-icon";
import styles from "@/styles/components/payment.module.scss";
import { useSelector } from "react-redux";
import {
	// getCartDiscount,
	selectCartDetails,
	selectCartItems,
} from "@/features/cart/cartSlice";
import { useBuyMutation } from "@/app/services/apiSlice";
import Spinner from "../ui/spinner";
import { useGetGatewayLinkMutation , useCostPostMutation} from "@/app/services/apiSlice";
import Notification from '@/components/ui/notification';
export default function Payment() {
	const [checked, setChecked] = useState(false);
	const router = useRouter();
	const [theWay, setTheWay] = useState(0);

	const [buy, { isLoading }] = useBuyMutation();
	const [getGatewayLink] = useGetGatewayLinkMutation();

	const cartDetails = useSelector(selectCartDetails);
	const cartItems = useSelector(selectCartItems);
	const [costPost] = useCostPostMutation();

	const theWayHandller = (e, name)=>{
		// console.log(e)
		if(name === 'motor' && e.target.checked){
			setTheWay(30000) 
		}else if(name === 'post' && e.target.checked){
			setTheWay(50000)	
		}else{
			setTheWay(0)
		}
	}

	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	const handleClickStep = (routerPath) => {
		router.push(routerPath);
	};
	const [notif, setNotification] = useState({
		show: false,
		status: null,
		message: ''
	  });
	const handleClickPayment = () => {
		// console.log(cartDetails,"cartDetails" ,cartItems)
				// console.log(cartDetails, cartItems)
				if(theWay === 0){
					setNotification({
						show: true,
						status: "error",
						message: 'طریقه ارسال را انتخاب نکردید',
					});
					setTimeout(() => {
						setNotification({
							show: false,
							status: null,
							message: ''
						  })
					}, 3000);
					return;
				}
		if(cartItems.length > 0){
		buy({
			details: cartDetails,
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
			create_factor: true,
		})
			.then((response) => {
				// costPost({cost: theWay, min:theWay}).unwrap().then(res=>{
					
				// })
				getGatewayLink({
					order_id: response.data.data.details._id,
				})
					.unwrap()
					.then((res) => {
						router.push(res.data.url);
					})
					.catch((error) => {
						console.error(error);
						// alert(error.data.message || "خطایی رخ داده است");
					});

			})
			.catch((error) => {
				console.error(error);
				// alert(error.data.message || "خطایی رخ داده است");
			});
		// TODO: handle error with toast
	}else{
		// alert("");
		setNotification({
			show: true,
			status: "error",
			message: "محصولی انتخاب نکردید",
		})
	}
};

	return (
		<section className="section">
			<div className={styles.container}>
				<div className={styles.payment}>
					<ProgressBar step={2} handleClick={handleClickStep} />
					<div className={styles.body}>
						<h1>پیش فاکتور و پرداخت</h1>
						<div className={styles.content}>
							<Receipt />
						</div>
						{/* <div className={styles.box}>
								<h2 className={styles.title}>طریقه ارسال محصولات</h2>
								<div className={styles.userInfo}>
									<div style={{padding:"2rem 0"}}>
										
										<span style={{margin:'0 1rem'}} > انتخاب طریقه ارسال محصولات :</span>
										<span >
										
        
											<label htmlFor="motor">پیک موتوری(ویژه تهران)</label>
											<input type='radio'  style={{marginRight:'1rem'}} onChange={(e)=>theWayHandller(e,'motor')} name='motor' id="motor" />
										</span>
										<span style={{marginRight:'3rem'}} >
											<label   htmlFor="post">پست</label>
											<input type='radio' style={{marginRight:'1rem'}} onChange={(e)=>theWayHandller(e,'post')} name='motor' id="post" />
										</span>
									</div>
									
								</div>
							</div> */}
						<div className={styles.split_line}></div>
						
						<div className={styles.content}>
							<DiscountAndPaymentType />

							<p>
								<input
									type="checkbox"
									name="agree"
									id="agree"
									checked={checked}
									onChange={handleChange}
								/>{" "}
								همه{" "}
								<Link href="/rules">
									<a className={styles.link}>قوانین</a>
								</Link>{" "}
								طارونه را می پذیریم.
							</p>

							{isLoading ? (
								<Spinner />
							) : (
								<Button
									color="primary"
									rounded
									handleClick={handleClickPayment}
									disabled={!checked}
								>
									پرداخت <ArrowLeft className={styles.button_icon} />
								</Button>
							)}
						</div>
					</div>
				</div>
				<Basket />

			</div>
			<Notification {...notif}/>
		</section>
	);
}
