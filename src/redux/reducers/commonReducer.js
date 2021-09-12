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
  } from "../types";
  
const initialState = {
    loading: false,
    marks: [],
    gladzorRes: [],
    vernashenTPRes: [],
    getapRes: [],
    vernashenRes: [],
    vernashenSPRes: [],
    vernashenCHURes: [],
    error: "",
  };
  
  const commonReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SELECTED_MARKS_SUCCESS:
        return { ...state, loading: false, marks: action.payload };
        case GET_GLADZOR_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case GET_GLADZOR_SUCCESS:
          return {
            ...state,
            loading: false,
            gladzorRes: action.payload,
            error: "",
          };
        case GET_GLADZOR_FAILURE:
          return {
            ...state,
            loading: false,
            gladzorRes: [],
            error: action.payload,
          };
          case GET_VERNASHENTP_REQUEST:
            return {
              ...state,
              loading: true,
            };
          case GET_VERNASHENTP_SUCCESS:
            return {
              ...state,
              loading: false,
              vernashenTPRes: action.payload,
              error: "",
            };
          case GET_VERNASHENTP_FAILURE:
            return {
              ...state,
              loading: false,
              vernashenTPRes: [],
              error: action.payload,
            };
            case GET_GETAP_REQUEST:
              return {
                ...state,
                loading: true,
              };
            case GET_GETAP_SUCCESS:
              return {
                ...state,
                loading: false,
                getapRes: action.payload,
                error: "",
              };
            case GET_GETAP_FAILURE:
              return {
                ...state,
                loading: false,
                getapRes: [],
                error: action.payload,
              };
              case GET_VERNASHEN_REQUEST:
                return {
                  ...state,
                  loading: true,
                };
              case GET_VERNASHEN_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  vernashenRes: action.payload,
                  error: "",
                };
              case GET_VERNASHEN_FAILURE:
                return {
                  ...state,
                  loading: false,
                  vernashenRes: [],
                  error: action.payload,
                };
                case GET_VERNASHENSP_REQUEST:
                  return {
                    ...state,
                    loading: true,
                  };
                case GET_VERNASHENSP_SUCCESS:
                  return {
                    ...state,
                    loading: false,
                    vernashenSPRes: action.payload,
                    error: "",
                  };
                case GET_VERNASHENSP_FAILURE:
                  return {
                    ...state,
                    loading: false,
                    vernashenSPRes: [],
                    error: action.payload,
                  };
                  case GET_VERNASHENCHU_REQUEST:
                    return {
                      ...state,
                      loading: true,
                    };
                  case GET_VERNASHENCHU_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      vernashenCHURes: action.payload,
                      error: "",
                    };
                  case GET_VERNASHENCHU_FAILURE:
                    return {
                      ...state,
                      loading: false,
                      vernashenCHURes: [],
                      error: action.payload,
                    };
      default:
        return state;
    }
  };
  
  export default commonReducer;
  