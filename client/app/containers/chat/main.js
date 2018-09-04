import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './state/actions';
import styles from './main.scss';

import ChatBubble from '../../components/chat-bubble/main.js';

class Chat extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { messages, fetchDataRequestStatus } = this.props;

    return (
      <div className={styles['chat']}>
        {fetchDataRequestStatus === 'error' &&
          <div className={styles['chat__error']}>
            <span>cannot render messages.</span>
          </div>
        }

        {fetchDataRequestStatus === 'pending' &&
          <div className={styles['chat__spinner']}>
            <span>fetching data..</span>
          </div>
        }

        {fetchDataRequestStatus === 'success' && messages.length &&
          <div className={styles['chat__body']}>
            {messages.map((messageItem, index) => (
              <div className={styles['chat__body-item']} key={index}>
                <ChatBubble {...messageItem} />
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

Chat.displayName = 'Chat';

Chat.defaultProps = {
  messages: [],
};


export {
  Chat,
};

const mapStateToProps = ({ chat }) => ({ ...chat });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
