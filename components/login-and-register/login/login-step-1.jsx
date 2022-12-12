import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useCompleteProfileMutation, useGetUserDetailsQuery, useLoginMutation } from "@/app/services/apiSlice";
import { setCredentials } from "@/features/auth/authSlice";

import Input from "../../ui/input";
import Button from "../../ui/button";

import styles from "@/styles/components/login.module.scss";
import Notification from "../../ui/notification";
import { MSG_PHONE_LENGTH, MSG_INVALID_CREDENTIALS } from "@/data/messages";

export default function LoginStep1({ handleClick }) {
	const [disableButton, setDisableButton] = useState(true);
	const [username, setUsername] = useState({
		value: "",
		error: "",
	});

	const [password, setPassword] = useState({
		value: "",
		error: "",
	});

	const [passwordShown, setPasswordShown] = useState(false);

	const [notification, setNotification] = useState({
		show: false,
		status: null,
		message: "",
	});

	const [compeleteProfile] = useCompleteProfileMutation();
	const { data: userDetails } = useGetUserDetailsQuery();
	const router = useRouter();
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();

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

	useEffect(() => {
		if (
			username.value.length &&
			password.value.length &&
			username.error === "" &&
			password.error === ""
		) {
			setDisableButton(false);
		} else {
			setDisableButton(true);
		}
	}, [username.value, password.value, username.error, password.error]);

	const togglePasswordVisibility = () => {
		setPasswordShown((prevState) => !prevState);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "username":
				setUsername({ error: "", value });
				break;
			case "password":
				setPassword({ error: "", value });
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!username.value.includes("@")) {
			if (username.value.length < 11) {
				setUsername((prevUsername) => ({
					...prevUsername,
					error: MSG_PHONE_LENGTH,
				}));
				return;
			}
		}

		
			 await login({
				username: username.value,
				password: password.value,
			}).unwrap().then(res=>{
				// console.log(res)

				if (res.success) {
					// let dataForm = {...res.user_details, address:[res.user_details.address[res.user_details.address.length -1].address[0]]}
					// dataForm = {...dataForm, address: dataForm.address[0]}
					// console.log(res.user_details)
					// if( !res.user_details.address || res.user_details.address.length === 0){
					// 	console.log('not')
					// 	 compeleteProfile({...res.user_details , address: [] })
					// dispatch(setCredentials({ ...res.user_details, address:[], token: res.token }));
					// }else if(res.user_details.address && res.user_details.address.length > 0){
						// delete res.user_details.address 
					// 	console.log(894534)
						// compeleteProfile({
						// 	...res.user_details,
						// 	address:res.user_details.address?.length > 0? res.user_details.address[res.user_details.address.length -1]:null
						//   })
						dispatch(setCredentials({ 
							f_name: res.user_details.f_name,
							l_name: res.user_details.l_name,
							email: res.user_details.phone+"@gmail.com",
							password: "1234567",
							phone: res.user_details.phone,
							address: res.user_details.address? res.user_details.address:[],
							photos: ['avatar.png'],
							// address: res.user_details.address?.length > 0? res.user_details.address[res.user_details.address.length -1]:null
							 token: res.token }));
					
					setTimeout(() => router.replace("/"), 300);
				}else{
					console.log(er)
				setNotification({
					show: true,
					status: "error",
					message: MSG_INVALID_CREDENTIALS,
				});

				}
			}).catch(er=>{
				setNotification({
					show: true,
					status: "error",
					message: MSG_INVALID_CREDENTIALS,
				});
			})
		
		
		
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input
					label="ایمیل یا شماره موبایل"
					name="username"
					type="text"
					handleChange={handleChange}
					value={username.value}
					error={username.error}
					required
					autoFocus
				/>

				<Input
					label="رمز عبور"
					name="password"
					type={passwordShown ? "text" : "password"}
					maxLength={30}
					handleChange={handleChange}
					value={password.value}
					passwordShown={passwordShown}
					togglePasswordVisibility={togglePasswordVisibility}
					error={password.error}
					required
				/>

				<div className={styles.forget_password}>
					<p>
						رمز عبور خود را فراموش کردم؟ &nbsp;
						<Link href="/forget-password">بازیابی رمز عبور</Link>
					</p>
				</div>

				<div className={styles.actions}>
					<Button
						variant="submit2"
						handleClick={handleClick}
						// isLoading={isLoading}
						// disabled={isLoading}
					>
						ورود با رمز یکبار مصرف
					</Button>

					<Button
						variant="submit"
						isLoading={isLoading}
						disabled={isLoading || disableButton ? true : false}
					>
						ورود
					</Button>
				</div>
			</form>
			<div className={styles.image}>
				<Image src="/img/login.png" alt="login" width={337} height={257} />
			</div>
			<Notification {...notification} />
		</>
	);
}
