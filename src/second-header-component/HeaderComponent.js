import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import FlagIcon from "./FlagIcon.js";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F2F2F2",
    "&:hover": {
      backgroundColor: "#F2F2F2",
    },
    marginRight: theme.spacing(2),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "-0.1rem",
      marginTop: "0.6rem",
      width: "50%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

function HeaderComponent() {
  const classes = useStyles();
  const getSearchedData = (e) => {
    console.log(e.target.value);
  };
  const [countries] = useState([
    { code: "am", title: "Հայերեն" },
    { code: "gb", title: "English" },
    { code: "ru", title: "Russian" },
  ]);
  const [toggleContents, setToggleContents] = useState("Language");
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div className="row lead-search-button">
      <div className="col-6">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <AiOutlineSearch />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => getSearchedData(e)}
          />
        </div>
      </div>
      <div className="col-6 d-flex justify-content-end">
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
          <Form style={{marginRight: "5px"}}>
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
                style={{ width: 300 }}
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
          <Button variant="contained" color="primary">
            Կապ մեզ հետ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
