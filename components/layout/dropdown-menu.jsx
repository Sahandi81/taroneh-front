import Link from 'next/link';
import styles from '@/styles/layout/dropdown-menu.module.scss';

import { DROPDOWN_MENU_DATA } from './dropdown-menu.data';

export default function DropdownMenu({category}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {category.sub_category.map(({ _id, name },i) => (
          <div key={_id} className={styles.item}>
            {/* {i === 0?<h3 className={styles.header}>{category.name}</h3>:null} */}
            
            <ul className={styles.list}>
            <Link key={_id} href={`/products?s_category=${_id}&page=1`} passHref><li key={_id}>{name}</li></Link>
              {/* {category.sub_category.map(item => <Link key={item._id} href={`/products?s_category=${item._id}`} passHref><li key={item._id}>{item.name}</li></Link>)} */}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
