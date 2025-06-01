"use client";
import css from "./sidenav.module.css";
import Image from "next/image";

import logo from "@/assets/logo_transparent.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import DashButton from "../dash-button/dash-button";
import DashLink from "../dash-link/dash-link";

const SideNav = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <div className={css.container}>
      <Link href="/dashboard">
        <Image src={logo} width={250} unoptimized alt="Logo" priority />
      </Link>

      {status !== "authenticated" && pathname !== "/dashboard/login" && (
        <div className={css["nav-links"]}>
          <DashLink href="/dashboard/login">Zaloguj się</DashLink>
        </div>
      )}

      {status !== "authenticated" && pathname === "/dashboard/login" && (
        <div className={css["nav-links"]}>
          <DashLink href="/dashboard">Powrót do strony głównej</DashLink>
        </div>
      )}

      {status === "authenticated" && session.user?.verified && (
        <div className={css["nav-links"]}>
          <DashLink href="/dashboard/offer">OFERTA</DashLink>
          <DashLink href="/dashboard/realizations">REALIZACJE</DashLink>
          <DashLink href="/dashboard/profile">PROFIL UŻYTKOWNIKA</DashLink>
          <DashButton
            onClick={() => {
              signOut();
            }}
          >
            WYLOGUJ SIĘ
          </DashButton>
        </div>
      )}

      {status === "authenticated" && !session.user?.verified && (
        <div className={css["nav-links"]}>
          <DashButton
            onClick={() => {
              signOut();
            }}
          >
            Wyloguj się
          </DashButton>
        </div>
      )}
    </div>
  );
};

export default SideNav;
