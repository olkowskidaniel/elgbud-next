import css from "./contact-bar.module.css";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
const ContactBar = () => {
  return (
    <div className={css["contact-bar-container"]}>
      <div className={css["contact-container"]}>
        <FaPhoneAlt />
        <Link href="tel:603121405">603 121 405</Link>
      </div>
      <div className={css["contact-container"]}>
        <HiEnvelope />
        <Link href="mailto:biuro@elgbud.pl">biuro@elgbud.pl</Link>
      </div>
    </div>
  );
};

export default ContactBar;
