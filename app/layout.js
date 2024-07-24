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
import { BreadCrums } from "@/components/BreadCrums";
import UploadForm from "@/components/UploadForm";
import CookiesConset from "@/components/CookiesConset";
import { AlertProvider } from "@/context/AlerterContext";
import Alert from "@/components/Alert";
import Loader from "@/components/Loader";
import SpeedDial from "@/components/SpeedDial";

const AvertaStd = localFont({
  src: "./font/AvertaStd-Regular.woff2",
  display: "swap",
});

export const metadata = {
  title:
    "",
  description:
    "",
};

export default function RootLayout({ children, isLoading }) {
  return (
    <html lang="en">
      <AlertProvider>
        <GlobalDataProvider>
          <body className={AvertaStd.className}>
            <Loader />
            <div className="">
              <Header />
              <BreadCrums />
              <Cart />
              <Alert />
              {children}
              <SpeedDial />
              <Footer />
              {/* <BottomNav/> */}
              <UploadForm />
            </div>
          </body>
          {/* <CookiesConset /> */}
        </GlobalDataProvider>
      </AlertProvider>
    </html>
  );
}
