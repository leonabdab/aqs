"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GoTop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            is_visible: false
        };
    }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const { is_visible  } = this.state;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "scroll-to-top",
                children: is_visible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                    className: "pe-7s-angle-up",
                    onClick: ()=>this.scrollToTop()
                })
            })
        });
    }
};


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1621);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7788);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_i18n__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([_services_i18n__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















// App Showcase Home Style

// Business Consulting Home Page Style

// Global Style





function MyApp({ Component , pageProps  }) {
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        aos__WEBPACK_IMPORTED_MODULE_2___default().init();
    }, []);
    swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([
        swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                        children: "AQS - quality control"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1621:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);
i18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const resources = {
    pl: _pl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    fallbackLng: "pl",
    interpolation: {
        escapeValue: false
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ i18n_pl)
});

;// CONCATENATED MODULE: ./services/i18n/translations/about.ts
const about = {
    mainText: {
        1: "Profesjonalny outsourcing produkcyjny",
        2: "Nasz\u0105 misj\u0105 jest najw\u017Cysza jako\u015B\u0107 us\u0142ug "
    },
    page: {
        title: "O nas",
        shortDescription: `AQS jest profesjonalną firmą outsourcingową, specjalizującą się w świadczeniu usług z zakresu outsourcingu pracowników oraz procesów produkcyjnych, kontroli i selekcji komponentów, wsparcia logistyki, reworku oraz lean manufacturing.`,
        ourMission: {
            title: "Nasza misja",
            description: {
                1: "Nasza firma powsta\u0142a po to, aby \u2013 bazuj\u0105c na gruncie partnerstwa i wsp\xf3\u0142pracy \u2013 oferowa\u0107 naszym klientom najwy\u017Csz\u0105 mo\u017Cliw\u0105 jako\u015B\u0107 wykonywanych przez nas us\u0142ug.",
                2: "AQS Poland, w oparciu o specjalistyczn\u0105 wiedz\u0119, dobr\u0105 znajomo\u015B\u0107 rynku lokalnego oraz unikalne do\u015Bwiadczenie naszych specjalist\xf3w nabyte na przestrzeni wielu lat, wychodzi naprzeciw oczekiwaniom Partner\xf3w Biznesowych, proponuj\u0105c najkorzystniejsze rozwi\u0105zania dopasowane do indywidualnego Klienta. "
            }
        },
        whoWeWorkFor: {
            title: "Dla kogo pracujemy",
            description: {
                1: "Posiadamy bogate do\u015Bwiadczenie w realizacji spersonalizowanych, wymagaj\u0105cych projekt\xf3w dla naszych Klient\xf3w. Zapewniamy im wsparcie oraz pomoc merytoryczn\u0105 na ka\u017Cdym etapie wsp\xf3\u0142pracy.",
                2: "Pracujemy dla sektora motoryzacyjnego oraz AGD/RTV, systematycznie poszerzaj\u0105c grono usatysfakcjonowanych Klient\xf3w."
            }
        },
        ourStandards: {
            title: "Standardy",
            description: "Bazuj\u0105c na naszej specjalistycznej wiedzy oraz do\u015Bwiadczeniu, stworzyli\u015Bmy ofert\u0119, kt\xf3ra dopasowuje si\u0119 do najbardziej zaawansowanych potrzeb naszych obecnych oraz przysz\u0142ych Partner\xf3w Biznesowych.",
            list: {
                std1: "kompleksowo\u015B\u0107 obs\u0142ugi",
                std2: "komplementarno\u015B\u0107 us\u0142ugi",
                std3: "elastyczno\u015B\u0107",
                std4: "dyspozycyjno\u015B\u0107 i zaanga\u017Cowanie",
                std5: "wysoki poziom oferowanej us\u0142ugi",
                std6: "specjalistyczn\u0105 wiedz\u0119 oraz bogate do\u015Bwiadczenie"
            }
        }
    },
    team: {
        title: "Dedykowany zesp\xf3\u0142",
        description: "Dzi\u0119ki niewielkiej rotacji pracownik\xf3w jeste\u015Bmy w\xa0stanie zapewni\u0107 ci\u0105g\u0142o\u015B\u0107 obs\u0142ugi ka\u017Cdego projektu przez ten sam dobrze wykwalifikowany zesp\xf3\u0142 os\xf3b.",
        coo: {
            title: "Dyrektor ds. operacyjnych",
            description: ""
        },
        manager: {
            title: "Kierownik operacyjny",
            description: ""
        },
        coordinator: {
            title: "Koordynator",
            description: "Osoba b\u0119d\u0105ca do dyspozycji klienta 7 dni w tygodniu oraz 24h/dob\u0119"
        },
        teamLeader: {
            title: "Team Leader",
            description: "Osoba pe\u0142ni\u0105ca nadz\xf3r nad zespo\u0142em oddelegowanych kontroler\xf3w"
        },
        qa: {
            title: "Kontrolerzy jako\u015Bci",
            description: "Osoby posiadaj\u0105ce do\u015Bwiadczenie w realizacji projekt\xf3w z zakresu kontroli jako\u015Bci i/lub reworku"
        }
    }
};
/* harmony default export */ const translations_about = (about);

;// CONCATENATED MODULE: ./services/i18n/translations/career.ts
const career = {
    mainText: {
        1: "Do\u0142\u0105cz do naszego zespo\u0142u",
        2: "O sukcesie firmy decyduj\u0105 ludzie, kt\xf3rzy j\u0105 tworz\u0105"
    }
};
/* harmony default export */ const translations_career = (career);

;// CONCATENATED MODULE: ./services/i18n/translations/mainBanner.ts
const mainBanner = {
    title: {
        1: "Zyskaj przewag\u0119 nad konkurencj\u0105",
        2: "Podejmij prac\u0119 dostosowan\u0105 do twoich potrzeb",
        3: "Postaw na efektywno\u015B\u0107 przedsi\u0119biorstwa",
        4: "Do\u0142\u0105cz do naszego zespo\u0142u"
    },
    description: {
        1: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.`,
        2: `O sukcesie firmy decydują tworzący ją ludzie. Dlatego właśnie zależy nam na tym, aby nasz zespół czerpał satysfakcję z wykonywanej pracy raz aby czuł się w niej dobrze i bezpiecznie. `,
        3: `Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        4: `O sukcesie firmy decydują tworzący ją ludzie. Dlatego właśnie zależy nam na tym, aby nasz zespół czerpał satysfakcję z wykonywanej pracy raz aby czuł się w niej dobrze i bezpiecznie. `
    },
    button: {
        1: "Skontaktuj si\u0119 z nami",
        2: "Sprawd\u017A aktualne oferty pracy",
        3: "Skontaktuj si\u0119 z nami",
        4: "Sprawd\u017A aktualne oferty pracy"
    }
};
/* harmony default export */ const translations_mainBanner = (mainBanner);

;// CONCATENATED MODULE: ./services/i18n/translations/navbar.ts
const navbar = {
    home: "Strona g\u0142\xf3wna",
    about: "O nas",
    services: "Us\u0142ugi",
    career: "Do\u0142\u0105cz do nas",
    resources: "Publikacje",
    contact: "Kontakt"
};
/* harmony default export */ const translations_navbar = (navbar);

// EXTERNAL MODULE: ./services/i18n/translations/servicesBanner.ts
var servicesBanner = __webpack_require__(9629);
;// CONCATENATED MODULE: ./services/i18n/translations/ourWorksBanner.ts
const tr = {
    title: "Bran\u017Ce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Zobacz co mo\u017Cemy dla ciebie zrobi\u0107",
    automotive: {
        subtitle: "Motoryzacja",
        title: "Bran\u017Ca Automotive",
        button: "Dowiedz si\u0119 wi\u0119cej"
    },
    agdRtv: {
        subtitle: "Elektronika",
        title: "AGD / RTV",
        button: "Dowiedz si\u0119 wi\u0119cej"
    },
    production: {
        subtitle: "Jako\u015B\u0107 i kontrola",
        title: "Produkcja",
        button: "Dowiedz si\u0119 wi\u0119cej"
    }
};
/* harmony default export */ const ourWorksBanner = (tr);

;// CONCATENATED MODULE: ./services/i18n/translations/footer.ts
const footer_tr = {
    bottomNav: {
        title1: "Strona",
        title2: "Kontakt"
    }
};
/* harmony default export */ const footer = (footer_tr);

;// CONCATENATED MODULE: ./services/i18n/pl.ts







const pl = {
    navbar: translations_navbar,
    mainBanner: translations_mainBanner,
    features: {
        outsourcing: "Ousourcing \npracownik\xf3w produkcyjnych",
        control: "Kontrola i selekcja komponent\xf3w",
        logistic: "Wsparcie logistyki",
        lean: "Rework\n i Lean Manufacturing"
    },
    about: translations_about,
    servicesBanner: servicesBanner/* default */.Z,
    ourWorksBanner: ourWorksBanner,
    footer: footer,
    whoAreWe: {
        title: "Kim jeste\u015Bmy",
        descriptionMain: `Specjalizujemy się w świadczeniu usług z zakresu outsourcingu pracowników oraz procesów produkcyjnych.`,
        descriptionSecondary: `Jesteśmy profesjonalną firmą outsourcingową z siedzibą we Wrocławiu. Zajmujemy się kontrolą i selekcją komponentów, wsparciem logistyki, reworkiem oraz lean manufacturing.
    Cechuje nas profesjonalizm i doświadczenie widoczne na każdym etapie współpracy z naszymi klientami i pracownikami AQS Poland. 
    Tworzymy zgrany zespół specjalistów z różnych sektorów produkcyjnych.
    O sukcesie naszej firmy decydują tworzący ją ludzie, dlatego zależy nam, aby nasz zespół czerpał satysfakcję z wykonywanej pracy raz aby czuł się w niej bezpiecznie i dobrze.`,
        buttonText: "Dowiedz si\u0119 wi\u0119cej"
    },
    whatWeDoBanner: {
        subtitle: "Czym si\u0119 zajmujemy",
        title: "Nasze us\u0142ugi",
        description: "Dzi\u0119ki wieloletniemu do\u015Bwiadczeniu i wiedzy stworzyli\u015Bmy ofert\u0119, kt\xf3ra dopasowuje si\u0119 do najbardziej zaawansowanych potrzeb naszych partner\xf3w biznesowych. Realizujemy dla naszych klient\xf3w najbardziej wymagaj\u0105ce projekty.",
        cases: {
            qa: {
                title: "Wsparcie jako\u015Bci",
                description: "Kontrol\u0119 jako\u015Bci przeprowadzamy u dostawcy, klienta, w naszych magazynach lub wyznaczonym miejscu."
            },
            production: {
                title: "Wsparcie produkcji",
                description: "Wspieramy naszych klient\xf3w oddelegowuj\u0105c wykwalifikowanych pracownik\xf3w na ka\u017Cdy etap procesu produkcyjnego."
            },
            logistic: {
                title: "Wsparcie logistyki",
                description: "Wspieramy naszych kilent\xf3w we wszystkich procesach logistycznych."
            }
        }
    },
    callToActionBanner: {
        client: {
            title: "Znajd\u017A najlepsze rozwi\u0105zanie dla swojego biznesu ",
            button: "Skontaktuj si\u0119 z nami"
        },
        employee: {
            title: "Podejmij prac\u0119 dostosowan\u0105 do Twoich potrzeb",
            button: "Zobacz aktualne oferty pracy"
        }
    },
    contactInfo: {
        email: "Email",
        address: "Adres",
        phone: "Telefon"
    },
    contactForm: {
        title: "Formularz kontaktowy",
        inputs: {
            name: "Imi\u0119",
            email: "Email",
            phone: "Numer telefonu",
            subject: "Temat",
            message: "Wiadomo\u015B\u0107..."
        },
        text: "TODO: Skontaktuj si\u0119 z nami poprzez formularz kontaktowy",
        successAlert: {
            title: "Wiadomo\u015B\u0107 wys\u0142ana",
            text: "Pomy\u015Blnie dostarczono wiadomo\u015B\u0107. Odpowiemy na ni\u0105 jak najszybciej."
        }
    },
    career: translations_career
};
/* harmony default export */ const i18n_pl = (pl);


/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [629], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();