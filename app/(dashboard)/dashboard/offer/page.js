"use client";
import css from "./page.module.css";
import { useSession } from "next-auth/react";
import DashLink from "@/components/dashboard/dash-link/dash-link";

const Page = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        session.user?.verified ? (
          <div className={css.container}>
            <DashLink href="/dashboard/offer/add">DODAJ OFERTĘ</DashLink>
            <div className={css["offer-list"]}>
              <p>AKTUALNE OFERTY</p>
            </div>
          </div>
        ) : (
          <>
            <h1>Dzień dobry {session.user?.name}</h1>
            <p>
              Twoje konto nie jest zweryfikowane. Skontaktuj się z
              administratorem.
            </p>
          </>
        )
      ) : (
        <h1>Zaloguj się, aby uzyskać dostęp do panelu</h1>
      )}
    </div>
  );
};

export default Page;
