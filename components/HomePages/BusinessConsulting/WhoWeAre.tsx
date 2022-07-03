import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import withTranslationHOC from "../../../services/hoc/TranslationHOC";
import { TransFn } from "../../../utils/types";

type Props = {
  t: TransFn;
};

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class WhoWeAre extends Component<Props> {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <div className="bc-who-we-are-area ptb-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="bc-who-we-are-content">
                  <span className="sub-title">{this.props.t("title")}</span>
                  <h2>{this.props.t("descriptionMain")}</h2>
                  <p>{this.props.t("descriptionSecondary")}</p>
                  <Link href="/about">
                    <a className="default-btn-two">
                      {this.props.t("buttonText")}{" "}
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="bc-who-we-are-image">
                  <img
                    src="/images/aqs/team-work.jpeg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslationHOC(WhoWeAre, "whoAreWe");
