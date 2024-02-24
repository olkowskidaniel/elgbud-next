import css from "./page.module.css";

import SectionTitle from "@/components/general/section-title/section-title";

export default function AboutPage() {
  return (
    <main className={css["about-page"]}>
      <div className={css.container}>
        <SectionTitle lineWidth={"100px"}>
          Dowiedz się o nas więcej
        </SectionTitle>
      </div>
    </main>
  );
}
