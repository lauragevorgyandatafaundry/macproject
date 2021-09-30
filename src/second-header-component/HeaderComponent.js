/* eslint-disable */
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { ToastContainer } from "react-toastify";
import FlagIcon from "./FlagIcon.js";
import TemporaryDrawe from "../header-container/TemporaryDrawer";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderComponent.scss";
import SideDrawer from "../common-components/drawer/SideDrawer";
import Select from "react-select";
import { toast } from "react-toastify";
import SingleSelects from "../common-components/singleSelectDropdown/SingleSelect";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchGetap,
  fetchGladzor,
  fetchVernashen,
  getSelectedMarks,
  fetchVernashenCHU,
  fetchVernashenSP,
  fetchGladzorHotel,
  fetchBuildings,
} from "../redux/actions/commonActions";
import { MdDone } from "react-icons/md";
import _ from "lodash";
import Button from "../common-components/button/ReuseableButton";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    maxWidth: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  grow: {
    flexGrow: 1,
  },
}));
function HeaderComponent(props) {
  const {
    fetchGladzor,
    gladzorRes,
    getSelectedMarks,
    getapRes,
    vernashenRes,
    fetchGetap,
    fetchVernashen,
    fetchVernashenCHU,
    vernashenCHURes,
    fetchVernashenSP,
    vernashenSPRes,
    fetchGladzorHotel,
    gladzorHotelRes,
    fetchBuildings,
    buildings,
  } = props;
  const { i18n, t } = useTranslation();
  const [localeLang, setLocalLang] = React.useState("am"); // this we will read from localstorage or from a service
  const [otherOption, setOtherOption] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [otherValue, setOtherValue] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [searched, setSearched] = React.useState([]);
  const [reasonCompleted, setReasonCompleted] = React.useState(false);
  const classes = useStyles();
  const [countries] = useState([
    { code: "am", title: "Հայերեն" },
    { code: "gb", title: "English" },
    { code: "ru", title: "Russian" },
  ]);
  const forSale = [t("sold"), t("sale"), t("interesting")];
  const touristPlaces = [t("monuments_culural_places"), t("hotels_bb")];
  const [toggleContents, setToggleContents] = useState();
  const errorToast = () => toast.error(t("select_reason"),{ type: toast.TYPE.WARNING, autoClose: 5000 });

  useEffect(() => {
    setToggleContents(
      <>
        <FlagIcon code={"am"} /> Հայերեն
      </>
    );
  }, []);
  useEffect(() => {
    if (window.localStorage.getItem("lang")) {
      setLocalLang(window.localStorage.getItem("lang"));
      const { code, title } = countries.find(
        ({ code }) => window.localStorage.getItem("lang") === code
      );
      setToggleContents(
        <>
          <FlagIcon code={code} /> {title}
        </>
      );
    }
  }, [window.localStorage]);
  useEffect(() => {
    i18n.changeLanguage(localeLang);
  }, [i18n, localeLang]);

  useEffect(() => {
    fetchVernashenSP();
  }, []);
  const [village, setVillage] = useState("");
  const bodyData = (
    <div className="container">
      <div>
        <p>
          <AiOutlineMail />
          <span className="ml-1">gladzor.gladzor@mail.ru</span>
        </p>
        <p>
          <AiOutlineMobile /> (0281) 23446
        </p>
        <p>
          <GoLocation /> {t("address_gladzor")}
        </p>
      </div>
    </div>
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 750;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  const closeDrawer = () => {
    // setVillage("");
    // setStreet("");
    // setHouse("");
    // setCity("");
    setOtherOption("");
    setOtherValue("");
    // setShowHouses(false);
    // setShowOther(false);
    setOpen(false);
  };
  useEffect(() => {
    fetchGladzor();
  }, []);
  const [localSearch, setLocalSearch] = React.useState([]);
  useEffect(() => {
    const needStore = {
      tnv: gladzorRes,
      zoom: 15,
    };
    getSelectedMarks(needStore);
    gladzorRes &&
      setLocalSearch(
        gladzorRes.map((item) => ({
          label: item?.street + " " + item?.house + " " + t("house"),
          value: {
            ...item,
          },
        }))
      );
  }, [gladzorRes]);
  useEffect(() => {
    const needStore = {
      tnv: vernashenCHURes,
      zoom: 11,
    };
    vernashenCHURes && getSelectedMarks(needStore);
  }, [vernashenCHURes]);

  useEffect(() => {
    const needStore = {
      tnv: gladzorHotelRes,
      zoom: 11,
    };
    gladzorHotelRes && getSelectedMarks(needStore);
  }, [gladzorHotelRes]);

  useEffect(() => {
    const needStore = {
      tnv: buildings,
      zoom: 11,
    };
    buildings && getSelectedMarks(needStore);
  }, [buildings]);

  useEffect(() => {
    const needStore = {
      tnv: vernashenRes,
      zoom: 15,
    };
    vernashenRes &&
      setLocalSearch(
        vernashenRes.map((item) => ({
          label: item?.street + " " + item?.house + " " + t("house"),
          value: {
            ...item,
          },
        }))
      );
    getSelectedMarks(needStore);
  }, [vernashenRes]);
  useEffect(() => {
    const needStore = {
      tnv: getapRes,
      zoom: 15,
    };
    getapRes &&
      setLocalSearch(
        getapRes.map((item) => ({
          label: item?.street + " " + item?.house + " " + t("house"),
          value: {
            ...item,
          },
        }))
      );
    getSelectedMarks(needStore);
  }, [getapRes]);
  useEffect(() => {
    if (village) {
      if (village?.value === "Գլաձոր" || village?.value === "Gladzor") {
        fetchGladzor();
      }
      if (village?.value === "Գետափ" || village?.value === "Getap") {
        fetchGetap();
      } else {
        fetchVernashen();
      }
    }
  }, [village]);
  const fetchTouristPlaces = (value) => {
    if (
      value === "Հուշարձաններ և մշակութային կոթողներ" ||
      value === "Monuments and cultural places"
    ) {
      fetchVernashenCHU();
    } else {
      fetchGladzorHotel();
    }
    closeDrawer();
  };
  const getFilteredData = (value) => {
    if (vernashenSPRes) {
      if (value === "Վաճառվել է" || value === "Sold") {
        let tempArray = vernashenSPRes.map(
          (item) => item.meaning === "վաճառված է" && item
        );
        const needStore = {
          tnv: tempArray,
          zoom: 11,
        };
        getSelectedMarks(needStore);
      } else if (value === "Վաճառվում է" || value === "Sale") {
        let tempArray = vernashenSPRes.map(
          (item) => item.meaning === "վաճառվում է" && item
        );
        const needStore = {
          tnv: tempArray,
          zoom: 11,
        };
        getSelectedMarks(needStore);
      } else {
        let tempArray = vernashenSPRes.map(
          (item) => item.meaning === "ինձ հետաքրքրում է" && item
        );
        const needStore = {
          tnv: tempArray,
          zoom: 11,
        };
        getSelectedMarks(needStore);
      }
    }
    closeDrawer();
  };
  const contentValues = (
    <div className="container">
      <div
        className="row col-12 d-flex justify-content-between mb-2"
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="col-1 ml-3">
          <Dropdown
            onSelect={(eventKey) => {
              const { code, title } = countries.find(
                ({ code }) => eventKey === code
              );
              i18n.changeLanguage(code);
              window.localStorage.setItem("lang", code);
              setToggleContents(
                <>
                  <FlagIcon code={code} /> {title}
                </>
              );
              refreshPage();
            }}
          >
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-flags"
              className="text-left"
            >
              {toggleContents}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {countries.map(({ code, title }) => (
                <Dropdown.Item key={code} eventKey={code}>
                  <FlagIcon code={code} /> {title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-5 d-flex justify-content-end">
          <button
            onClick={() => {
              setModalShow(true);
              setOpen(false);
            }}
            className="btn btn-primary fixedHeight smallText"
          >
            {t("contact_us")}
          </button>
        </div>
      </div>
      <div>
        {/* {!otherOption && (
          <div
            className="row mt-2"
            style={{
              margin: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "103%",
            }}
          >
            <label
              className="control-label label-style col-12 mb-2"
              htmlFor="buttons"
              style={{
                fontSize: "20px",
                margin: "1px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Որոնման նպատակը
            </label>
            <Button
              text="Ոստիկանություն"
              colorVarient="filter"
              handleChange={moveToSearch}
            />
            <Button
              text="Շտապ Օգնություն"
              colorVarient="filter"
              handleChange={moveToSearch}
            />
            <Button
              text="Փրկարար Ծառայություն"
              colorVarient="filter"
              handleChange={moveToSearch}
            />
            <Button
              text="Տաքսի Ծառայություն"
              colorVarient="filter"
              handleChange={moveToSearch}
            />
            <Button
              text="Այլ"
              colorVarient="filter"
              handleChange={() => {
                setShowOther(true);
              }}
            />
            {showOther && (
              <div className="forForm" style={{ marginRight: "7px" }}>
                <input
                  id="other"
                  type="text"
                  name="other"
                  value={otherValue || ""}
                  placeholder={"Ներմուծել նպատակը *"}
                  onChange={(e) => setOtherValue(e.target?.value)}
                  className="form-control input-box mt-2"
                  style={{
                    width: "100%",
                    marginLeft: "2px",
                    marginLeft: "2px",
                  }}
                />
                <Button
                  text="Հաստատել"
                  colorVarient="request"
                  disabled={!otherValue}
                  handleChange={() => {
                    if (otherValue) {
                      setOtherOption(otherValue);
                      setShowOther(false);
                    }
                  }}
                />
              </div>
            )}
          </div>
        )}
        {otherOption && !showHouses && ( */}
        <div
          className="row mt-2 houseStyle"
          style={{
            margin: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "102%",
          }}
        >
          <div className="mt-2">
            <Button
              text={t("administrative_buildings")}
              colorVarient="filter"
              handleChange={() => {
                fetchBuildings();
                closeDrawer();
              }}
            />
          </div>
          <div className="mt-2">
            <SingleSelects
              defaultValue=""
              placeholderValue={t("lands_for_sale")}
              dropdownOptions={forSale || []}
              dropdownHandleChange={(e) => {
                getFilteredData(e.target.value);
              }}
              selectedValue={""}
            />
          </div>
          <div className="mt-3">
            <SingleSelects
              defaultValue=""
              placeholderValue={t("tourist_places")}
              dropdownOptions={touristPlaces || []}
              dropdownHandleChange={(e) => {
                fetchTouristPlaces(e.target.value);
              }}
              selectedValue={""}
            />
          </div>
        </div>
        {/* )}
        {showHouses && (
          <div
            className="row mt-2"
            style={{
              margin: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <label
                className="control-label label-style col-12 mb-2"
                htmlFor="selectCity"
              >
                Քաղաք
              </label>
              <Select
                options={cities}
                onChange={(e) => {
                  setCity(e?.label);
                }}
                defaultValue={{ value: "Գետափ", label: "Գետափ" }}
                // onInputChange={(e) => {console.log(e); setCity(e?.label)}}
              />
            </div>
            {city && (
              <div className="mt-2">
                <label
                  className="control-label label-style col-12 mb-2"
                  htmlFor="selectCity"
                >
                  Գյուղ
                </label>
                <Select
                  options={villages}
                  defaultValue={{ value: "Գետառ գյուղ", label: "Գետառ" }}
                  onChange={(e) => setVillage(e?.label)}
                />
              </div>
            )}
            {village && (
              <div className="mt-2">
                <label
                  className="control-label label-style col-12 mb-2"
                  htmlFor="selectCity"
                >
                  Փողոց
                </label>
                <Select
                  options={streets}
                  defaultValue={{ value: "1 փողոց", label: "1 փողոց" }}
                  onChange={(e) => setStreet(e?.label)}
                />
              </div>
            )}
            {street && (
              <div className="mt-2">
                <label
                  className="control-label label-style col-12 mb-2"
                  htmlFor="selectCity"
                >
                  Տուն
                </label>
                <Select
                  options={houses}
                  defaultValue={{ value: "1 տուն", label: "1 տուն" }}
                  onChange={(e) => setHouse(e?.label)}
                />
              </div>
            )}
            <div className="mt-2">
              <Button
                text="Որոնել"
                colorVarient="request"
                handleChange={() => {
                  closeDrawer();
                }}
              />
            </div>
          </div>
        )} */}
      </div>
      {/* <NavBar /> */}
    </div>
  );
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="row mt-4 d-flex justify-content-between shadow">
      <div className={`${isMobile ? "col-12 mt-2" : "col-6 mt-2"}`}>
        <div className="row">
          <div className="col-12">
            {isMobile && (
              <div className="col-12 d-flex justify-content-end">
                <button
                  onClick={() => setOpen(true)}
                  style={{ height: "100%", marginTop: "1rem" }}
                  className="btn btn-primary"
                >
                  {t("search")}
                </button>
              </div>
            )}
            <Paper
              component="form"
              className={classes.root}
              style={{ backgroundColor: "#e6e6e6" }}
            >
              <div
                onClick={() => {
                  !reasonCompleted &&
                    errorToast("kmkm");
                }}
              >
                <Select
                  defaultValue={""}
                  placeholder={t("search")}
                  isDisabled={reason.label === "" || !reasonCompleted}
                  options={localSearch || []}
                  onChange={(e) => {
                    setSearched(e);
                    const needStore = {
                      tnv: [e.value],
                      zoom: 20,
                    };
                    getSelectedMarks(needStore);
                  }}
                  onInputChange
                  value={searched}
                />
              </div>
              <IconButton
                type="submit"
                className={(classes.iconButton, "hideInfo")}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <Select
                defaultValue=""
                placeholder={t("reason_of_search")}
                options={[
                  { value: t("ambulance"), label: t("ambulance") },
                  {
                    value: t("emergency_service"),
                    label: t("emergency_service"),
                  },
                  { value: t("police"), label: t("police") },
                  { value: t("taxi_service"), label: t("taxi_service") },
                  { value: t("others"), label: t("others") },
                ]}
                onChange={(e) => {
                  setReasonCompleted(false);
                  setOtherValue("");
                  e.value !== "Այլ" &&
                    e.value !== "Others" &&
                    setReasonCompleted(true);
                  setReason(e);
                }}
                value={reason || ""}
              />
              {reason?.label && reasonCompleted === true && (
                <Select
                  defaultValue={{ value: t("gladzor"), label: t("gladzor") }}
                  placeholder={t("choose_village")}
                  options={[
                    { value: t("gladzor"), label: t("gladzor") },
                    { value: t("getap"), label: t("getap") },
                    { value: t("vernashen"), label: t("vernashen") },
                  ]}
                  onChange={(e) => {
                    setVillage(e);
                  }}
                  value={village || ""}
                />
              )}
              {(reason?.value === "Այլ" || reason?.value === "Others") &&
                reasonCompleted === false && (
                  <div className="col-12">
                    <div className="row">
                      <div className="col-4" style={{ whiteSpace: "nowrap" }}>
                        <input
                          style={{
                            height: "38px",
                            marginLeft: "3px",
                            marginTop: "2px",
                            background: "hsl(0, 0%, 95%)",
                            border: "0",
                            minWidth: "177px",
                          }}
                          placeholder={t("other")}
                          id="case_number"
                          type="text"
                          name="case_number"
                          value={otherValue || ""}
                          onChange={(e) => {
                            setOtherValue(e.target.value);
                          }}
                          className="input-box textStyle changeSize"
                        />
                        <button
                          style={{
                            maxWidth: "43px",
                            maxHeight: "35px",
                            marginLeft: "5px",
                            marginTop: "-2px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            if (otherValue?.length > 0) {
                              setReasonCompleted(true);
                            } else {
                              alert("Լրացրեք փնտրման նպատակը");
                            }
                          }}
                          className="btn btn-primary"
                        >
                          <MdDone style={{ marginTop: "-7px" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
            </Paper>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobile ? "col-4 mt-2" : "col-6 mt-2"
        } d-flex justify-content-end mt-2`}
      >
        <div>
          <Form className="hideInfo fixedHeight">
            <Dropdown
              onSelect={(eventKey) => {
                const { code, title } = countries.find(
                  ({ code }) => eventKey === code
                );
                i18n.changeLanguage(code);
                window.localStorage.setItem("lang", code);
                setToggleContents(
                  <>
                    <FlagIcon code={code} /> {title}
                  </>
                );
                window.location.reload(false);
              }}
            >
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-flags"
                className="text-left"
              >
                {toggleContents}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {countries.map(({ code, title }) => (
                  <Dropdown.Item key={code} eventKey={code}>
                    <FlagIcon code={code} /> {title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </div>
        <div>
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => setModalShow(true)}
            className="btn btn-primary hideInfo fixedHeight smallText"
          >
            {t("contact_us")}
          </button>
        </div>
        <div className="hideInfo">
          <button
            onClick={() => setOpen(true)}
            style={{ height: "100%", marginLeft: "1rem" }}
            className="btn btn-primary smallText"
          >
            {t("buildings_structures_areas")}
          </button>
        </div>
      </div>
      <TemporaryDrawe
        show={modalShow}
        bodyData={bodyData}
        bodyHeader={t("contact_with_us")}
        onHide={() => setModalShow(false)}
      />
      {open && (
        <SideDrawer
          drwawerHeader=""
          content={contentValues}
          open={open}
          handleDrawerClose={closeDrawer}
        />
      )}
      <ToastContainer draggablePercent={60} />
    </div>
  );
}
const mapStateToProps = (stateLocal) => {
  return {
    gladzorRes: stateLocal.gladzorRes.body,
    vernashenRes: stateLocal.vernashenRes.body,
    getapRes: stateLocal.getapRes.body,
    vernashenCHURes: stateLocal.vernashenCHURes.body,
    vernashenSPRes: stateLocal.vernashenSPRes.body,
    gladzorHotelRes: stateLocal.gladzorHotelRes.body,
    buildings: stateLocal.gladzorBuildings.body,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGladzor: () => dispatch(fetchGladzor()),
    getSelectedMarks: (params) => dispatch(getSelectedMarks(params)),
    fetchGetap: () => dispatch(fetchGetap()),
    fetchVernashen: () => dispatch(fetchVernashen()),
    fetchVernashenCHU: () => dispatch(fetchVernashenCHU()),
    fetchVernashenSP: () => dispatch(fetchVernashenSP()),
    fetchGladzorHotel: () => dispatch(fetchGladzorHotel()),
    fetchBuildings: () => dispatch(fetchBuildings()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

HeaderComponent.propTypes = {
  fetchGladzor: PropTypes.func,
  gladzorRes: PropTypes.array,
  getSelectedMarks: PropTypes.func,
  fetchGetap: PropTypes.func,
  vernashenRes: PropTypes.array,
  fetchVernashen: PropTypes.func,
  getapRes: PropTypes.array,
  vernashenCHURes: PropTypes.array,
  fetchVernashenSP: PropTypes.func,
  vernashenSPRes: PropTypes.array,
  gladzorHotelRes: PropTypes.array,
  fetchGladzorHotel: PropTypes.func,
  fetchBuildings: PropTypes.func,
  buildings: PropTypes.array,
};
