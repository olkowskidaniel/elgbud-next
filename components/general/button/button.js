import css from "./button.module.css";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/o-firmie" className={css.button}>
      <div className={css["button_line"]}></div>
      <div className={css["button_line"]}></div>
      <span className={css["button_text"]}>O FIRMIE</span>
    </Link>
  );
};

export default Button;
