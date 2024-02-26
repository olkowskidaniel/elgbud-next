import LoginForm from "@/components/dashboard/login/login-form/login-form";
import css from "./page.module.css";
import { connectToDatabase } from "@/lib/db";

const Page = () => {
  const handleClick = async () => {
    const client = connectToDatabase();
  };

  handleClick();
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default Page;
