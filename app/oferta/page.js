import css from "./page.module.css";
import SectionTitle from "@/components/general/section-title/section-title";

export default function OfferPage() {
  return (
    <main className={css["offer-page"]}>
      <div className={css.container}>
        <SectionTitle lineWidth={"100px"}>Sprawdź naszą ofertę</SectionTitle>
      </div>
    </main>
  );
}
