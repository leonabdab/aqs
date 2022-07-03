import React, { Component } from "react";
import Link from "next/link";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import withTranslationHOC from "../../../services/hoc/TranslationHOC";
import { TransFn } from "../../../utils/types";

interface Props {
  t: TransFn;
}

class MainBanner extends Component<Props> {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper hero-slider"
        >
          <SwiperSlide>
            <div className="hero-banner overly hero-img-1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content left">
                          <h1
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            {this.props.t("title.1")}
                          </h1>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            {this.props.t("description.1")}
                          </p>

                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          ></div>
                          <ContactButton />
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-banner overly hero-img-2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content left">
                          <h1
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            {this.props.t("title.2")}
                          </h1>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            {this.props.t("description.2")}
                          </p>

                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            <ContactButton />
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-banner overly hero-img-3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content left">
                          <h1
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            {this.props.t("title.3")}
                          </h1>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            {this.props.t("description.3")}
                          </p>

                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            <ContactButton />
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default withTranslationHOC(MainBanner, "mainBanner");

function ContactButton() {
  return (
    <Link href="/contact">
      <a className="btn btn-primary">Contact Us</a>
    </Link>
  );
}
