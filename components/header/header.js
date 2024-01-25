import css from "./header.module.css";
import Image from "next/image";
import logo from "@/assets/logo_original.png";
import Link from "next/link";
import ContactBar from "./contact-bar/contact-bar";
import NavBar from "./nav-bar/nav-bar";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css["middle-bar"]}></div>
      <ContactBar />
      <div className={css["logo-nav-container"]}>
        <div className={css["logo-container"]}>
          <Link href="/">
            <Image src={logo} width={280} alt="Elgbud logo" unoptimized />
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
