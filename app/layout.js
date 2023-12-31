import { Header } from "@/components/Header";
import "./globals.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { GlobalDataProvider } from "@/context/context";
import Cart from "../components/Cart.js";
import SmoothScroll from "../components/SmoothScroll";

import { BreadCrums } from "@/components/BreadCrums";
import UploadForm from "@/components/UploadForm";
import CookiesConset from "@/components/CookiesConset";
import { AlertProvider } from "@/context/AlerterContext";
import Alert from "@/components/Alert";
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
      <AlertProvider>
        <GlobalDataProvider>
          <body className={AvertaStd.className}>
            {/* <SmoothScroll> */}
            <div className="">
              <Header />
              <BreadCrums />
              <Cart />
              <Alert />
              {children}
              {/* {children} */}
              <Footer />
              <UploadForm />
            </div>
            {/* </SmoothScroll> */}
          </body>
          <CookiesConset />
        </GlobalDataProvider>
      </AlertProvider>
    </html>
  );
}
