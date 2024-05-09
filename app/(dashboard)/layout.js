import SideNav from "@/components/dashboard/sidenav/sidenav";
import css from "./layout.module.css";
import "./globals.css";
import AuthProvider from "@/components/dashboard/login/AuthProvider";

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
          <AuthProvider>
            <SideNav />
            {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
