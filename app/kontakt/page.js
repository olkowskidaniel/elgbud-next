import css from "./page.module.css";

import SectionTitle from "@/components/general/section-title/section-title";
import InfoCards from "@/components/contact-page/info-cards/info-cards";
import MapWrapper from "@/components/contact-page/map-wrapper/map-wrapper";

export default function ContactPage() {
  return (
    <main className={css["contact-page"]}>
      <div className={css.container}>
        <SectionTitle lineWidth={`150px`}>
          Pozwól nam wybudować Twój wymarzony dom
        </SectionTitle>
        <InfoCards />
        <MapWrapper />
      </div>
    </main>
  );
}
