import React from "react";
import MacContainer from "./mac-main-container/MacContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHeart } from "react-icons/ai";
import TemporaryDrawe from "../src/header-container/TemporaryDrawer";
import "./App.css";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{height: "100vh"}}>
      <div>
      <MacContainer />
      </div>
      <div className="navbar fixed-bottom d-flex justify-content-center" style={{backgroundColor: "#3f51b5"}}>
        <span className="mr-3">
        Քարտեզը պատրաստվել է ՄԱԶԾ «Կանայք և երիտասարդները նորարար տեղական զարգացման գործընթացներում
        </span>
        <AiFillHeart />
        <button
          onClick={() => setModalShow(true)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "12px",
          }}
        >
          իմանալ ավելին
        </button>
      </div>
      <TemporaryDrawe
        show={modalShow}
        bodyData="Քարտեզը պատրաստվել է «Your way» նախաձեռնության կողմից, որն իրականացվել է ՄԱԶԾ
        «Կանայք և երիտասարդները նորարար տեղական զարգացման գործընթացներում» ծրագրի
        շրջանակներում, ծրագիրը ֆինանսավորվում է Շվեյցարիայի զարգացման և համագործակցության
        գործակալության կողմից և իրականցվում է ՀՀ Տարածքային կառավարման և
        ենթակառուցվածքների նախարարության հետ համագործակցությամբ։ Հավելվածում արտահայտված
        տեսակետները պարտադիր չէ, որ համընկնեն ՄԱԶԾ և ՇԶՀԳ տեսակետների հետ։"
        bodyHeader="Մեր Մասին"
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
