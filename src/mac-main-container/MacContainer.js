import React from "react";
import MacHeader from "../header-container/MacHeader";
import NavBar from "../left-navbar-container/NavBar";
import HeaderComponent from "../second-header-component/HeaderComponent";
import GoogleMapReact from "google-map-react";
import AnyReactComponent from "google-map-react";

function MacContainer(props) {
  return (
    <div className="mt-3">
      <div className="row mt-3">
        <div className="col-12">
          <MacHeader />
        </div>
      </div>
      <div className="col-12">
        <HeaderComponent />
      </div>
      <div className="row mt-3" style={{minHeight: "500px"}}>
        <div className="col-4">
          <NavBar />
        </div>
        <div className="col-8" style={{height:"800px"}}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCQvjmAfQvgn8pDWfzLAsR101UdTXFoTBs",
            }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33
            }}
            defaultZoom={11}
          >

          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default MacContainer;
