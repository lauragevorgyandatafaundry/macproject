import axios from "axios";
import {
  GET_SELECTED_MARKS_SUCCESS,
  GET_VERNASHEN_REQUEST,
  GET_VERNASHEN_SUCCESS,
  GET_VERNASHEN_FAILURE,
  GET_VERNASHENSP_SUCCESS,
  GET_VERNASHENSP_FAILURE,
  GET_VERNASHENSP_REQUEST,
  GET_VERNASHENTP_REQUEST,
  GET_VERNASHENTP_SUCCESS,
  GET_VERNASHENTP_FAILURE,
  GET_VERNASHENCHU_REQUEST,
  GET_VERNASHENCHU_SUCCESS,
  GET_VERNASHENCHU_FAILURE,
  GET_GETAP_REQUEST,
  GET_GETAP_SUCCESS,
  GET_GETAP_FAILURE,
  GET_GLADZOR_FAILURE,
  GET_GLADZOR_REQUEST,
  GET_GLADZOR_SUCCESS,
  GET_GLADZORHOTEL_FAILURE,
  GET_GLADZORHOTEL_REQUEST,
  GET_GLADZORHOTEL_SUCCESS,
  GET_BUILDINGS_FAILURE,
  GET_BUILDINGS_REQUEST,
  GET_BUILDINGS_SUCCESS,
} from "../types";

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;

export const getSelectedMarksSuccess = (marks) => {
  return {
    type: GET_SELECTED_MARKS_SUCCESS,
    payload: marks,
  };
};

export const getSelectedMarks = (param) => {
  return (dispatch) => {
    dispatch(getSelectedMarksSuccess(param));
  };
};

// fetch gladzor
export const fetchGladzorRequest = () => {
  return {
    type: GET_GLADZOR_REQUEST,
  };
};

export const fetchGladzorSuccess = (stateAll) => {
  return {
    type: GET_GLADZOR_SUCCESS,
    payload: stateAll,
  };
};

