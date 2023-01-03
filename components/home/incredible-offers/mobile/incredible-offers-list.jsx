import IncredibleOffersItem from './incredible-offers-item';
import styles from '@/styles/components/incredible-offers-mobile.module.scss';

export default function IncredibleOffersList({offers}) {
  console.log(offers,'offers')

  return (
    <div className={styles.list}>
      {offers.products.map(mp=><IncredibleOffersItem id={mp._id} title={mp.title} img={`/storage/${mp.code}/${mp.photos[0]}`} price={mp.types} percent={offers.percent} />)}
      {/* <IncredibleOffersItem title='مغز پسته' img='/img/offer.jpg' price='158,000' percent='60' />
      <IncredibleOffersItem title='مغز پسته' img='/img/offer.jpg' price='158,000' percent='60' />
      <IncredibleOffersItem title='مغز پسته' img='/img/offer.jpg' price='158,000' percent='60' /> */}
    </div>
  );
}
