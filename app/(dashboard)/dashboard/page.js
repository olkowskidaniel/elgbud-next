"use client";
import css from "./page.module.css";

import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();
  return (
    <div className={css.container}>
      {status === "authenticated" ? (
        session.user?.verified ? (
          <p>Tu pojawi się treść </p>
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
