"use client";

import { useState } from "react";

import css from "./page.module.css";
import LoginForm from "@/components/dashboard/login/login-form/login-form";
import RegisterForm from "@/components/dashboard/register/register-form";
import DashButton from "@/components/dashboard/dash-button/dash-button";

const Page = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div className={css.container}>
      <div className={css["form-card"]}>
        <div className={css["form-container"]}>
          {!isRegistering && <LoginForm />}
          {isRegistering && <RegisterForm />}
        </div>
        {!isRegistering && (
          <div className={css["toggle-register-container"]}>
            <p>Nie masz konta?</p>
            <DashButton
              onClick={() => setIsRegistering((prevState) => !prevState)}
              style={{ width: "200px" }}
            >
              Zarejestruj się
            </DashButton>
          </div>
        )}
        {isRegistering && (
          <div className={css["toggle-register-container"]}>
            <DashButton
              onClick={() => setIsRegistering((prevState) => !prevState)}
              style={{ width: "200px" }}
            >
              Powrót do logowania
            </DashButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

//Q: jak we flexbox uniknąć rozszerzania się elementów wewnętrznych?
