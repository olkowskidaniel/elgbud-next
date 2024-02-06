import css from "./page.module.css";

import SectionTitle from "@/components/general/section-title/section-title";
import InfoCard from "@/components/contact-page/info-card/info-card";

export default function ContactPage() {
  return (
    <main className={css["contact-page"]}>
      <div className={css.container}>
        <SectionTitle lineWidth={`150px`}>
          Pozwól nam wybudować Twój wymarzony dom
        </SectionTitle>
        <div className={css["cards-container"]}>
          <InfoCard title={"adres"}>
            <p>
              Elgiszewo 143 87-408 Ciechocin <br />
              pow. golubsko-dobrzyński
            </p>
          </InfoCard>
          <InfoCard title={"Kontakt"}>
            <p>Zrobić partial border na cardsach</p>
          </InfoCard>
          <InfoCard title={"Dane firmy"}>
            <p>Poniżej mapa a jeszcze poniżej formularz kontaktowy</p>
          </InfoCard>
        </div>
      </div>
    </main>
  );
}
