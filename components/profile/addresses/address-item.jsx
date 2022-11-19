import Button from "@/components/ui/button";
import styles from "@/styles/components/addresses.module.scss";

export default function AddressItem({ address, handleClick }) {
	// const handleClick = (e) => {};

	return (
		<div className={styles.item}>
			<h4>{address}</h4>
			<div>
				<Button color="blue" handleClick={handleClick} rounded>
					حذف
				</Button>
			</div>
		</div>
	);
}
