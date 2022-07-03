import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import { useTranslation } from "react-i18next";
import Career from "../../components/Career/Career";

export default function CareerPage() {
  const { t } = useTranslation("career");
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle={t("mainText.1")}
        secondaryText={t("mainText.2")}
        BGImage="bg-career"
      />
      <Career />
      <Footer />
    </>
  );
}
