import React from "react";
import MacHeader from "../header-container/MacHeader";
import NavBar from "../left-navbar-container/NavBar";
import HeaderComponent from "../second-header-component/HeaderComponent";
import MarkerInfoWindowGmapsObj from "../map-container/MarkerInfoWindowGmapsObj";

function MacContainer(props) {
  return (
    <div className="mt-3">
      <div className="row mt-3">
        <div className="col-12">
          <MacHeader />
        </div>
      </div>
      <div className="col-12 mt-6">
        <HeaderComponent />
      </div>
      <div className="row mt-3" style={{height: "80vh"}}>
        <div className="col-12">
          <MarkerInfoWindowGmapsObj />
        </div>
      </div>
    </div>
  );
}

export default MacContainer;
