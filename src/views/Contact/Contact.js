import React from "react";

import Banner from "../../components/Banner/Banner";
import ContactSection from '../../Sections/Contact/Contact';

import contactBg from '../../assets/images/banner/contact.jpg';

export default function Contact () {
    return (
        <React.Fragment>
          <Banner bgImage={contactBg}>
            <h1>WE ARE ALWAYS AVAILABLE TO HELP</h1>
          </Banner>
          <ContactSection />
        </React.Fragment>
      );
}