import React, { Component } from "react";
import withTranslationHOC from "../../services/hoc/TranslationHOC";
import { TransFn } from "../../utils/types";

interface Props {
  t: TransFn;
}

class ContactInfo extends Component<Props> {
  render() {
    return (
      <>
        <div className="contact-info-area pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-box">
                  <div className="details">
                    <div className="icon">
                      <i className="pe-7s-mail"></i>
                    </div>
                    <h3>{this.props.t("email")}</h3>
                    <p>
                      <a href="mailto:office@aqs-poland.com">
                        office@aqs-poland.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info-box">
                  <div className="details">
                    <div className="icon">
                      <i className="pe-7s-map-2"></i>
                    </div>
                    <h3>{this.props.t("address")}</h3>
                    <p>
                      Plac Solny 14/3, <br />
                      Wrocław
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info-box">
                  <div className="details">
                    <div className="icon">
                      <i className="pe-7s-call"></i>
                    </div>
                    <h3>{this.props.t("phone")}</h3>
                    <p>
                      <a href="tel:+48 519 875 140">+48 519 875 140</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslationHOC(ContactInfo, "contactInfo");
