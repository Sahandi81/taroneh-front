import IncredibleOffersDesktop from './desktop/incredible-offers-desktop';
import IncredibleOffersMobile from './mobile/incredible-offers-mobile';

export default function IncredibleOffers({offers}) {
  // console.log(offers, 'amazzing offer')
  return (
    <>
      <IncredibleOffersDesktop offers={offers} />
      <IncredibleOffersMobile offers={offers}/>
    </>
  );
}
