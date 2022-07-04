"use strict";
exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 1350:
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
/* harmony import */ var _services_i18n_translations_servicesBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9629);




function Services() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("servicesBanner");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "container mt-4 pt-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "section-title",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        children: t("title")
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "bg-fcfbfb pt-100 pb-70",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "container px-0 mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "row justify-content-center",
                        children: new Array(_services_i18n_translations_servicesBanner__WEBPACK_IMPORTED_MODULE_3__/* .NUMBER_OF_SERVICES */ .L).fill("").map((_, i)=>{
                            const idx = i + 1;
                            const details = getQAServiceIconsAndBgs(idx);
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "service-card-one white-bg text-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                            className: `${details.icon} ${details.bg}`
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                            children: t(`services.service${idx}.title`)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            children: t(`services.service${idx}.description`)
                                        })
                                    ]
                                })
                            }, `services-item-${idx}`);
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
function getQAServiceIconsAndBgs(idx) {
    const details = {
        1: {
            icon: "pe-7s-look",
            bg: "bg-55DDE0"
        },
        2: {
            icon: "pe-7s-graph3",
            bg: "bg-33658A"
        },
        3: {
            icon: "pe-7s-tools",
            bg: "bg-2F4858"
        },
        4: {
            icon: "pe-7s-network",
            bg: "bg-315771"
        },
        5: {
            icon: "pe-7s-config",
            bg: "bg-F48923"
        },
        6: {
            icon: "pe-7s-note2",
            bg: "bg-937B43"
        },
        7: {
            icon: "pe-7s-back",
            bg: "bg-F26419"
        },
        8: {
            icon: "pe-7s-target",
            bg: "bg-C59538"
        },
        9: {
            icon: "pe-7s-edit",
            bg: "bg-4FC9D2"
        },
        10: {
            icon: "pe-7s-box2",
            bg: "bg-47ABBC"
        },
        11: {
            icon: "pe-7s-download",
            bg: "bg-3a7587"
        },
        12: {
            icon: "pe-7s-photo-gallery",
            bg: "bg-4ab5c3"
        }
    };
    return details[idx];
}


/***/ })

};
;