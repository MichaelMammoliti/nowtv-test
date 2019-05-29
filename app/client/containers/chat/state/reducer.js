import CONSTANTS from './constants';

const initialState = {
  fetchDataRequestStatus: undefined,
  messages: [],
};

const ChatReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case CONSTANTS.FETCH_DATA:
    case CONSTANTS.FETCH_DATA_PENDING:
    case CONSTANTS.FETCH_DATA_SUCCESS:
    case CONSTANTS.FETCH_DATA_FAIL:
      newState = { ...state, ...payload }; break;
    default:
      newState = state; break;
  }

  return newState;
};

export default ChatReducer;