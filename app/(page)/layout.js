import Footer from "@/components/footer/footer";
import "./globals.css";
import Header from "@/components/header/header";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ELGBUD",
  description: "Firma budowlano-transportowa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
