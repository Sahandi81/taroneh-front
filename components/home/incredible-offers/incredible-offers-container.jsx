import IncredibleOffersDesktop from './desktop/incredible-offers-desktop';
import IncredibleOffersMobile from './mobile/incredible-offers-mobile';

export default function IncredibleOffers({offers}) {
  return (
    <>
      <IncredibleOffersDesktop offers={offers} />
      <IncredibleOffersMobile offers={offers}/>
    </>
  );
}
