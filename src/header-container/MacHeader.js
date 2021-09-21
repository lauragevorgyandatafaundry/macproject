import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./MacHeader.scss";
import logo1 from "./logos-01.svg";
import logo2 from "./logos-02.svg";
import logo3 from "./logos-03.svg";

function MacContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{
              width: "100%",
              height: "100px",
              display: "flex",
              backgroundColor: "#e6e6e6"
            }}>
        <Toolbar>
          <div
            variant="h6"
            className="col-12 d-flex  justify-content-between"
            style={{
              maxWidth:"100%",
              maxHeight: "100px",
              height: "auto",
              display: "flex",
              backgroundColor: "#e6e6e6"
            }}
          >
            <div className="col-3  align-items-center"><img src={logo1} /></div>
            <div className="col-3 d-flex  align-items-center justify-content-center"><img src={logo2} /></div>
            <div className="col-3  d-flex align-items-end justify-content-end"><img src={logo3} /></div>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default MacContainer;
