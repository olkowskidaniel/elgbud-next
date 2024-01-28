import css from "./footer.module.css";

import Image from "next/image";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";

import logoImg from "@/assets/logo-letter.png";
import MapSketch from "@/components/footer/map-sketch/map-sketch";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css["footer-tiles-wrap"]}>
        <Image src={logoImg} alt="logo letter" />
        <div className={css["contacts-container"]}>
          <p>FIRMA BUDOWLANO TRANSPORTOWA ELGBUD</p>
          <p>Bartosz Marcinkowski</p>
          <div>
            <FaPhoneAlt />
            <Link href="tel:603121405">603 121 405</Link>
          </div>
          <div>
            <HiEnvelope />
            <Link href="mailto:biuro@elgbud.pl">biuro@elgbud.pl</Link>
          </div>
          <div>
            <FaLocationDot />
            <p>
              Elgiszewo 143 87-408 Ciechocin <br />
              pow. golubsko-dobrzyński
            </p>
          </div>
        </div>
        <div className={css["map-sketch-container"]}>
          <p>
            Działamy na terenie Województwa <br />
            Kujawsko-Pomorskiego
          </p>
          <MapSketch />
        </div>
      </div>
      <p className={css.copyright}>
        Copyright © 2024 Elgbud Wszystkie prawa zastrzeżone | Projekt i
        wykonanie:{" "}
        <Link href="https://daniel-olkowski.pl">Daniel Olkowski</Link>
      </p>
    </div>
  );
};

export default Footer;
