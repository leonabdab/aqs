import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Services from "../components/Services/Services";
import { useTranslation } from "react-i18next";

function ServicesPage() {

    const { t } = useTranslation('services');
  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle={t('title')} BGImage="bg-one" />
      <Services />
      <CtaAreaTwo />
      <Footer />
    </>
  );
}

export default ServicesPage;