export const fetchGladzorFailure = (error) => {
  return {
    type: GET_GLADZOR_FAILURE,
    payload: error,
  };
};
export const fetchGladzor = () => {
  return (dispatch) => {
    dispatch(fetchGladzorRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/gladzor.php")
      .then((response) => {
          const gladzorRes = response?.data;
          dispatch(fetchGladzorSuccess(gladzorRes));
      })
      .catch((error) => {
        dispatch(fetchGladzorFailure(error.message));
      });
  };
};
// fetch vernashen tourist places
export const fetchVernashenTPRequest = () => {
  return {
    type: GET_VERNASHENTP_REQUEST,
  };
};

export const fetchVernashenTPSuccess = (stateAll) => {
  return {
    type: GET_VERNASHENTP_SUCCESS,
    payload: stateAll,
  };
};

export const fetchVernashenTPFailure = (error) => {
  return {
    type: GET_VERNASHENTP_FAILURE,
    payload: error,
  };
};
export const getTouristPlaceVernashen = () => {
  return (dispatch) => {
    dispatch(fetchVernashenTPRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/turistPlaces.php")
      .then((response) => {
          const VernashenTPRes = response?.data;
          dispatch(fetchVernashenTPSuccess(VernashenTPRes));
      })
      .catch((error) => {
        dispatch(fetchVernashenTPFailure(error.message));
      });
  };
};
// fetch Getap
export const fetchGetapRequest = () => {
  return {
    type: GET_GETAP_REQUEST,
  };
};

export const fetchGetapSuccess = (stateAll) => {
  return {
    type: GET_GETAP_SUCCESS,
    payload: stateAll,
  };
};

export const fetchGetapFailure = (error) => {
  return {
    type: GET_GETAP_FAILURE,
    payload: error,
  };
};
export const fetchGetap = () => {
  return (dispatch) => {
    dispatch(fetchGetapRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/getap.php")
      .then((response) => {
          const getapRes = response?.data;
          dispatch(fetchGetapSuccess(getapRes));
      })
      .catch((error) => {
        dispatch(fetchGetapFailure(error.message));
      });
  };
};
// fetch Vernashen
export const fetchVernashenRequest = () => {
  return {
    type: GET_VERNASHEN_REQUEST,
  };
};

export const fetchVernashenSuccess = (stateAll) => {
  return {
    type: GET_VERNASHEN_SUCCESS,
    payload: stateAll,
  };
};

export const fetchVernashenFailure = (error) => {
  return {
    type: GET_VERNASHEN_FAILURE,
    payload: error,
  };
};
export const fetchVernashen = () => {
  return (dispatch) => {
    dispatch(fetchVernashenRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/vernashen.php")
      .then((response) => {
          const getapRes = response?.data;
          dispatch(fetchVernashenSuccess(getapRes));
      })
      .catch((error) => {
        dispatch(fetchVernashenFailure(error.message));
      });
  };
};
// fetch Vernashen SP
export const fetchVernashenSPRequest = () => {
  return {
    type: GET_VERNASHENSP_REQUEST,
  };
};

export const fetchVernashenSPSuccess = (stateAll) => {
  return {
    type: GET_VERNASHENSP_SUCCESS,
    payload: stateAll,
  };
};

export const fetchVernashenSPFailure = (error) => {
  return {
    type: GET_VERNASHENSP_FAILURE,
    payload: error,
  };
};
export const fetchVernashenSP = () => {
  return (dispatch) => {
    dispatch(fetchVernashenSPRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/vernashenSelllsProperties.php")
      .then((response) => {
          const getapRes = response?.data;
          dispatch(fetchVernashenSPSuccess(getapRes));
      })
      .catch((error) => {
        dispatch(fetchVernashenSPFailure(error.message));
      });
  };
};
// fetch Vernashen Churches
export const fetchVernashenCHURequest = () => {
  return {
    type: GET_VERNASHENCHU_REQUEST,
  };
};

export const fetchVernashenCHUSuccess = (stateAll) => {
  return {
    type: GET_VERNASHENCHU_SUCCESS,
    payload: stateAll,
  };
};

export const fetchVernashenCHUFailure = (error) => {
  return {
    type: GET_VERNASHENCHU_FAILURE,
    payload: error,
  };
};
export const fetchVernashenCHU = () => {
  return (dispatch) => {
    dispatch(fetchVernashenCHURequest());
    return axios
      .get("http://localhost:8080/src/backend/api/churches.php")
      .then((response) => {
          const getapRes = response?.data;
          dispatch(fetchVernashenCHUSuccess(getapRes));
      })
      .catch((error) => {
        dispatch(fetchVernashenCHUFailure(error.message));
      });
  };
};
// fetch Vernashen Churches
export const fetchGladzorHotelRequest = () => {
  return {
    type: GET_GLADZORHOTEL_REQUEST,
  };
};

export const fetchGladzorHotelSuccess = (stateAll) => {
  return {
    type: GET_GLADZORHOTEL_SUCCESS,
    payload: stateAll,
  };
};

export const fetchGladzorHotelFailure = (error) => {
  return {
    type: GET_GLADZORHOTEL_FAILURE,
    payload: error,
  };
};
export const fetchGladzorHotel = () => {
  return (dispatch) => {
    dispatch(fetchGladzorHotelRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/hotels.php")
      .then((response) => {
          const getapRes = response?.data;
          dispatch(fetchGladzorHotelSuccess(getapRes));
      })
      .catch((error) => {
        dispatch(fetchGladzorHotelFailure(error.message));
      });
  };
};
// fetch buildings
export const fetchBuildingsRequest = () => {
  return {
    type: GET_BUILDINGS_REQUEST,
  };
};

export const fetchBuildingsSuccess = (stateAll) => {
  return {
    type: GET_BUILDINGS_SUCCESS,
    payload: stateAll,
  };
};

export const fetchBuildingsFailure = (error) => {
  return {
    type: GET_BUILDINGS_FAILURE,
    payload: error,
  };
};
export const fetchBuildings = () => {
  return (dispatch) => {
    dispatch(fetchBuildingsRequest());
    return axios
      .get("http://localhost:8080/src/backend/api/administrative_buildings.php")
      .then((response) => {
          const getapRes = response?.data;
          dispatch(fetchBuildingsSuccess(getapRes));
      })
      .catch((error) => {
        dispatch(fetchBuildingsFailure(error.message));
      });
  };
};