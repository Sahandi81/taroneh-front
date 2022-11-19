import ClockIcon from "../icons/clock-icon";
import styles from "@/styles/components/blog.module.scss";
import { API_URL } from "@/config/index";
import { calender } from "@/data/calender";
// import jMoment from "jalali-moment";


export default function SidebarItem({ post }) {
	// const dom = new DOMParser();
	// const parseDom = dom.parseFromString(post.body, 'text/html');

	return (
		<div className={styles.sidebar_item}>
			<div className={styles.sidebar_image}>
				{post.photo?.length > 0 &&<img
					src={`${API_URL}/storage/${post.photo[0]}`}
					alt="sidebar item"
				/>}
			</div>
			<div >
				<h4>{post.title}</h4>
				<p>
					<ClockIcon className={styles.clock} />
					{calender(post.created_at)}
				</p>
				<div className={styles.targetText} style={{color:"#111"}} dangerouslySetInnerHTML={{__html:post.body}} >
				
				</div>

			</div>
		</div>
	);
}
