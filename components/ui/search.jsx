import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '../icons/search-icon';
import styles from '@/styles/components/search.module.scss';

export default function Search() {
  const [term, setTerm] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const router = useRouter();
  const handleOnFocus = () => setIsFocus(true);
  const handleOnBlur = () => setIsFocus(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term && term.length > 0) {
      router.push(`/search?q=${term}`);
      setTerm('');
    }
  }
  return (
    <div className={`${styles.container} ${isFocus ? styles.focused : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder={isFocus ? '' : 'محصول مد نظر خود را جستجو کنید'}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='submit'><SearchIcon className={styles.icon} /></button>
      </form>
    </div>
  );
}
