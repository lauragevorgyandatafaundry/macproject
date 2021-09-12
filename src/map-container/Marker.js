import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import Popover from "../common-components/popover/Popover";
import "./Marker.scss";
import Tooltip from '@material-ui/core/Tooltip';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;

function Marker({ text, onClick }) {
  return (
    <>
        <Tooltip title={text} interactive placement="top-start">
    <Wrapper
      alt={"tetctt"}
    >
      <HiLocationMarker size={22} style={{ color: "red" }} />
    </Wrapper>
    </Tooltip>
    </>
  );
}

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
