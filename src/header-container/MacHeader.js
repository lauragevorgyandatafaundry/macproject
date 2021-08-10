import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./MacHeader.scss";

function MacContainer() {

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{backgroundColor: "#301d91"}}>
        <Toolbar>
          <Typography variant="h6">LOGO</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default MacContainer;
