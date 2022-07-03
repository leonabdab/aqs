import about from "./translations/about";
import career from "./translations/career";
import mainBanner from "./translations/mainBanner";
import navbar from "./translations/navbar";
import servicesBanner from "./translations/servicesBanner";
import ourWorksBanner from "./translations/ourWorksBanner";
import footer from "./translations/footer";

const pl = {
  navbar: navbar,
  mainBanner: mainBanner,
  features: {
    outsourcing: "Ousourcing \npracowników produkcyjnych",
    control: "Kontrola i selekcja komponentów",
    logistic: "Wsparcie logistyki",
    lean: "Rework\n i Lean Manufacturing",
  },
  about: about,
  servicesBanner: servicesBanner,
  ourWorksBanner: ourWorksBanner,
  footer: footer,
  whoAreWe: {
    title: "Kim jesteśmy",
    descriptionMain: `Specjalizujemy się w świadczeniu usług z zakresu outsourcingu pracowników oraz procesów produkcyjnych.`,
    descriptionSecondary: `Jesteśmy profesjonalną firmą outsourcingową z siedzibą we Wrocławiu. Zajmujemy się kontrolą i selekcją komponentów, wsparciem logistyki, reworkiem oraz lean manufacturing.
    Cechuje nas profesjonalizm i doświadczenie widoczne na każdym etapie współpracy z naszymi klientami i pracownikami AQS Poland. 
    Tworzymy zgrany zespół specjalistów z różnych sektorów produkcyjnych.
    O sukcesie naszej firmy decydują tworzący ją ludzie, dlatego zależy nam, aby nasz zespół czerpał satysfakcję z wykonywanej pracy raz aby czuł się w niej bezpiecznie i dobrze.`,
    buttonText: "Dowiedz się więcej",
  },
  whatWeDoBanner: {
    subtitle: "Czym się zajmujemy",
    title: "Nasze usługi",
    description:
      "Dzięki wieloletniemu doświadczeniu i wiedzy stworzyliśmy ofertę, która dopasowuje się do najbardziej zaawansowanych potrzeb naszych partnerów biznesowych. Realizujemy dla naszych klientów najbardziej wymagające projekty.",
    cases: {
      qa: {
        title: "Wsparcie jakości",
        description:
          "Kontrolę jakości przeprowadzamy u dostawcy, klienta, w naszych magazynach lub wyznaczonym miejscu.",
      },
      production: {
        title: "Wsparcie produkcji",
        description:
          "Wspieramy naszych klientów oddelegowując wykwalifikowanych pracowników na każdy etap procesu produkcyjnego.",
      },
      logistic: {
        title: "Wsparcie logistyki",
        description:
          "Wspieramy naszych kilentów we wszystkich procesach logistycznych.",
      },
    },
  },
  callToActionBanner: {
    client: {
      title: "Znajdź najlepsze rozwiązanie dla swojego biznesu ",
      button: "Skontaktuj się z nami",
    },
    employee: {
      title: "Podejmij pracę dostosowaną do Twoich potrzeb",
      button: "Zobacz aktualne oferty pracy",
    },
  },
  contactInfo: {
    email: "Email",
    address: "Adres",
    phone: "Telefon",
  },
  contactForm: {
    title: "Formularz kontaktowy",
    inputs: {
      name: "Imię",
      email: "Email",
      phone: "Numer telefonu",
      subject: "Temat",
      message: "Wiadomość...",
    },
    text: "TODO: Skontaktuj się z nami poprzez formularz kontaktowy",
    successAlert: {
      title: "Wiadomość wysłana",
      text: "Pomyślnie dostarczono wiadomość. Odpowiemy na nią jak najszybciej.",
    },
  },
  career: career,
};

export default pl;
