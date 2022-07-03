import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default class OurClients extends Component {
  render() {
    return (
      <>
        <div className="partner-area bg-1b2232 ptb-100">
          <div className="container text-center">
            <Swiper
              navigation={true}
              spaceBetween={50}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              modules={[Navigation]}
              className="mySwiper partner-slides"
            >
              <SwiperSlide>
                <div className="partner-item text-center">
                  <img src="/images/aqs/partners/bmw-logo.png" alt="bmw" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img src="/images/aqs/partners/audi-logo.png" alt="audi" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img src="/images/aqs/partners/ford-logo.svg" alt="ford" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img src="/images/aqs/partners/skoda-logo.svg" alt="skoda" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img src="/images/aqs/partners/dekra-logo.jpeg" alt="dekra" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img
                    src="/images/aqs/partners/diehls-logo.png"
                    alt="diehls"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img
                    src="/images/aqs/partners/audiofon-logo.png"
                    alt="audiofon"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img
                    src="/images/aqs/partners/parker-logo.png"
                    alt="parker"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <img
                    src="/images/aqs/partners/tristone-logo.png"
                    alt="tristone"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}
