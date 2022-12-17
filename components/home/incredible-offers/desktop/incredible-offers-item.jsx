import styles from '@/styles/components/incredible-offers-desktop.module.scss'
import { useRouter } from 'next/router'

export default function IncredibleOffersItem({_id,title, rowNumber, name, percent, isActive }) {
    const router = useRouter();
    const goProductHandller =()=>{
        router.push('/products/'+ _id)
    }
  return (
    <div onClick={()=>goProductHandller()} className={`${styles.item} ${isActive ? styles.item_active : ''}`}>
      <p>{rowNumber}</p>
      <h4>{title}</h4>
      <p>{percent} %</p>
    </div>
  )
}
