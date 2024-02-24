import css from "./page.module.css";
import Hero from "@/components/home-page/hero/hero";
import Benefits from "@/components/home-page/benefits/benefits";
export default function HomePage() {
  return (
    <main className={css["home-page-container"]}>
      <Hero />
      <Benefits />
    </main>
  );
}
