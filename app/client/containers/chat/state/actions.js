import CONSTANTS from './constants';
import { getMessages, getMembers } from '../../../data.js';
import ChatUtilities from '../../../utilities/chat/main.js';

export const fetchDataSuccess = ({ messages } = {}) => ({
  type: CONSTANTS.FETCH_DATA_SUCCESS,
  payload: {
    fetchDataRequestStatus: 'success',
    messages,
  },
});

export const fetchDataPending = () => ({
  type: CONSTANTS.FETCH_DATA_PENDING,
  payload: {
    fetchDataRequestStatus: 'pending',
  },
});

export const fetchDataFail = () => ({
  type: CONSTANTS.FETCH_DATA_FAIL,
  payload: {
    fetchDataRequestStatus: 'error',
  },
});

export const fetchData = () => dispatch => {
  dispatch(fetchDataPending());

  const success = ([ messages, users ]) => {
    const newUsers = ChatUtilities.normaliseUserCollection(users);
    const newMessages = ChatUtilities.extendMessagesWithUserData(messages, newUsers);
    const data = ChatUtilities.sortMessagesByDate(newMessages);

    const action = fetchDataSuccess({
      messages: data,
    });

    dispatch(action);
  };

  const fail = () => {
    dispatch(fetchDataFail());
  };

  return Promise.all([getMessages(), getMembers()])
    .then(success)
    .catch(fail)
  ;
};
