import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
function Team() {
  const { t: trans } = useTranslation("about");
  const t = (key: string) => trans(`team.${key}`);
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            className="mySwiper team-slider"
          >
            <SwiperSlide>
              <div className="team-card text-center">
                <div className="team-img">
                  <img src="/images/aqs/team/coo-temp.jpeg" alt="Image" />
                </div>
                <div className="team-caption">
                  <h3> {t("coo.title")}</h3>
                  <p></p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team-card text-center">
                <div className="team-img">
                  <img src="/images/aqs/team/manager-temp.jpeg" alt="Image" />
                </div>

                <div className="team-caption">
                  <h3>{t("manager.title")}</h3>
                  <p></p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team-card text-center">
                <div className="team-img">
                  <img src="/images/aqs/team/coord-temp.jpeg" alt="Image" />
                </div>

                <div className="team-caption">
                  <h3>{t("coordinator.title")}</h3>
                  <p>{t("coordinator.description")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team-card text-center">
                <div className="team-img">
                  <img
                    src="/images/aqs/team/teamleader-temp.jpeg"
                    alt="Image"
                  />
                </div>

                <div className="team-caption">
                  <h3>{t("teamLeader.title")}</h3>
                  <p>{t("teamLeader.description")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team-card text-center">
                <div className="team-img">
                  <img src="/images/aqs/team/quality-temp.jpeg" alt="Image" />
                </div>

                <div className="team-caption">
                  <h3>{t("qa.title")}</h3>
                  <p>{t("qa.description")}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Team;
