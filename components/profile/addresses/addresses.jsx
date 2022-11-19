import { useRouter } from "next/router";
import { useState } from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import AddressItem from "./address-item";
import AddAddress from "./add-address";
import styles from "@/styles/components/addresses.module.scss";
import useWindowDimensions from "@/helpers/useWindowDimensions";
import {
	selectUserAddresses,
	useCompleteProfileMutation,
	useDeleteAddressMutation,
	useGetUserDetailsQuery,
} from "@/app/services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setCredentials } from "@/features/auth/authSlice";

export default function Addresses({ items }) {
	const [showAddAddress, setShowAddAddress] = useState(false);
	const { height, width } = useWindowDimensions();
	const [deleteAddress] = useDeleteAddressMutation();
	const [compeletProfile] = useCompleteProfileMutation();
	const dispatch = useDispatch();
	const user = useSelector(selectUser)

	const { data: userDetails, isLoading } = useGetUserDetailsQuery();
	// console.log(userDetails,'ajhdyusagyu')
	const router = useRouter();
	// console.log(user)
	const handleClick = () => setShowAddAddress(true);
	const handleClose = () => setShowAddAddress(false);
	const handleClickMobile = () => router.push("/profile/addresses/add");
	// if(userDetails?.user){
	// 	dispatch(setCredentials(userDetails.user))
	// }
	const deleteAddressHandller =(id)=>{
				const filter = user.address?.filter(el=> el._id !== id);
				// console.log(filter, user.address.length)
				deleteAddress(id).unwrap().then(res=>{
						
						// ;
						dispatch(setCredentials({...user, address: filter}))
				});
	}
	// console.log(userDetails);
	const ButtonHeader =
		width >= 910 ? (
			<Button variant="primary" handleClick={handleClick} rounded>
				ثبت آدرس جدید
			</Button>
		) : (
			<Button variant="primary" handleClick={handleClickMobile} rounded>
				افزودن آدرس
			</Button>
		);

	return (
		<Container title="مدیریت آدرس ها" ButtonHeader={ButtonHeader}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h3>آدرس</h3>
					<h3>عملیات</h3>
				</div>
				<div className={styles.body}>
					{!isLoading &&
					 user.address.length > 0	&&	user?.address?.map((item) => (
							<AddressItem handleClick={()=>deleteAddressHandller(item._id)} key={item._id} address={item?.address} />
						))}
				</div>
			</div>
			<Modal onClose={handleClose} show={showAddAddress} title="ثبت آدرس جدید">
				<AddAddress handleModal={handleClose} />
			</Modal>
		</Container>
	);
}

Addresses.defaultProps = {
	items: [
		{
			id: "address-01",
			title: "منزل",
			city: "تهران",
			details: "خیابان شهید بهشتی، خیابان پاکستان جنب پمپ بنزین",
			phone: "09121234567",
		},
		{
			id: "address-02",
			title: "محل کار",
			city: "تهران",
			details: "سعادت آباد، خیابان سرو غربی،پلاک ۳۴، واحد ۴۱",
			phone: "09121234567",
		},
		{
			id: "address-03",
			title: "مغازه",
			city: "تهران",
			details: "ملادر، خیابان بهاره شرقی، بن بست بیست و یکم",
			phone: "09121234567",
		},
	],
};
