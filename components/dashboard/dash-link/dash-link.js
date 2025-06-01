import css from "./dash-link.module.css";
import Link from "next/link";

const DashLink = ({ children, style, href }) => {
  return (
    <Link className={css.container} style={style} href={href}>
      {children}
    </Link>
  );
};

export default DashLink;
