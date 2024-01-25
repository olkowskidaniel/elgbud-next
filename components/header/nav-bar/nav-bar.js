"use client";
import css from "./nav-bar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuOptions = [
  {
    id: 0,
    href: "/",
    title: "Strona Główna",
  },
  {
    id: 1,
    href: "/o-firmie",
    title: "O firmie",
  },
  {
    id: 2,
    href: "/oferta",
    title: "Oferta",
  },
  {
    id: 3,
    href: "/realizacje",
    title: "Realizacje",
  },
  {
    id: 4,
    href: "/kontakt",
    title: "Kontakt",
  },
];

const NavBar = () => {
  const path = usePathname();
  return (
    <nav className={css["nav-bar"]}>
      <ul>
        {menuOptions.map((option) => (
          <li key={option.id}>
            <Link
              href={option.href}
              className={path === option.href ? css.active : ""}
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
