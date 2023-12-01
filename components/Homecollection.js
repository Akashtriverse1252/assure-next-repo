import React from "react";
import styles from "../app/page.module.css";
import { TextField } from "@mui/material";
import { Call } from "./svg-components/Call";
import { WhatsApp } from "./svg-components/WhatsApp";

export const Homecollection = () => {
  return (
    <>
      <div className="enquireform col-12 float-start">
        <div className={styles.equireheading}>
          <h2>
            <span>BOOK HOME COLLECTION</span>
          </h2>
        </div>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            className={styles.inputmodified}
            fullWidth
          />
          <TextField
            label="Mobile Number"
            variant="outlined"
            className={styles.inputmodified}
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            className={styles.inputmodified}
            fullWidth
          />
          <button
            type="submit"
            className="col-12 button button--aylen button--round-l button--text-thick"
          >
            Submit
          </button>
        </form>
        {/* <div className="col-12 float-start cta flex-center justify-content-center">
          <span className="col-lg-5 col-xs-6 col-12 grid-center text-center gap-1 whatsapp">
            <WhatsApp /> <p>WhatsApp</p>
          </span>
          <span className="col-lg-5 col-xs-6 col-12 grid-center text-center gap-1 call">
            <Call /> <p>Call</p>
          </span>
        </div> */}
      </div>
    </>
  );
};
