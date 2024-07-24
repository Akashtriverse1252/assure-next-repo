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
  title: "",
  description: "",
};

export default function RootLayout({ children, isLoading }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-KZLBSCR",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <AlertProvider>
        <GlobalDataProvider>
          <body className={AvertaStd.className}>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-KZLBSCR"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            <noscript>You need to enable JavaScript to run this app.</noscript>
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
