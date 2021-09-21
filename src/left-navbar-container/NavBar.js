import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CloseIcon from "@material-ui/icons/Close";
import ListSubheader from "@material-ui/core/ListSubheader";
import { FaPlaceOfWorship, FaSellcast } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "react-multilevel-dropdown";
import Accordian from "../common-components/accordion/Accordian";
import "./NavBar.scss";
import Popover from "../common-components/popover/Popover";
import {
  getSelectedMarks,
  fetchGladzor,
  getTouristPlaceVernashen,
  fetchGetap,
  fetchVernashen,
  fetchVernashenCHU,
  fetchVernashenSP,
} from "../redux/actions/commonActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "transparent",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function NavBar(props) {
  const {
    getSelectedMarks,
    fetchGladzor,
    gladzorRes,
    getTouristPlaceVernashen,
    vernashenTPRes,
    marks,
    fetchGetap,
    getapRes,
    fetchVernashen,
    vernashenRes,
    fetchVernashenCHU,
    fetchVernashenSP,
    vernashenspRes,
    vernashenchRes,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  useEffect(() => {
    fetchGladzor();
  }, []);

  useEffect(() => {
    const needStore = {
      tnv: gladzorRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
  }, [gladzorRes]);

  useEffect(() => {
    const needStore = {
      tnv: vernashenTPRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
  }, [vernashenTPRes]);

  useEffect(() => {
    const needStore = {
      tnv: vernashenRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
  }, [vernashenRes]);

  useEffect(() => {
    const needStore = {
      tnv: getapRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
  }, [getapRes]);

  useEffect(() => {
    const needStore = {
      tnv: vernashenspRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
  }, [vernashenspRes]);

  useEffect(() => {
    const needStore = {
      tnv: vernashenchRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
  }, [vernashenchRes]);
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayTreeArr = [
    {
      title: "",
      list: [
        { icon: <FaPlaceOfWorship />, name: "Տուրիստական նշանակության վայրեր" },
        { icon: <RiGovernmentLine />, name: "Վարչական շենքեր" },
        { icon: <FaSellcast />, name: "Վաճառքի ենթակա գույք և շինություն" },
      ],
    },
  ];
  const handleListItemClick = (event, index, city) => {
    const needStore = {
      tnv: gladzorRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
    switch (index) {
      case "Տուրիստական նշանակության վայրեր":
        if (city === "Գետափ") {
          alert("Դեռևս հասանելի չէ");
          break;
        }
        if (city === "Վերնաշեն") {
          getTouristPlaceVernashen();
          break;
        }
        break;
      case "Վարչական շենքեր":
        if (city === "Գետափ") {
          alert("Դեռևս հասանելի չէ");
          break;
        }
        if (city === "Վերնաշեն") {
          fetchVernashenCHU();
          break;
        }
        break;
      case "Վաճառքի ենթակա գույք և շինություն":
        if (city === "Գետափ") {
          alert("Դեռևս հասանելի չէ");
          break;
        }
        if (city === "Վերնաշեն") {
          fetchVernashenSP();
          break;
        }
        break;
      default:
    }
    setSelectedIndex(index);
  };
  const getDeatilData = (someparam) => {
    // console.log("CALLLLED");
    // switch (someparam) {
    //   case "Վերնաշեն":
    //     fetchVernashen();
    //     break;
    //   case "Գետափ":
    //     fetchGetap();
    //     break;
    //   default:
    // }
  };
  const oneMoreForTest = (
    <>
      <Accordian
        heading="Վերնաշեն"
        content={
          <>
            <Container style={{ backgroundColor: "white", color: "black" }}>
              {displayTreeArr.map((item, i) => (
                <List
                  key={"v" + i}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      className="leftnav-title"
                      key={i}
                    >
                      {item.title}
                    </ListSubheader>
                  }
                  className={`${classes.root}`}
                >
                  {item.list.map((l, index) => (
                    <ListItem
                      className="leftnav-item"
                      button
                      selected={selectedIndex === l.name}
                      key={index}
                      onClick={(event) =>
                        handleListItemClick(event, l.name, "Վերնաշեն")
                      }
                    >
                      <ListItemIcon
                        className={
                          selectedIndex === l.name
                            ? "icon-active"
                            : "icon-normal"
                        }
                      >
                        {l.icon && l.icon}
                        {l.displayIcon}
                      </ListItemIcon>
                      <ListItemText
                        className={
                          selectedIndex === l.name
                            ? "leftnav-item-text-active"
                            : "leftnav-item-text"
                        }
                        primary={l.name}
                      />
                    </ListItem>
                  ))}
                </List>
              ))}
            </Container>
          </>
        }
        id="city"
        getDeatilData={() => getDeatilData("Վերնաշեն")}
      />
      <Accordian
        heading="Գետափ"
        content={
          <>
            <Container style={{ backgroundColor: "white", color: "black" }}>
              {displayTreeArr.map((item, i) => (
                <List
                  key={"g" + i}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id={"nested-list-subheader" + i}
                      className="leftnav-title"
                      key={"ng" + i}
                    >
                      {item.title}
                    </ListSubheader>
                  }
                  className={`${classes.root}`}
                >
                  {item.list.map((l, index) => (
                    <ListItem
                      className="leftnav-item"
                      button
                      selected={selectedIndex === l.name}
                      key={"ng" + i}
                      onClick={(event) =>
                        handleListItemClick(event, l.name, "Գետափ")
                      }
                    >
                      <ListItemIcon
                        className={
                          selectedIndex === l.name
                            ? "icon-active"
                            : "icon-normal"
                        }
                      >
                        {l.icon && l.icon}
                        {l.displayIcon}
                      </ListItemIcon>
                      <ListItemText
                        className={
                          selectedIndex === l.name
                            ? "leftnav-item-text-active"
                            : "leftnav-item-text"
                        }
                        primary={l.name}
                      />
                    </ListItem>
                  ))}
                </List>
              ))}
            </Container>
          </>
        }
        id="sugCity"
        getDeatilData={() => getDeatilData("Գետափ")}
      />
    </>
  );
  const nestedOne = (
    <Accordian
      heading="Գլաձոր"
      content={oneMoreForTest}
      id="gladzorCity"
      getDeatilData={() => getDeatilData("Գլաձոր")}
    />
  );

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
     
      <Accordian
        heading="Ընտրել Համայնքը"
        content={nestedOne}
        id="chooseCity"
        getDeatilData={()=>{}}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={() => {
        }}
        content={
          <div
            className="container overflow-auto"
          >
            <div className="pt-2 " style={{ display: "flex" }}>
              <span style={{ marginLeft: "auto", cursor: "pointer" }}>
                <CloseIcon
                  onClick={() => {
                  }}
                />
              </span>
            </div>
            {/* <div className="row">
              
              <div className="col-12">
                <button
                  onClick={() => {
                    setPopOpen(false);
                    setAnchorEl(null);
                  }}
                >
                  close
                </button>
              </div>
            </div> */}
            {marks &&
              marks.tnv &&
              marks.tnv.map((item) => (
                <p
                  className="pStyle"
                  onClick={() => {
                    let la = [];
                    la.push(item);
                    const tempVar = {
                      tnv: la,
                      zoom: 11,
                    }
                    getSelectedMarks(tempVar);
                  }}
                >
                  <VscDebugBreakpointLogUnverified className="mr-1" />
                  {item.name ||
                    item.street + " " + item.house + "տ․ " + (item.blind || "")}
                </p>
              ))}
          </div>
        }
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      />
    </div>
  );
}
const mapStateToProps = (stateLocal) => {
  return {
    marks: stateLocal?.marks,
    gladzorRes: stateLocal.gladzorRes.body,
    vernashenTPRes: stateLocal.vernashenTPRes.body,
    getapRes: stateLocal.getapRes.body,
    vernashenRes: stateLocal.vernashenRes.body,
    vernashenspRes: stateLocal.vernashenSPRes.body,
    vernashenchRes: stateLocal.vernashenCHURes.body,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedMarks: (params) => dispatch(getSelectedMarks(params)),
    fetchGladzor: () => dispatch(fetchGladzor()),
    getTouristPlaceVernashen: () => dispatch(getTouristPlaceVernashen()),
    fetchGetap: () => dispatch(fetchGetap()),
    fetchVernashen: () => dispatch(fetchVernashen()),
    fetchVernashenCHU: () => dispatch(fetchVernashenCHU()),
    fetchVernashenSP: () => dispatch(fetchVernashenSP()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

NavBar.propTypes = {
  getSelectedMarks: PropTypes.func,
  fetchGladzor: PropTypes.func,
  gladzorRes: PropTypes.array,
  getTouristPlaceVernashen: PropTypes.func,
  vernashenTPRes: PropTypes.array,
  marks: PropTypes.array,
  fetchGetap: PropTypes.func,
  getapRes: PropTypes.array,
  fetchVernashen: PropTypes.func,
  vernashenRes: PropTypes.array,
  fetchVernashenCHU: PropTypes.func,
  fetchVernashenSP: PropTypes.func,
  vernashenspRes: PropTypes.array,
  vernashenchRes: PropTypes.array,
};
