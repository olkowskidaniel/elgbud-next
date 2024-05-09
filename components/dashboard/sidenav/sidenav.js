"use client";
import css from "./sidenav.module.css";
import Image from "next/image";

import logo from "@/assets/logo_transparent.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import DashButton from "../dash-button/dash-button";

const SideNav = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className={css.container}>
      <Link href="/dashboard">
        <Image src={logo} width={250} unoptimized alt="Logo" priority />
      </Link>
      <div className={css["nav-links"]}>
        {pathname === "/dashboard" && status !== "authenticated" && (
          <Link className={css.link} href="/dashboard/login">
            Zaloguj się
          </Link>
        )}
        {pathname === "/dashboard" && status === "authenticated" && (
          <DashButton
            onClick={() => {
              signOut();
            }}
          >
            Wyloguj się
          </DashButton>
        )}
        {pathname === "/dashboard/login" && (
          <Link className={css.link} href="/dashboard">
            Powrót do strony głównej
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideNav;
