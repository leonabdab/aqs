import React from "react";
import { useTranslation } from "react-i18next";
import { NUMBER_OF_SERVICES } from "../../services/i18n/translations/servicesBanner";

function Services() {
  const { t } = useTranslation("servicesBanner");

  return (
    <>
      <div className="container mt-4 pt-4">
        <div className="section-title">
          <h2>{t("title")}</h2>
        </div>
      </div>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container px-0 mx-auto">
          <div className="row justify-content-center">
            {new Array(NUMBER_OF_SERVICES).fill("").map((_, i) => {
              const idx = i + 1;
              const details = getQAServiceIconsAndBgs(idx);
              return (
                <div key={`services-item-${idx}`} className="col-lg-3 col-sm-6">
                  <div className="service-card-one white-bg text-center">
                    <i className={`${details.icon} ${details.bg}`}></i>
                    <h3>{t(`services.service${idx}.title`)}</h3>
                    <p>{t(`services.service${idx}.description`)}</p>
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
    9: {
      icon: "pe-7s-edit",
      bg: "bg-4FC9D2",
    },
    10: {
      icon: "pe-7s-box2",
      bg: "bg-47ABBC",
    },
    11: {
      icon: "pe-7s-download",
      bg: "bg-3a7587",
    },
    12: {
      icon: "pe-7s-photo-gallery",
      bg: "bg-4ab5c3",
    },
  };

  return details[idx];
}
