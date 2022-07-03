import React, { Component } from "react";

interface Props {
  pageTitle: string;
  secondaryText?: string;
  BGImage?: string;
}

class PageBanner extends Component<Props> {
  render() {
    let { pageTitle, BGImage, secondaryText } = this.props;
    return (
      <>
        <div className={`page-title-area ${BGImage}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <h2>{pageTitle}</h2>
                {secondaryText && <h4>{secondaryText}</h4>}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageBanner;
