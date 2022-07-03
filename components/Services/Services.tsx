import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation("servicesBanner");

  return (
    <>
      <div className="container mt-4 pt-4">
        <div className="section-title">
          <span className="sub-title">{t("subTitle")}</span>
          <h2>{t("title")}</h2>
        </div>
      </div>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container px-0 mx-auto">
          <div className="row justify-content-center">
            {new Array(8).fill("").map((_, i) => {
              const idx = i + 1;
              const details = getQAServiceIconsAndBgs(idx);
              return (
                <div key={`services-item-${idx}`} className="col-lg-3 col-sm-6">
                  <div className="service-card-one white-bg text-center">
                    <i className={`${details.icon} ${details.bg}`}></i>
                    <h3>
                      {t(`qa.service${idx}.title`)}
                    </h3>
                    <p>{t(`qa.service${idx}.description`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

function getQAServiceIconsAndBgs(idx: number) {
  const details = {
    1: {
      icon: "pe-7s-look",
      bg: "bg-55DDE0",
    },
    2: {
      icon: "pe-7s-graph3",
      bg: "bg-33658A",
    },
    3: {
      icon: "pe-7s-tools",
      bg: "bg-2F4858",
    },
    4: {
      icon: "pe-7s-network",
      bg: "bg-315771",
    },
    5: {
      icon: "pe-7s-config",
      bg: "bg-F48923",
    },
    6: {
      icon: "pe-7s-note2",
      bg: "bg-937B43",
    },
    7: {
      icon: "pe-7s-back",
      bg: "bg-F26419",
    },
    8: {
      icon: "pe-7s-target",
      bg: "bg-C59538",
    },
  };

  return details[idx];
}
