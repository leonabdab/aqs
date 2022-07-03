import React from "react";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const { t } = useTranslation("whatWeDoBanner");

  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="bc-what-we-do-image">
                <img src="/images/aqs/what-we-do.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="bc-what-we-do-content ">
                <div className="section-title">
                  <span className="sub-title text-uppercase">
                    {t("subtitle")}
                  </span>
                  <h2>{t("title")}</h2>
                  <p>{t("description")}</p>
                </div>

                <div className="row">
                  <div className="mt-2">
                    <div className="bc-what-we-do-box">
                      <h3>{t("cases.qa.title")}</h3>
                      <p>{t("cases.qa.description")}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mt-2">
                    <div className="bc-what-we-do-box">
                      <h3>{t("cases.production.title")}</h3>
                      <p>{t("cases.production.description")}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mt-2">
                    <div className="bc-what-we-do-box">
                      <h3>{t("cases.logistic.title")}</h3>
                      <p>{t("cases.logistic.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
