import React, { useEffect } from "react";
import MacContainer from "./mac-main-container/MacContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHeart } from "react-icons/ai";
import TemporaryDrawe from "../src/header-container/TemporaryDrawer";
import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const { i18n, t } = useTranslation();
  const localeLang = "am"; // this we will read from localstorage or from a service
  useEffect(() => {
    i18n.changeLanguage(localeLang);
  }, [i18n, localeLang]);
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <MacContainer />
      </div>
      <div
        className="navbar d-flex justify-content-center smallText"
        style={{
          position: "fixed",
          bottom: "0%",
          width: "100%",
          alignItems: "center",
          fontSize: "10px",
        }}
      >
        <span className="mr-3">
          {t("footer_text")}
         
        </span>
        <AiFillHeart style={{ marginLeft: "3px" }} />
        <button
          onClick={() => setModalShow(true)}
          className="smallText"
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "10px",
          }}
        >
          {t("know_more")}
        </button>
      </div>
      <TemporaryDrawe
        show={modalShow}
        bodyData={t("big_info")}
        bodyHeader={t("about_us")}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
