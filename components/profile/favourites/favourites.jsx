import Container from "@/components/ui/container";
import FavouriteItem from "./favourite-item";
import styles from "@/styles/components/favourites.module.scss";
import { useSelector } from "react-redux";
import { selectWishList, selectWishListItems } from "@/app/services/apiSlice";
import formatPrice from "@/helpers/formatPrice";

export default function Favourites() {
	const data = useSelector(selectWishListItems);
		// console.log(data)
	return (
		<Container title="علاقه مندی ها">
			<div className={styles.container}>
				{data?.map((item) => (
					<FavouriteItem
						id={item.product_info._id}
						key={item.product_info._id}
						name={item.product_info.title}
						types={item.product_info.types}
						img={`/storage/${item.product_info.code}/${item.product_info.photos.length >0 && item.product_info.photos[0]}`}
						price={formatPrice(item.product_info.types[0]?.[0]?.package[250])}
					/>
				))}
			</div>
		</Container>
	);
}
