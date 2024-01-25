import css from "./hero.module.css";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import Button from "@/components/general/button/button";

import house from "@/assets/house_ai_2.png";

const Hero = () => {
  return (
    <div className={css.hero}>
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
        <Button />
      </div>
    </div>
  );
};

export default Hero;
