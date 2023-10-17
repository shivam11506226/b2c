import * as types from "./actionType";

const initState = {
  busResult: [],
  busSeatLayout: [],
  isLoading: false,

  isError: false,

  showSuccessMessage: false,
};

export const busSearchReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.BUS_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.BUS_SEARCH_SUCCESS:
      return {
        ...state,
        busResult: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};

export const getBusSeatReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.BUS_SEAT_LAYOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.BUS_SEAT_LAYOUT_SUCCESS:
      return {
        ...state,
        busSeatLayout: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};