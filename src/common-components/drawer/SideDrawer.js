import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import { RiDeleteBin5Line } from "react-icons/ri";

import {
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import "./SideDrawer.scss";

const SideDrawer = (props) => {
  const {
    handleDrawerClose,
    buttonDownLoad,
    buttonUpload,
    buttonCancel,
    buttonCreate,
    drwawerHeader,
    content,
    open,
    clearForm,
    submitForm,
    downloadCsv,
    uploadCsv,
    drawerWidthSize,
    drawerHeaderWidth,
  } = props;
  const drawerWidth = drawerWidthSize || 300;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "space-between",
      position: "fixed",
      backgroundColor: "white",
      zIndex: 1,
      width: drawerHeaderWidth || 260,
      borderBottom: "1px solid #E2E2E2",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));
  const classes = useStyles();
  const theme = useTheme();

  const drawerContent = (
    <>
      <div>
        <div className="row" style={{ marginTop: "5rem" }}>
          {content}
        </div>
        {buttonCancel && buttonCreate && (
          <div className="drawer-button-margin">
            <div className="container">
              <div className="row">
                <div className="col-6 pl-2">
                  <button
                    id="signupSubmit"
                    type="submit"
                    className="btn drawer-button-info btn-block"
                    onClick={clearForm}
                  >
                    {buttonCancel}
                    <RiDeleteBin5Line style={{ width: "2rem" }} />
                  </button>
                </div>
                <div className="col-6 pr-2">
                  <button
                    id="signupSubmit"
                    type="submit"
                    className="btn drawer-create-button btn-block"
                    onClick={submitForm}
                  >
                    {buttonCreate}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <List />
      </div>
      {buttonDownLoad && buttonUpload && (
        <div className="download-upload-container">
          <div className="container">
            <div className="row">
              <div className="col-6 pl-2">
                <button
                  type="button"
                  className="btn btn-link button-Link"
                  onClick={downloadCsv}
                >
                  {buttonDownLoad}
                </button>
              </div>
              <div className="col-6 pr-2">
                <button
                  type="submit"
                  className="btn drawer-create-button btn-block"
                  onClick={uploadCsv}
                >
                  {buttonUpload}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className={classes.root}>
      <React.Fragment>
        <Drawer
          className={classes.paper}
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
          open={open}
        >
          <div className={classes.drawerHeader}>
            <div className="header-text">
              {drwawerHeader}
              <AiOutlineInfoCircle className="info-icon" />
            </div>

            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <AiOutlineLeft />
              ) : (
                <AiOutlineClose />
              )}
            </IconButton>
          </div>
          {drawerContent}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
SideDrawer.propTypes = {
  // type: PropTypes.string.isRequired,
  drwawerHeader: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  buttonCancel: PropTypes.string,
  buttonCreate: PropTypes.string,
  buttonDownLoad: PropTypes.string,
  buttonUpload: PropTypes.string,
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
  clearForm: PropTypes.func,
  submitForm: PropTypes.func,
  uploadCsv: PropTypes.func,
  downloadCsv: PropTypes.func,
  drawerWidthSize: PropTypes.number,
  drawerHeaderWidth: PropTypes.number,
};
export default SideDrawer;
