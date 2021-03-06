"use strict";
exports.id = 781;
exports.ids = [781];
exports.modules = {

/***/ 5781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layouts_NavbarTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./services/hoc/TranslationHOC.tsx
var TranslationHOC = __webpack_require__(5065);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./utils/ActiveLink.tsx




const ActiveLink = ({ router , children , ...props })=>{
    const child = external_react_.Children.only(children);
    let className = child.props.className || "";
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }
    delete props.activeClassName;
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
        ...props,
        children: /*#__PURE__*/ external_react_default().cloneElement(child, {
            className
        })
    });
};
/* harmony default export */ const utils_ActiveLink = ((0,router_.withRouter)(ActiveLink));

;// CONCATENATED MODULE: ./components/Layouts/NavbarTwo.tsx




class NavbarTwo extends external_react_.Component {
    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = ()=>{
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
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
        const { collapsed  } = this.state;
        const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
        const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                id: "navbar",
                className: "navbar-area navbar-style-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                    className: "navbar navbar-expand-md",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container-fluid",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    className: "navbar-brand show",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/logo.png",
                                        alt: "logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: this.toggleNavbar,
                                className: classTwo,
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navbarSupportedContent",
                                "aria-controls": "navbarSupportedContent",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar top-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar middle-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar bottom-bar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: classOne,
                                id: "navbarSupportedContent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                                href: "/",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "nav-link",
                                                    children: this.props.t("home")
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                                href: "/about",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "nav-link",
                                                    children: this.props.t("about")
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                                href: "/services",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "nav-link",
                                                    children: this.props.t("services")
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                                href: "/career",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "nav-link",
                                                    children: this.props.t("career")
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                                href: "/resources",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "nav-link",
                                                    children: this.props.t("resources")
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_ActiveLink, {
                                                href: "/contact",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "nav-link",
                                                    children: this.props.t("contact")
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        });
    }
}
/* harmony default export */ const Layouts_NavbarTwo = ((0,TranslationHOC/* default */.Z)(NavbarTwo, "navbar"));


/***/ }),

/***/ 5065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);



const withTranslationHOC = (Component, translationKey)=>{
    return (props)=>{
        const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(translationKey);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
            t: t,
            ...props
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTranslationHOC);


/***/ })

};
;