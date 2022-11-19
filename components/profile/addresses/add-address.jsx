import { useState } from "react";
import dynamic from "next/dynamic";
import FormInput from "../personal-info/form-input";
import Button from "@/components/ui/button";
import styles from "@/styles/components/add-address.module.scss";
import { useAddAddressMutation, useCompleteProfileMutation } from "@/app/services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setCredentials } from "@/features/auth/authSlice";

export default function AddAddress({ handleModal }) {
	const [addAddress] = useAddAddressMutation();

	const user = useSelector(selectUser);

	const [city, setCity] = useState({
		value: "",
		error: "",
	});

	const [addressTitle, setAddressTitle] = useState({
		value: "",
		error: "",
	});

	const [phone, setPhone] = useState({
		value: "",
		error: "",
	});
	const [postal, setPostal] = useState({
		value: "",
		error: "",
	});
	const [address, setAddress] = useState({
		value: "",
		error: "",
	});

	// const MapWithNoSSR = dynamic(() => import("@/components/ui/map"), {
	// 	ssr: false,
	// });
	
	const handleChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "city":
				setCity({ error: "", value });
				break;
			case "addressTitle":
				setAddressTitle({ error: "", value });
				break;
			case "phone":
				const re = /^[0-9\b]+$/;
				if (value === "" || re.test(value)) {
					setPhone({ error: "", value });
				}
				break;
			case "address":
				setAddress({ error: "", value });
				break;
			default:
				break;
		}
	};
	const [setCompeletProfile] = useCompleteProfileMutation();
	const dispatch = useDispatch();
	const handleClick = async (e) => {
		e.preventDefault();
		// const addressReq = `${addressTitle.value}, ${city.value}, ${address.value}`;
		// console.log( addressReq, "adresss", user.address)

		const data = {
			address: address.value,
			postal_code: addressTitle.value ,
			name: user.f_name + `${user.l_name && user.l_name !== ''? user.l_name :''}`,
			phone:phone.value,
			city: city.value,
			meli_code : '0023201194',
			lat: '36.324532',
			lng: '45.7236432',
			id: Date.now() *1
		}

		 if (user.address) {
			  addAddress(data).unwrap().then((res)=>{
				  console.log(res)
			// await setCompeletProfile( {...user, address: res.data});
				dispatch(setCredentials({...user, address: res.data}))
			 }).catch(er=>console.log(er));
		 } 
		// else {
		// 	// setCompeletProfile({...user, address:  data})
			
		// 	await addAddress(data).unwrap().then(res=>{
		// 		console.log(res,'prof');
		// 		dispatch(setCredentials({...user, address: res.data}))
					
		// 	});
			// console.log(addAddress)
			
		// }
		handleModal();
	};

	return (
		<div className={styles.container}>
			
			<FormInput
				id="city"
				name="city"
				type="text"
				value={city.value}
				handleChange={handleChange}
				error={city.error}
				label="شهر"
			/>

			<FormInput
				id="addressTitle"
				name="addressTitle"
				type="text"
				value={addressTitle.value}
				handleChange={handleChange}
				error={addressTitle.error}
				label="کد  پستی"
			/>

			<FormInput
				id="phone"
				name="phone"
				type="text"
				value={phone.value}
				handleChange={handleChange}
				error={phone.error}
				label="تلفن ثابت | موبایل"
			/>

			{/* <FormInput
				id="postal"
				name="postal"
				type="text"
				value={postal.value}
				handleChange={handleChange}
				error={postal.error}
				label="کد ملی"
			/> */}
			<div className={styles.address}>
				<label htmlFor="address">آدرس کامل</label>
				<textarea
					id="address"
					name="address"
					onChange={handleChange}
					value={address.value}
					cols={13}
					rows={7}
					required
				></textarea>
			</div>
			{/* <div
				style={{
					order: "6",
				}}
			></div>
			<div
				style={{
					order: "7",
				}}
			></div> */}

			<div
				style={{
					order: "8",
				}}
			>
				<Button
					type="button"
					variant="primary"
					handleClick={handleClick}
					rounded
				>
					ثبت آدرس
				</Button>
			</div>

			{/* <Map /> */}
			{/* <MapWithNoSSR /> */}
		</div>
	);
}
