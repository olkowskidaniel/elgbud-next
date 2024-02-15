import css from "./info-cards.module.css";
import InfoCard from "@/components/contact-page/info-cards/info-card/info-card";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";

const InfoCards = () => {
  return (
    <div className={css.container}>
      <InfoCard title={"adres"}>
        <div className={css["address-card"]}>
          <p>
            Elgiszewo 143 87-408 Ciechocin <br />
            pow. golubsko-dobrzyński
          </p>
        </div>
      </InfoCard>
      <InfoCard title={"Kontakt"}>
        <div className={css["contact-card"]}>
          <div className={css["contact-item"]}>
            <FaPhoneAlt />
            <Link href="tel:603121405">603 121 405</Link>
          </div>
          <div className={css["contact-item"]}>
            <HiEnvelope />
            <Link href="mailto:biuro@elgbud.pl">biuro@elgbud.pl</Link>
          </div>
        </div>
      </InfoCard>
      <InfoCard title={"Dane firmy"}>
        <div className={css["info-card"]}>
          <div className={css["info-item"]}>
            <span>NIP:</span>
            <span>5030064527</span>
          </div>
          <div className={css["info-item"]}>
            <span>REGON:</span>
            <span>341389985</span>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default InfoCards;
