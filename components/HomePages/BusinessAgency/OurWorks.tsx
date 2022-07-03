import React, { Component } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function OurWorks() {
  const { t } = useTranslation("ourWorksBanner");
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-case-studies bg1"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>{t("automotive.subtitle")}</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>{t("automotive.title")}</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">{t("automotive.button")}</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/aqs/case-studies/studie-shape1.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-case-studies bg2"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>{t("agdRtv.subtitle")}</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>{t("agdRtv.title")}</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">{t("agdRtv.button")}</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/aqs/case-studies/studie-shape2.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-case-studies bg3"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="100"
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>{t("production.subtitle")}</a>
                    </Link>
                  </span>

                  <h3>
                    <Link href="/portfolio-details">
                      <a>{t("production.title")}</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">{t("production.button")}</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/aqs/case-studies/studie-shape3.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="view-more-work">
            <Link href="/portfolio">
              <a className="btn btn-primary">{t("button")}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWorks;
