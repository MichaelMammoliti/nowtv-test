import React from 'react';
import moment from 'moment';

import styles from './chat-bubble.scss';

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  // Events
  // ===========================
  handleMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  // Render
  // ===========================
  render() {
    const { hover } = this.state;
    const { sender, message, timestamp } = this.props;
    const { avatar, email } = sender;
    const date = (!!timestamp)
      ? moment(timestamp).format('DD MMM YYYY - HH:mm')
      : ''
    ;

    return (
      <div
        className={styles['chat-bubble']}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >

        <div className={styles['chat-bubble__body']}>
          {avatar && (
            <div className={styles['chat-bubble__avatar']}>
              <img src={avatar} alt='profile' />
            </div>
          )}

          {message && (
            <div className={styles['chat-bubble__message']}>
              <span>{message}</span>
            </div>
          )}
        </div>

        {date && (
          <div className={styles['chat-bubble__date']}>
            <span>{date}</span>
          </div>
        )}

        {email && hover && (
          <div className={styles['chat-bubble__email']}>
            <span>{email}</span>
          </div>
        )}
      </div>
    );
  }
};

ChatBubble.displayName = 'ChatBubble';
ChatBubble.defaultProps = {
  sender: {},
};

export default ChatBubble;
