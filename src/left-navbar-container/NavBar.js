import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import ListSubheader from "@material-ui/core/ListSubheader";
import { FaPlaceOfWorship, FaSellcast } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

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
  const handleListItemClick = (event, index) => {
      console.log(index);
    setSelectedIndex(index);
  };
  return (
    <Container style={{ backgroundColor: "white", color: "black" }}>
      {displayTreeArr.map((item, i) => (
        <List
          key={i}
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
              onClick={(event) => handleListItemClick(event, l.name)}
            >
              <ListItemIcon
                className={
                  selectedIndex === l.name ? "icon-active" : "icon-normal"
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
  );
}
export default NavBar;
