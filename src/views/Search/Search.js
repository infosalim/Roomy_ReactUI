import React from "react";
import './styles.scss';

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Banner from "../../components/Banner/Banner";
import BookingCard from "../../components/BookingCard/BookingCard";
import Places from "../../Sections/Places/Places";

// assets
import AccomodationsBg from "../../assets/images/banner/accomodations.jpg";

export default function Search() {
  return (
    <React.Fragment>
      <Banner bgImage={AccomodationsBg}>
        <BookingCard />
      </Banner>
      <div className='space-120'></div>
      <SectionTitle
        title="Matching Places "
        desc="Hard to decide? Take a look at our availables places."
      />
      <Places />
    </React.Fragment>
  );
}
