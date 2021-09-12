import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import "./ReuseableButton.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 0,
    width: "250px"
  },
}));
export default function ReuseableButton(props) {
  const classes = useStyles();
  const {
    text,
    colorVarient,
    startIcon,
    endIcon,
    handleChange,
    disabled,
    fullWidthFlag,
    hasFilter,
    settedSize
  } = props;
  return (
    <Button
      className={`${hasFilter && "button-red-background"} button-${colorVarient} ${classes.button} mt-2`}
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleChange}
      disabled={disabled}
      size={settedSize || "large"}
      fullWidth={fullWidthFlag}
    >
      {text}
    </Button>
  );
}

ReuseableButton.propTypes = {
  text: PropTypes.string,
  colorVarient: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidthFlag: PropTypes.bool,
  hasFilter: PropTypes.bool,
  settedSize: PropTypes.string,
};
