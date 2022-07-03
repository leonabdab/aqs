import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
import withTranslationHOC from "../services/hoc/TranslationHOC";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("contact");
  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle="Contact Us" BGImage="bg-contact" />
      <ContactInfo />
      <ContactForm />
      <div className="ptb-100">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
