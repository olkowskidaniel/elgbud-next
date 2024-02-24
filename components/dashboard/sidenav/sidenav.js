import css from "./sidenav.module.css";
import Image from "next/image";

import logo from "@/assets/logo_transparent.png";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className={css.container}>
      <Image src={logo} width={250} unoptimized />
      <Link href="/dashboard/login">Zaloguj się</Link>
    </div>
  );
};

export default SideNav;
