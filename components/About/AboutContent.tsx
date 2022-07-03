import React, { Component, useState } from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t: trans } = useTranslation("about");
  const t = (tStr: string) => trans(`page.${tStr}`);

  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/aqs/about/about-img2.jpeg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>{t("title")}</h2>
                  <p>{t("shortDescription")}</p>
                </div>

                <div className="about-text">
                  <h4>{t("ourMission.title")}</h4>
                  <p>{t("ourMission.description.1")}</p>
                  <p>{t("ourMission.description.2")}</p>
                </div>

                <div className="about-text">
                  <h4>{t("whoWeWorkFor.title")}</h4>
                  <p>{t("whoWeWorkFor.description.1")}</p>
                  <p>{t("whoWeWorkFor.description.2")}</p>
                </div>

                <div className="about-text">
                  <h4>{t("ourStandards.title")}</h4>
                  <p>{t("ourStandards.description")}</p>

                  <ul>
                    {new Array(6).fill("").map((_, idx) => {
                      const index = idx + 1;
                      return (
                        <li key={`list-item-${index}`}>
                          <i className="pe-7s-check"></i>
                          <p>{t(`ourStandards.list.std${index}`)}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
