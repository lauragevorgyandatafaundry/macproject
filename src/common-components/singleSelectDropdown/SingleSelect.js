import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";
import "./SingleSelect.scss";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default function SingleSelects(props) {
  const {
    dropdownHandleChange,
    selectedValue,
    dropdownOptions,
    onBlur,
    label,
    id,
    name,
    placeholderValue,
    defaultValue,
    dissableFlag,
    percent
  } = props;
  return (
    <div className={`single-select-container mt-2 ${percent}`}>
      <span>{label}</span>
      <Select
        labelId="demo-customized-select-label"
        id={id}
        name={name}
        disabled={dissableFlag}
        placeholder={placeholderValue}
        value={selectedValue}
        onChange={(e) => dropdownHandleChange(e)}
        input={<BootstrapInput />}
        onBlur={onBlur}
        label={label}
      >
        {dropdownOptions &&
          dropdownOptions?.map((lifeCycle, i) => {
            return (
              <MenuItem value={lifeCycle} key={i}>
                {lifeCycle}
              </MenuItem>
            );
          })}
      </Select>
    </div>
  );
}
SingleSelects.propTypes = {
  dropdownHandleChange: PropTypes.func,
  onBlur: PropTypes.func,
  selectedValue: PropTypes.any,
  dropdownOptions: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholderValue: PropTypes.string,
  defaultValue: PropTypes.string,
  dissableFlag: PropTypes.bool,
  percent: PropTypes.string,
};
