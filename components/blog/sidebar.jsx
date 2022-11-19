import PaperIcon from "../icons/paper-icon";
import SidebarItem from "./sidebar-item";
import styles from "@/styles/components/blog.module.scss";

export default function Sidebar({ data }) {
	return (
		<div className={styles.sidebar}>
			<h2>
				<PaperIcon className={styles.paper} />
				پربازدید ترین مطالب
			</h2>
			<div>
				{data.map((item) => (
					<SidebarItem key={item._id} post={item} />
				))}
			</div>
		</div>
	);
}
