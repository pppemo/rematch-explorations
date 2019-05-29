// constants

export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const INCREMENT_START = "FETCH_DRIVER_INFOS_SUCCESS";
export const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";
export const INCREMENT_FAIL = "INCREMENT_FAIL";

// state

export const initialState = {
  count: 0,
  started: false,
  isLoading: false,
};

// actions

export const increment = value => ({
  type: "INCREMENT",
  payload: value
});

export const reset = () => ({
  type: "RESET",
});

export const incrementAsync = value =>
  dispatch => {
    dispatch(INCREMENT_START)
    new Promise(resolve => setTimeout(resolve, 1000))
      .then(() => dispatch(INCREMENT_SUCCESS, 1))
      .catch(() => dispatch(INCREMENT_FAIL))
  };

// reducer

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case INCREMENT:
      return {
        started: true,
        count: state.count + payload
      };

    case RESET:
      return {
        started: false,
        count: 0
      };

    case INCREMENT_START:
      return {
        ...state,
        started: true,
        isLoading: true,
      };

    case INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + payload,
        isLoading: false
      };

    case INCREMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "error"
      };

    default:
      return state;
  }
};
