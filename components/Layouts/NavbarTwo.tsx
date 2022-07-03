import React, { Component } from "react";
import withTranslationHOC from "../../services/hoc/TranslationHOC";
import Link from "../../utils/ActiveLink";
import { TransFn } from "../../utils/types";
interface Props {
  t: TransFn;
}
class NavbarTwo extends Component<Props> {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <>
        <div id="navbar" className="navbar-area  navbar-style-2">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <Link href="/">
                <a className="navbar-brand show">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                  />
                </a>
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">{this.props.t("home")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">{this.props.t("about")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a className="nav-link">{this.props.t("services")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/career" activeClassName="active">
                      <a className="nav-link">{this.props.t("career")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/resources" activeClassName="active">
                      <a className="nav-link">{this.props.t("resources")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{this.props.t("contact")}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default withTranslationHOC(NavbarTwo, "navbar");
