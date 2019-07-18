import {
  GET_FETCHING_START,
  GET_SUCCESS,
  GET_FAILED /* we need our action types here*/
} from "../actions";

// all state values need an initial value
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FETCHING_START: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case GET_SUCCESS: {
      const newData = action.payload.data.results;
      return {
        ...state,
        // no longer fetching as it's completed
        isFetching: false,
        characters: newData
      };
    }
    case GET_FAILED: {
      return {
        isFetching: false,
        error: action.payload
      };
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
