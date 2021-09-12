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
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            className="d-flex  justify-content-between"
            style={{
              width: "100%",
              height: "100px",
              display: "flex",
            }}
          >
            <img src={logo1} />
            <img src={logo2} />
            <img src={logo3} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default MacContainer;
