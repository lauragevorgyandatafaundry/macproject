import React from "react";
import MacHeader from "../header-container/MacHeader";
import NavBar from "../left-navbar-container/NavBar";
import HeaderComponent from "../second-header-component/HeaderComponent";
import GoogleMapReact from "google-map-react";

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
        <div className="col-8">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDREhJba-UcpmaqoVxP6Gj3LPmSAiQ-nxM",
            }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33
            }}
            defaultZoom={11}
          >
            <div lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default MacContainer;
