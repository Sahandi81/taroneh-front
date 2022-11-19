import ProductRelate from "./product-relate";
import styles from "@/styles/components/product-relate-list.module.scss";

export default function ProductRelateList({ alikeProduct,items }) {
	return (
		<div className={styles.container}>
			{items.slice(0, 4).map(({ _id, ...otherProps }) => (
				alikeProduct !== _id?<ProductRelate key={_id} {...otherProps} id={_id} />:null
			))}
		</div>
	);
}
