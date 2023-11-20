import { Header } from "@/components/Header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/context";
const AvertaStd = localFont({
  src: "./font/AvertaStd-Regular.woff2",
  display: "swap",
});

export const metadata = {
  title:
    "Best Pathology Lab in Jalandhar | Dr Pathlabs & Diagnostic Labs in Jalandhar | Assure Pathlabs",
  description:
    "Assure Pathlabs - Best Pathology Lab in Jalandhar | Get Best Health Chek -Up Packages in Jalandhar from Assure | Best diagnostic Labs in Jalandhar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={AvertaStd.className}>
          <Header />
          {children}

          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
