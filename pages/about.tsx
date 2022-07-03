import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle={t("mainText.1")} secondaryText={t("mainText.2")} BGImage="bg-one" />
      <AboutContent />
      <FunFactsTwo />
      <TeamStyleThree />

      <Feedback />

      <Partner />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default About;
