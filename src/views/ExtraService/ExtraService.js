import React from "react";
import './styles.scss';

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Banner from "../../components/Banner/Banner";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import ExploreTour from '../../Sections/ExploreTours/ExploreTours';
import ContactBanner from '../../Sections/ContactBanner/ContactBanner';


// assets
import extraServiceBg from '../../assets/images/banner/extra-service.jpg';
import extraService1 from "../../assets/images/Featured/extra-service-1.jpg";
import extraService2 from "../../assets/images/Featured/extra-service-2.jpg";

export default function ExtraService() {
  return (
    <React.Fragment>
      <Banner bgImage={extraServiceBg}>
        <h1>WE MAKE YOUR EXPERIENCE LAST</h1>
      </Banner>
      <FeaturedCard
        coverSrc={extraService1}
        title="Rent Now, Pay Later"
        desc="We have the best car just for you. Call in today to book a car, and we will make sure it will be at your place as soon as you are arrived."
        cardType="primary"
      />
      <FeaturedCard
        coverSrc={extraService2}
        title="Need Help to the Hotel?"
        desc="Book an airport transfer and your driver will meet you in the arrivals area. Please call us so we can get your flight information in details."
        cardType="secondary"
      />
      <SectionTitle
        title="Explore Our Tours "
        desc="We offer several tours to fit your wishes. Whether you are a sight-seeker, a city lover, or the adventurer, we will create an unforgettable experience for you in the new place."
      />
      <ExploreTour/>
      <ContactBanner/>
    </React.Fragment>
  );
}