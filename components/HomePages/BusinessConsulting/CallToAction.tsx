import React, { Component } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function CallToAction() {
  const { t } = useTranslation("callToActionBanner");

  return (
    <>
      <div className="call-to-action-area bg-image ptb-50 mb-2">
        <div className="container">
          <div className="row align-items-center">
            <Link href="/contact">
              <div className="col-lg-12 col-md-12  align-items-center">
                <div className="call-to-action-content align-items-center">
                  <h2>
                    {t("client.title")} <i className="fas fa-chevron-right"></i>
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="call-to-action-area bg-image ptb-50">
        <div className="container">
          <div className="mt-2 row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-12 d-flex justify-content-start">
              <div className="call-to-action-btn">
                <Link href="/contact">
                  <a className="default-btn-two">{t("employee.button")}</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="call-to-action-content">
                <h2>{t("employee.title")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
