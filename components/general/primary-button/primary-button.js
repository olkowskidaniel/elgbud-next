"use client";

import css from "./primary-button.module.css";
import { useRouter } from "next/navigation";

const PrimaryButton = ({ children, fontColor, navigate }) => {
  const router = useRouter();
  const handleClick = () => {
    if (navigate) {
      router.push(navigate);
    }
  };

  return (
    <button className={css.button} onClick={handleClick}>
      <div className={css["button_line"]}></div>
      <div className={css["button_line"]}></div>
      <span
        style={fontColor && { color: fontColor }}
        className={css["button_text"]}
      >
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
