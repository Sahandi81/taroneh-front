import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/auth/authSlice';
import UserInfo from './user-info';
import ChangePassword from './change-password';
import styles from '@/styles/components/personal-info.module.scss';

export default function PersonalInfo() {
  const [activeTab, setActiveTab] = useState(1);
  const [position, setPosition] = useState('42px');
  const user = useSelector(selectUser);

  const handleClickTab = idx => {
    setActiveTab(idx);
    if (idx === 1) {
      setPosition('42px');
    } else if (idx === 2) {
      setPosition('194px');
    }
  };

  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header}>
        <h3
          onClick={() => handleClickTab(1)}
          className={`${activeTab === 1 ? styles.active : ''}`}
        >
          اطلاعات کاربری
        </h3>
        <h3
          onClick={() => handleClickTab(2)}
          className={`${activeTab === 2 ? styles.active : ''}`}
        >
          تغییر رمز عبور
        </h3>
        <div
          className={styles.active_line}
          style={{ right: position }}
        />
      </div>
      {/* body */}
      <div className={styles.body}>
        {activeTab === 1 && <UserInfo user={user} />}
        {activeTab === 2 && <ChangePassword />}
      </div>
    </div>
  );
}
