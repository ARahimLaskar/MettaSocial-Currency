import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  AT_INITIAL_STAGE,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  atInitial: false,
  results: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        atInitial: false,
        results: [],
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        atInitial: false,
        results: action.payload,
      };
    }
    case GET_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        atInitial: false,
        results: [],
      };
    }
    case AT_INITIAL_STAGE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        atInitial: true,
        results: [],
      };
    }
    default:
      return state;
  }
};
