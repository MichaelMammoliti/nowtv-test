import CONSTANTS from './constants';
import { getMessages, getMembers } from '../../../data.js';
import ChatUtilities from '../../../utilities/chat/main.js';

const fetchDataSuccess = ({ messages }) => ({
  type: CONSTANTS.FETCH_DATA_SUCCESS,
  payload: {
    fetchDataRequestStatus: 'success',
    messages,
  },
});

const fetchDataPending = () => ({
  type: CONSTANTS.FETCH_DATA_PENDING,
  payload: {
    fetchDataRequestStatus: 'pending',
  },
});

const fetchDataFail = () => ({
  type: CONSTANTS.FETCH_DATA_FAIL,
  payload: {
    fetchDataRequestStatus: 'error',
  },
});

const fetchData = () => dispatch => {
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

  Promise.all([getMessages(), getMembers()])
    .then(success)
    .catch(fail)
  ;
};

export default {
  fetchData,
  fetchDataSuccess,
};