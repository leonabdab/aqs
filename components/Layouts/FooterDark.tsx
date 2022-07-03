import React, { Component } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function FooterDark() {
  const { t } = useTranslation("footer");
  const { t: tNav } = useTranslation("navbar");

  return (
    <>
      <footer className="footer-area footer-dark pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="Logo" />
                    </a>
                  </Link>
                </div>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="linkedin.com" target="_blank">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4 pl-5">
                <h3>{t("bottomNav.title1")}</h3>
                <ul className="list">
                  <li>
                    <Link href="/">
                      <a>{tNav("home")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>{tNav("about")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>{tNav("services")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a>{tNav("career")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources">
                      <a>{tNav("resources")}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <h3>{t("bottomNav.title2")}</h3>
                <ul className="get-in-touch">
                  <li>
                    <i className="icofont-home"></i>
                    <span>Plac Solny 14/3</span>
                    <p>Wrocław</p>
                  </li>
                  <li>
                    <i className="icofont-live-support"></i>
                    <a href="tel:+48 519 875 140">+48 519 875 140</a>
                  </li>
                  <li>
                    <i className="icofont-envelope"></i>
                    <a href="mailto:office@aqs-poland.com">office@aqs-poland.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterDark;
