import React, { useState, useEffect } from "react";
// import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import FlagIcon from "./FlagIcon.js";
import TemporaryDrawe from "../header-container/TemporaryDrawer";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import SingleSelects from "../common-components/singleSelectDropdown/SingleSelect";
import "./HeaderComponent.scss";
import { HiOutlineMenu } from "react-icons/hi";
import SideDrawer from "../common-components/drawer/SideDrawer";
import Select from "react-select";
import Button from "../common-components/button/ReuseableButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 500,
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

function HeaderComponent() {
  const [modalShow, setModalShow] = React.useState(false);
  const [checked, setChecked] = React.useState("");
  const [inputedData, setInputedData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [showOther, setShowOther] = React.useState(false);
  const [otherOption, setOtherOption] = React.useState("");
  const [otherValue, setOtherValue] = React.useState("");
  const [city, setCity] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [showHouses, setShowHouses] = React.useState(false);

  const classes = useStyles();
  const getSearchedData = (e) => {
    console.log(e.target.value);
  };
  const forSale = ["Վաճառվել է", "Վաճառվում է", "Ինձ հետաքրքրում է"];
  const touristPlaces = [
    "Հուշարձաններ և մշակութային կոթողներ",
    "Հյուրանոցներ և B&B-ներ",
  ];
  const cities = [
    { value: "Գետափ", label: "Գետափ" },
    { value: "Վերնաշեն", label: "Վերնաշեն" },
  ];
  const villages = [
    { value: "Գետառ", label: "Գետառ" },
    { value: "ուրիշ գյուղ", label: "ուրիշ գյուղ" },
  ];
  const streets = [
    { value: "1 փողոց", label: "1 փողոց" },
    { value: "2 փողոց", label: "2 փողոց" },
  ];
  const houses = [
    { value: "1 տուն", label: "1 տուն" },
    { value: "2 տուն", label: "2 տուն" },
  ];
  const [countries] = useState([
    { code: "am", title: "Հայերեն" },
    { code: "gb", title: "English" },
    { code: "ru", title: "Russian" },
  ]);
  const [toggleContents, setToggleContents] = useState("Language");
  const [selectedCountry, setSelectedCountry] = useState();
  const [village, setVillage] = useState("");
  const [house, setHouse] = useState("");
  const bodyData = (
    <div className="container">
      <div>
        <p>
          <AiOutlineMail />{" "}
          <span className="ml-1">gladzor.gladzor@mail.ru</span>
        </p>
        <p>
          <AiOutlineMobile /> (0281) 23446
        </p>
        <p>
          <GoLocation /> ՀՀ Վայոց Ձորի մարզ, Գլաձոր, փող. 33 շենք 41
        </p>
      </div>
    </div>
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  const closeDrawer = () => {
    setVillage("");
    setStreet("");
    setHouse("");
    setCity("");
    setOtherOption("");
    setOtherValue("");
    setShowHouses(false);
    setShowOther(false);
    setOpen(false);
  };
  const moveToSearch = (val) => {
    setOtherOption(val);
  };
  const contentValues = (
    <div className="container">
      {!otherOption && (
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
                className="form-control input-box mt-3"
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
      {otherOption && !showHouses && (
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
              text="Վարչական շենքեր"
              colorVarient="filter"
              handleChange={() => {
                alert("Բացումա քարտեզը բոլոր կետերով");
              }}
            />
          </div>
          <div className="mt-2">
            <SingleSelects
              defaultValue=""
              placeholderValue="Վաճառվող Հողակտորներ"
              dropdownOptions={forSale || []}
              dropdownHandleChange={() => {
                alert("Բացումա քարտեզը բոլոր կետերով");
              }}
              selectedValue={""}
            />
          </div>
          <div className="mt-3">
            <SingleSelects
              defaultValue=""
              placeholderValue="Տուրիստական նշանակության վայրեր"
              dropdownOptions={touristPlaces || []}
              dropdownHandleChange={() => {
                alert("Բացումա քարտեզը բոլոր կետերով");
              }}
              selectedValue={""}
            />
          </div>
          <div className="mt-2">
            <Button
              text="Վարչական շենքեր"
              colorVarient="filter"
              handleChange={() => {
                alert("Բացումա քարտեզը բոլոր կետերով");
              }}
            />
          </div>
          <div className="mt-2">
            <Button
              text="Փնտրել բնակարաններ"
              colorVarient="filter"
              handleChange={() => {
                setShowHouses(true);
              }}
            />
          </div>
        </div>
      )}
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
      )}
    </div>
  );
  return (
    <div className="row mt-4 d-flex justify-content-between">
      <div className={`${isMobile ? "col-8 mt-2" : "col-6 mt-2"}`}>
        <Paper component="form" className={classes.root}>
          <InputBase
            onChange={(e) => {
              if (checked && checked !== "Այլ") {
                setInputedData(e.target.value);
              } else {
                alert("Ընտրեք նպատակը");
                setInputedData("");
              }
            }}
            value={inputedData}
            className={classes.input}
            placeholder="Փնտրել ուղղություն"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert("pntrel");
            }}
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>

          <SingleSelects
            style={{ maxWidth: "300px", width: "300px" }}
            defaultValue="Այլ"
            dropdownOptions={[
              "Շտապ օգնություն",
              "Փրկարար ծառայություն",
              "Ոստիկանություն",
              "Տաքսի ծառայություն",
            ]}
            percent={"percent"}
            dropdownHandleChange={(event) => {
              setChecked(event.target.value);
            }}
            selectedValue={checked || ""}
            label="Փնտրման նպատակը"
          />
        </Paper>
      </div>
      <div className="col-3 mt-4 hideHamburger">
        <button
          onClick={() => setOpen(true)}
          style={{ height: "100%" }}
          className="btn btn-primary smallText"
        >
          Որոնել
        </button>
      </div>
      <div className={`${isMobile ? "col-4 mt-2" : "col-6 mt-2"} d-flex justify-content-end mt-2`}>
        <div>
          {/* <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              style={{ width: "200px", backgroundColor: "#F2F2F2", marginRight: "5px" }}
            >
              <option>Language</option>
              <option value="en">English</option>
              <option value="am">Հայերեն</option>
              <option value="fr">France</option>
            </Form.Select> */}
          <Form className="hideInfo fixedHeight">
            <Dropdown
              onSelect={(eventKey) => {
                const { code, title } = countries.find(
                  ({ code }) => eventKey === code
                );
                setSelectedCountry(eventKey);
                setToggleContents(
                  <>
                    <FlagIcon code={code} /> {title}
                  </>
                );
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
            ԿԱՊ
          </button>
        </div>
        <div className="hideInfo">
          <button
            onClick={() => setOpen(true)}
            style={{ height: "100%", marginLeft: "1rem" }}
            className="btn btn-primary smallText"
          >
            Որոնել
          </button>
        </div>
      </div>
      <div className="col-4 mt-2">
        {checked === "Այլ" && (
          <input
            placeholder="Նպատակը"
            id="case_number"
            type="text"
            name="case_number"
            value={""}
            onChange={(e) => {}}
            className="form-control input-box textStyle"
          />
        )}
      </div>
      <TemporaryDrawe
        show={modalShow}
        bodyData={bodyData}
        bodyHeader="Կապ մեզ հետ"
        onHide={() => setModalShow(false)}
      />
      {open && (
        <SideDrawer
          drwawerHeader="Փնտրել"
          content={contentValues}
          open={open}
          handleDrawerClose={closeDrawer}
        />
      )}
    </div>
  );
}

export default HeaderComponent;
{
  /* <div className="col-12">
        <Checkbox
          checked={checked}
          onChange={() => setChecked("Շտապ օգնություն")}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>Շտապ օգնություն</span>
        <Checkbox
          checked={checked}
          onChange={() => setChecked("Փրկարար ծառայություն")}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>Փրկարար ծառայություն</span>
        <Checkbox
          checked={checked}
          onChange={() => setChecked("Ոստիկանություն")}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>Ոստիկանություն</span>
        <Checkbox
          checked={checked}
          onChange={() => setChecked("Տաքսի ծառայություն")}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>Տաքսի ծառայություն</span>
        <Checkbox
          checked={checked}
          onChange={() => setChecked("Այլ")}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>Այլ</span>
      </div> */
}
