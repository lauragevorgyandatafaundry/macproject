import React, { Component } from "react";

// examples:
import GoogleMap from "../common-components/google-map/GoogleMap";
import Marker from "./Marker";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
    position: { lat: "44.50349", lng: "40.1772" },
    map,
    title: "",
    InfoWindow: { content: "" },
  });
  return marker;
};

class MarkerInfoWindowGmapsObj extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      marks: props.marks,
    };
  }
  componentDidMount() {
    fetch("places.json")
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((result) => {
          result.show = false; // eslint-disable-line no-param-reassign
        });
        this.setState({ places: data.results });
      });
  }
  render() {
    const places = [];
    const lngLat = this.props.marks?.tnv?.length > 0 && [
      parseFloat(this.props.marks.tnv[0].latitude),
      parseFloat(this.props.marks.tnv[0].longitude),
    ];
    return (
      <>
        {places && (
          <GoogleMap
            defaultZoom={11}
            zoom={this.props.marks.zoom ? this.props.marks.zoom : 10}
            defaultCenter={[39.77478100000002, 45.33485499999999]}
            center={lngLat || [39.77478100000002, 45.33485499999999]}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {
              renderMarkers(map, maps);
            }}
          >
            {this.props.marks.tnv &&
              this.props.marks.tnv.length > 0 &&
              this.props.marks.tnv.map((item) => (
                <Marker
                  key={item.id}
                  lat={item.latitude}
                  lng={item.longitude}
                  show={true}
                  text={
                    (item.name ? (item.name + (item.area && item.meaning ? (" " + item?.area + " " + item?.meaning) : "")) : false) ||
                    item.street + " " + item.house + "տ․ " + (item.blind || "")
                  }
                />
              ))}
          </GoogleMap>
        )}
      </>
    );
  }
}

const mapStateToProps = (stateLocal) => {
  return {
    marks: stateLocal?.marks,
  };
};

export default connect(mapStateToProps, null)(MarkerInfoWindowGmapsObj);

MarkerInfoWindowGmapsObj.propTypes = {
  marks: PropTypes.array,
  selectedZoom: PropTypes.number,
};
