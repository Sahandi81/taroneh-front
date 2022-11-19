import styles from '@/styles/components/blog.module.scss';
import SearchIcon from '../icons/search-icon';

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='بگرد تا به نتیجت برسی' />
      <SearchIcon className={styles.search_icon} />
    </div>
  )
}
