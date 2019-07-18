// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our loading state - sets to this immediately
export const GET_FETCHING_START = "GET_FETCHING_START";
// if the request completes successfully
export const GET_SUCCESS = "GET_SUCCESS";
// if the request fails
export const GET_FAILED = "GET_FAILED";

// our action creator will be a function that returns a function
export function getCharacters() {
  // can return a function because we're using redux-thunk
  return dispatch => {
    // receives direct access to the dispatcher
    // enter the "loading" state
    dispatch({ type: GET_FETCHING_START });

    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        dispatch({ type: GET_SUCCESS, payload: response });
      })
      .catch(error => {
        dispatch({ type: GET_FAILED, payload: error.response });
      });
  };
}
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
