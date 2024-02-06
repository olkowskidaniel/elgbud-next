import css from "./benefits.module.css";

import BenefitItem from "./benefit-item/benefit-item";
import SectionTitle from "@/components/general/section-title/section-title";

import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

const benefits = [
  {
    id: 0,
    icon: HiClipboardDocumentList,
    title: "Kompleksowa realizacja",
    desc: "Oferujemy kompleksową formalno-prawną. W zależności od Państwa potrzeb realizujemy inwestycje do stanu surowego, deweloperskiego lub pod klucz. Nasze usługi realizujemy na terenie województwa kujawsko-pomorskiego.",
  },
  {
    id: 1,
    icon: FaUserCog,
    title: "Doświadczenie",
    desc: "Nasz zespół stanowią doświadczeni oraz wykwalifikowani specjaliści, którzy przez lata zdobywali umiejętności zarówno podczas realizacji zabudowy jednorodzinnej jak również podczas budowy obiektów przemysłowych.",
  },
  {
    id: 2,
    icon: MdOutlineMilitaryTech,
    title: "Gwarancja jakości",
    desc: "Koncentrujemy się na perfekcyjnym wykonaniu każdego domu, używając wyłącznie materiałów najwyższej jakości, pochodzących ze sprawdzonych źródeł, co w połączeniu z naszą dbałością o detale zapewnia trwałość i niezawodność każdej budowli.",
  },

  {
    id: 3,
    icon: GiMagnifyingGlass,
    title: "Przejrzystość procesu budowy",
    desc: "Zapewniamy doradztwo i dobór najlepszych materiałów oraz technologii. Stawiamy domy energooszczędne i funkcjonalne, które ułatwią codzienne funkcjonowanie w domowej przestrzeni.",
  },
];

const Benefits = () => {
  return (
    <section className={css.benefits}>
      <SectionTitle fontSize={"25px"} lineWidth={"100px"}>
        DLACZEGO WARTO Z NAMI BUDOWAĆ
      </SectionTitle>
      <div className={css["items-container"]}>
        {benefits.map((benefit) => (
          <BenefitItem
            key={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            desc={benefit.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
