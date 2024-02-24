import css from "./page.module.css";

import SectionTitle from "@/components/general/section-title/section-title";

export default function RealizationsPage() {
  return (
    <main className={css["realizations-page"]}>
      <div className={css.container}>
        <SectionTitle lineWidth={"100px"}>Zobacz nasze realizacje</SectionTitle>
      </div>
    </main>
  );
}
