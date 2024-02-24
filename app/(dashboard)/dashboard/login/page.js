import css from "./page.module.css";
import LoginForm from "@/components/dashboard/login/login-form/login-form";

const Page = () => {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default Page;
