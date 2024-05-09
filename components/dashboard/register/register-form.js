"use client";

import css from "./register-form.module.css";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sign } from "crypto";
import { signIn, useSession } from "next-auth/react";

import DashButton from "../dash-button/dash-button";
import Spinner from "@/components/spinner/spinner";

const schema = yup
  .object({
    name: yup.string(),
    email: yup.string().email("Podaj poprawny adres email"),
    username: yup.string().required("Podaj nazwę użytkownika"),
    password: yup.string().required("Podaj hasło"),
    rePassword: yup
      .string()
      .required("Wpisz hasło ponownie")
      .oneOf([yup.ref("password"), null], "Hasła nie są takie same"),
  })
  .required();

const RegisterForm = () => {
  const [signedUpSuccess, setSignedUpSuccess] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [isRegisterInProgress, setIsRegisterInProgress] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onRegisterSubmit = async ({ name, email, username, password }) => {
    try {
      setUserExists(false);
      setSignedUpSuccess(false);
      setIsRegisterInProgress(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, username, password }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setSignedUpSuccess(true);
        await signIn("credentials", {
          username,
          password,
          redirect: true,
          callbackUrl: "/dashboard",
        })
          .then((res) => {
            console.log("res: ", res);
            if (res.ok) {
              redirect("/dashboard");
            }
          })
          .catch((err) => {
            setIsRegisterInProgress(false);
            console.log("err: ", err);
          });
      } else {
        setIsRegisterInProgress(false);
        if (res.status === 422) {
          setUserExists(true);
        }
      }
    } catch (error) {}
  };
  return (
    <div className={css.container}>
      <p className={css.title}>Rejestracja</p>

      <form onSubmit={handleSubmit(onRegisterSubmit)}>
        <div>
          <label htmlFor="name">Imię</label>
          <input type="text" {...register("name")} />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Adres email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="username">Nazwa użytkownika</label>
          <input type="text" {...register("username")} />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username?.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Hasło</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password?.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="rePassword">Powtórz hasło</label>
          <input type="password" {...register("rePassword")} />
          {errors.rePassword && (
            <span style={{ color: "red" }}>{errors.rePassword?.message}</span>
          )}
        </div>
        <DashButton
          type="submit"
          disabled={isRegisterInProgress}
          style={{ width: "200px" }}
        >
          {isRegisterInProgress ? <Spinner loading={true} /> : "Zarejestruj"}
        </DashButton>
        {signedUpSuccess && (
          <p style={{ color: "green" }}>Rejestracja zakończona pomyślnie</p>
        )}
        {userExists && (
          <p style={{ color: "red" }}>
            Użytkownik o takiej nazwie już istnieje
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
