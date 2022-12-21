import CategoryItem from "./category-item";
import styles from "@/styles/components/category.module.scss";
// import CATEGORY_DATA from "@/components/home/category/category.data";

export default function Category({ categories }) {
	// console.log(categories,'categories')
	return (
		<section className="section">
			<div className={styles.container} style={{display:'flex', alignContent:'center', justifyContent:'space-around',flexFlow:'row wrap', direction:'ltr'}}>
				{categories.map(({ _id, name, photos }) => {
					const img =
						photos?.length > 0
							? `/storage/${name}/${photos[0]}`
							: "/storage/logo.png";
					return <CategoryItem key={_id} name={name} img={img} id={_id} />;
				})}
			</div>
		</section>
	);
}
