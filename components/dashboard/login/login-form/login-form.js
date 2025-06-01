"use client";

import css from "./login-form.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import DashButton from "../../dash-button/dash-button";
import Spinner from "@/components/spinner/spinner";

const schema = yup
  .object({
    username: yup.string().required("Podaj nazwę użytkownika"),
    password: yup.string().required("Podaj hasło"),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const router = useRouter();

  const onLoginSubmit = async ({ username, password }) => {
    setIsLoginInProgress(true);
    setIsInvalidCredentials(false);

    await signIn("credentials", {
      username,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Login successful");
          router.push("/dashboard");
        } else {
          setIsLoginInProgress(false);
          setIsInvalidCredentials(true);
        }
      })
      .catch((err) => {
        setIsLoginInProgress(false);
        console.log("Login failed: ", res.error);
      });
  };

  return (
    <div className={css.container}>
      <p className={css.title}>Logowanie</p>

      <form onSubmit={handleSubmit(onLoginSubmit)}>
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
        <DashButton
          type="submit"
          disabled={isLoginInProgress}
          style={{ width: "200px" }}
        >
          {isLoginInProgress ? <Spinner loading={true} /> : "Zaloguj"}
        </DashButton>
        {isInvalidCredentials && (
          <p style={{ color: "red" }}>Nieprawidłowe dane logowania</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
