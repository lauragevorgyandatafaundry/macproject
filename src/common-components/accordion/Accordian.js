import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from "@material-ui/icons/Info";
import PropTypes from "prop-types";
// import { AiOutlineInfoCircle } from "react-icons/ai";
import "./Accordian.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Accordian(props) {
  const {
    heading,
    subText,
    errorMessage,
    content,
    autoExpand,
    getDeatilData,
    id,
  } = props;
  const classes = useStyles();
  return (
    <div className="accordian-container">
      <div className={classes.root}>
        <Accordion
          defaultExpanded={autoExpand}
          onClick={() => id ? getDeatilData(id) : null}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              {/* will uncomment infoicon when required */}
              <Typography className="cordian-heading">
                {heading}
                {/* <AiOutlineInfoCircle className="info-icon" /> */}
              </Typography>
              <Typography className="acordian-subtext">{subText}</Typography>
              {errorMessage && (
                <Typography className="color-code-warning">
                  <InfoIcon />
                  {errorMessage}
                </Typography>
              )}
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <div className={classes.column}>{content}</div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
Accordian.propTypes = {
  heading: PropTypes.string,
  subText: PropTypes.string,
  errorMessage: PropTypes.string,
  content: PropTypes.node.isRequired,
  autoExpand: PropTypes.bool,
  getDeatilData: PropTypes.func,
  id: PropTypes.string,
};
