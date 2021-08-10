import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Popovers from "@material-ui/core/Popover";
import "./Popover.scss";

const useStyles = makeStyles(() => ({
  box: {
    width: "300px",
  },
}));

const Popover = (props) => {
  const { id, open, anchorEl, anchorOrigin, transformOrigin, content } = props;
  const classes = useStyles();

  const drawerContent = <div className={classes.box}>{content}</div>;
  return (
    <div className="filter-popover">
      <Popovers
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        disableEnforceFocus={true}
      >
        {drawerContent}
      </Popovers>
    </div>
  );
};

Popover.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  anchorOrigin: PropTypes.object.isRequired,
  anchorEl: PropTypes.object,
  transformOrigin: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
};
export default Popover;
