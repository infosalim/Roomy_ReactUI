import React from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Banner from "../../components/Banner/Banner";
import BookingCard from "../../components/BookingCard/BookingCard";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import Places from "../../Sections/Places/Places";
import Service from "../../Sections/Service/Service";

// assets
import AccomodationsBg from "../../assets/images/banner/accomodations.jpg";
import AccomodationFeatured from "../../assets/images/Featured/accomodation.jpg";

export default function Home() {
  return (
    <React.Fragment>
      <Banner bgImage={AccomodationsBg}>
        <BookingCard />
      </Banner>
      <FeaturedCard
        coverSrc={AccomodationFeatured}
        title="Your Room is One Search Away"
        desc="Book a place for your vacation? Or your event? Find the best place to stay and enjoy on all occasions."
        cardType="primary"
        checkIcon
      />
      <SectionTitle
        title="Availables Places"
        desc="Hard to decide? Take a look at our availables places."
      />
      <Places />
      <SectionTitle
        title="Extra Services"
        desc="We have a wide range of extra services to serve your needs. Click to view more."
        para={{ padding: "0 190px" }}
      />
      <Service />
    </React.Fragment>
  );
}
