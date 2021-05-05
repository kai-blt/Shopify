import axios from 'axios';
const { REACT_APP_SEARCH_URL, REACT_APP_API_KEY } = process.env;

/******************************************************
 * SEARCH ACTION TYPES
 ******************************************************/
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const SEARCH_RESOLVE = 'SEARCH_RESOLVE';



/******************************************************
 * SEARCH ACTIONS
 ******************************************************/
export const searchActions = {
  // SEARCH MOVIES
  searchMovies: (movieTitle) => dispatch => {
    dispatch({ type: SEARCH_START });

    axios.get(`${REACT_APP_SEARCH_URL}?apikey=${REACT_APP_API_KEY}&s=${movieTitle}&t=${movieTitle}&type=movie`)
      .then(res => {
        dispatch({ type: SEARCH_SUCCESS, payload: res.data.Search })
      })
      .catch(err => {
        dispatch({ type: SEARCH_FAIL });
      })
      .finally(() => dispatch({ type: SEARCH_RESOLVE }));
  },

};

/******************************************************
 * SEARCH INITIAL STATE
 ******************************************************/
export const searchInitialState = {
  movies: [],
  status: 'idle',
};

/******************************************************
 * SEARCH REDUCER
 ******************************************************/
const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {

  // GET RECIPE
  case SEARCH_START:
    return { ...state, status: 'search/pending' };
  case SEARCH_SUCCESS:
    return {
    ...state,
    movies: action.payload,
    status: 'search/success',
    error: ''
    };
  case SEARCH_FAIL:
    return { ...state, status: 'search/error', error: action.payload };
  case SEARCH_RESOLVE:
    return { ...state, status: 'idle' };

  // DEFAULT
  default:
    return state;
  }
};

export default searchReducer;
