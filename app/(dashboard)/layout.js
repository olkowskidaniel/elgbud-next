import SideNav from "@/components/dashboard/sidenav/sidenav";
import css from "./layout.module.css";
import "./globals.css";

export const metadata = {
  title: "Elgbud | Dashboard",
  description: "Dashboard page",
};

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={inter.className}>
      <body>
        <div className={css.container}>
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
