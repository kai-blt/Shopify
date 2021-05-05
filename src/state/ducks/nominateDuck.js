/******************************************************
 * NOMINATE ACTION TYPES
 ******************************************************/
export const NOMINATE_START = 'NOMINATE_START';
export const NOMINATE_SUCCESS = 'NOMINATE_SUCCESS';
export const NOMINATE_FAIL = 'NOMINATE_FAIL';
export const NOMINATE_RESOLVE = 'NOMINATE_RESOLVE';
export const REMOVE_START = 'REMOVE_START';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
export const REMOVE_FAIL = 'REMOVE_FAIL';
export const REMOVE_RESOLVE = 'REMOVE_RESOLVE';



/******************************************************
 * NOMINATE ACTIONS
 ******************************************************/
export const nominateActions = {
  // NOMINATE MOVIES
  nominateMovies: (movieObj) => dispatch => {
    dispatch({ type: NOMINATE_START });
    dispatch({ type: NOMINATE_SUCCESS, payload: movieObj });
    dispatch({ type: NOMINATE_RESOLVE });
  },
  removeMovies: (movieArr) => dispatch => {
    dispatch({ type: REMOVE_START });
    dispatch({ type: REMOVE_SUCCESS, payload: movieArr });
    dispatch({ type: REMOVE_RESOLVE });
  },
};

/******************************************************
 * NOMINATE INITIAL STATE
 ******************************************************/
export const nominateInitialState = {
  movies: [],
  status: 'idle',
};

/******************************************************
 * NOMINATE REDUCER
 ******************************************************/
const nominateReducer = (state = nominateInitialState, action) => {
  switch (action.type) {
    // GET NOMINATION
    case NOMINATE_START:
      return { ...state, status: 'nominate/pending' };
    case NOMINATE_SUCCESS:
      return {
      ...state,
      movies: [...state.movies, action.payload],
      status: 'nominate/success',
      error: ''
      };
    case NOMINATE_FAIL:
      return { ...state, status: 'nominate/error', error: action.payload };
    case NOMINATE_RESOLVE:
      return { ...state, status: 'idle' };

    case REMOVE_START:
      return { ...state, status: 'remove/pending' };
    case REMOVE_SUCCESS:
      return {
      ...state,
      movies: [...action.payload],
      status: 'remove/success',
      error: ''
      };
    case REMOVE_FAIL:
      return { ...state, status: 'remove/error', error: action.payload };
    case REMOVE_RESOLVE:
      return { ...state, status: 'idle' };

    // DEFAULT
    default:
      return state;
    }
};

export default nominateReducer;
