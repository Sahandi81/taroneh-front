import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../ui/button';
import ProfileDropdown from './profile-dropdown';
import UserIcon from '../icons/user-icon';
import ArrowDownIcon from '../icons/arrow-down-icon';
import styles from '@/styles/components/user-nav-profile.module.scss';

import {
  selectUser,
  selectIsLoggedIn,
  selectShowProfileDropdown,
  toggleProfileDropdown
} from '@/features/auth/authSlice';

export default function UserNavProfile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const showProfileDropdown = useSelector(selectShowProfileDropdown);

  //  console.log(isUserLoggedIn, 'isUserLoggedIn')

  if (!isUserLoggedIn) {
    return (
      <Button color='primary' handleClick={() => router.push('/login')}>
        ورود / ثبت نام
      </Button>
    );
  }

  const handleClickProfileDropdown = () => dispatch(toggleProfileDropdown());

  return (
    <div className={styles.account}>
      <div
        className={styles.profile_dropdown}
        onClick={handleClickProfileDropdown}
      >
        <UserIcon className={styles.user_icon} />
        <span>{`${user.f_name} ${user.l_name && user.l_name !== user.f_name?user.l_name:''}`}</span>
        <ArrowDownIcon />
      </div>

      {showProfileDropdown && <ProfileDropdown />}
    </div>
  );
}
