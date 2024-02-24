"use client";

import css from "./login-form.module.css";

import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={css.container}>
      <p className={css.title}>Podaj dane logowania</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login">Nazwa użytkownika</label>
          <input type="text" {...register("login")} />
        </div>
        <div>
          <label htmlFor="passsword">Hasło</label>
          <input type="password" {...register("password")} />
        </div>
        <button className={css.submit} type="submit">
          Zaloguj
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
