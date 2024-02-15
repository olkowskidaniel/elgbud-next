import css from "./primary-button.module.css";
import Link from "next/link";

const PrimaryButton = ({ children, dest, fontColor }) => {
  return (
    <Link href={dest} className={css.button}>
      <div className={css["button_line"]}></div>
      <div className={css["button_line"]}></div>
      <span
        style={fontColor && { color: fontColor }}
        className={css["button_text"]}
      >
        {children}
      </span>
    </Link>
  );
};

export default PrimaryButton;
