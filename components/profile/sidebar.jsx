import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import SidebarItem from './sidebar-item';
import AvatarIcon from '../icons/avatar-icon';
import UserAccountIcon from '../icons/user-acount-icon';
import OrdersIcon from '../icons/orders-icon';
import MyAddressIcon from '../icons/my-address-icon';
import MyFavouriteIcon from '../icons/my-favourite-icon';
import ExitIcon from '../icons/exit-icon';
import styles from '@/styles/components/profile.module.scss';
import { selectUser, toggleSignOutModal } from '@/features/auth/authSlice';

export default function Sidebar({ items }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleClick = route => router.push(route);

  const handleClickExit = () => dispatch(toggleSignOutModal());

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <AvatarIcon className={styles.avatar} />
        {user && (
          <div className={styles.name_phone}>
            <h3>{`${user?.f_name} ${user?.l_name}`}</h3>
            <h3>{user?.phone}</h3>
          </div>
        )}
      </div>
      {items.map(({ id, route, ...otherProps }) => (
        <SidebarItem
          key={id}
          isActive={router.pathname === route}
          handleClick={() => handleClick(route)}
          {...otherProps}
        />
      ))}
      <SidebarItem
        title='خروج'
        Icon={ExitIcon}
        handleClick={handleClickExit}
        otherCss='exit'
      />
    </div>
  );
}

Sidebar.defaultProps = {
  items: [
    {
      id: 'sidebar-item-01',
      title: 'حساب کاربری',
      Icon: UserAccountIcon,
      route: '/profile/personal-info'
    },
    {
      id: 'sidebar-item-02',
      title: 'سفارشات',
      Icon: OrdersIcon,
      route: '/profile/orders'
    },
    {
      id: 'sidebar-item-03',
      title: 'آدرس های من',
      Icon: MyAddressIcon,
      route: '/profile/addresses'
    },
    {
      id: 'sidebar-item-04',
      title: 'علاقه مندی ها',
      Icon: MyFavouriteIcon,
      route: '/profile/favourites'
    }
  ]
};
