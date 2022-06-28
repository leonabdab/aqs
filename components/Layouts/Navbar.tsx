import React, { Component } from "react";
import withTranslationHOC from "../../services/hoc/TranslationHOC";
import Link from "../../utils/ActiveLink";
import { TransFn } from "../../utils/types";

interface Props {
  t: TransFn
}
class Navbar extends Component<Props> {
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
        <div id="navbar" className="navbar-area">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
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
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{this.props.t("about")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{this.props.t("services")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{this.props.t("career")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{this.props.t("resources")}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{this.props.t("contact")}</a>
                    </Link>
                  </li>

                  {/* TODO: REMOVE BELOW */}
                  {/* <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        TO REMOVE - all PAGES
                        <i className="icofont-thin-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu mega-dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Default Home</a>
                        </Link>

                        <Link href="/creative-agency" activeClassName="active">
                          <a className="nav-link">Creative Agency</a>
                        </Link>

                        <Link href="/it-agency" activeClassName="active">
                          <a className="nav-link">IT Agency</a>
                        </Link>

                        <Link href="/marketing-agency" activeClassName="active">
                          <a className="nav-link">Marketing Agency</a>
                        </Link>

                        <Link href="/portfolio-agency" activeClassName="active">
                          <a className="nav-link">Portfolio Agency</a>
                        </Link>

                        <Link href="/studio-agency" activeClassName="active">
                          <a className="nav-link">Studio Agency</a>
                        </Link>

                        <Link href="/business-agency" activeClassName="active">
                          <a className="nav-link">Business Agency</a>
                        </Link>

                        <Link href="/startup-agency" activeClassName="active">
                          <a className="nav-link">Startup Agency</a>
                        </Link>

                        <Link href="/software-startup" activeClassName="active">
                          <a className="nav-link">
                            Software Startup <span className="new">New</span>
                          </a>
                        </Link>

                        <Link
                          href="/digital-marketing"
                          activeClassName="active"
                        >
                          <a className="nav-link">
                            Digital Marketing <span className="new">New</span>
                          </a>
                        </Link>

                        <Link
                          href="/business-consulting"
                          activeClassName="active"
                        >
                          <a className="nav-link">
                            Business Consulting <span className="new">New</span>
                          </a>
                        </Link>

                        <Link
                          href="/freelancer-portfolio"
                          activeClassName="active"
                        >
                          <a className="nav-link">
                            Freelancer Portfolio{" "}
                            <span className="new">New</span>
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/default-home-2" activeClassName="active">
                          <a className="nav-link">Default Home Two</a>
                        </Link>

                        <Link
                          href="/creative-agency-2"
                          activeClassName="active"
                        >
                          <a className="nav-link">Creative Agency Two</a>
                        </Link>

                        <Link href="/it-agency-2" activeClassName="active">
                          <a className="nav-link">IT Agency Two</a>
                        </Link>

                        <Link
                          href="/marketing-agency-2"
                          activeClassName="active"
                        >
                          <a className="nav-link">Marketing Agency Two</a>
                        </Link>

                        <Link
                          href="/portfolio-agency-2"
                          activeClassName="active"
                        >
                          <a className="nav-link">Portfolio Agency Two</a>
                        </Link>

                        <Link href="/studio-agency-2" activeClassName="active">
                          <a className="nav-link">Studio Agency Two</a>
                        </Link>

                        <Link
                          href="/business-agency-2"
                          activeClassName="active"
                        >
                          <a className="nav-link">Business Agency Two</a>
                        </Link>

                        <Link href="/startup-agency-2" activeClassName="active">
                          <a className="nav-link">Startup Agency Two</a>
                        </Link>

                        <Link href="/app-showcase" activeClassName="active">
                          <a className="nav-link">
                            App Showcase <span className="new">New</span>
                          </a>
                        </Link>

                        <Link
                          href="/personal-portfolio"
                          activeClassName="active"
                        >
                          <a className="nav-link">
                            Personal Portfolio <span className="new">New</span>
                          </a>
                        </Link>

                        <Link href="/saas-startup" activeClassName="active">
                          <a className="nav-link">
                            SaaS Startup <span className="new">New</span>
                          </a>
                        </Link>

                        <Link
                          href="/cyber-security-agency"
                          activeClassName="active"
                        >
                          <a className="nav-link">
                            Cyber Security Agency{" "}
                            <span className="new">New</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* TODO: REMOVE END */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default withTranslationHOC(Navbar, "navbar");
