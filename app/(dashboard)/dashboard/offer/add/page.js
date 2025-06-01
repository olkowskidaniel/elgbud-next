"use client";
import css from "./page.module.css";
import { useSession } from "next-auth/react";
import DashLink from "@/components/dashboard/dash-link/dash-link";
import AddOfferForm from "@/components/dashboard/add-offer-form/add-offer-form";

const Page = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        session.user?.verified ? (
          <div className={css.container}>
            <h1>DODAJ OFERTĘ</h1>
            <AddOfferForm />
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
