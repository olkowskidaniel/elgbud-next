"use client";

import css from "./hero.module.css";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import PrimaryButton from "@/components/general/primary-button/primary-button";

import house from "@/assets/house_ai_2.png";

const Hero = () => {
  return (
    <section className={css.hero}>
      <Image src={house} fill={true} alt="AI generated house" />
      <div className={css.description}>
        <p>Kompleksowa budowa domów jednorodzinnych</p>
        <div className={css["types-container"]}>
          <div>
            <BiCheckCircle />
            <p>Stan surowy</p>
          </div>
          <div>
            <BiCheckCircle />
            <p>Stan deweloperski</p>
          </div>
          <div>
            <BiCheckCircle />
            <p>Stan pod klucz</p>
          </div>
        </div>
        <PrimaryButton navigate="/o-firmie">WIĘCEJ O NAS</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
