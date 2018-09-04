import React from 'react';
import moment from 'moment';

import styles from './main.scss';

const ChatBubble = ({ sender, message, timestamp }) => {
  const { avatar, email } = sender;
  const date = (!!timestamp)
    ? moment(timestamp).format('DD MMM YYYY - HH:mm')
    : ''
  ;

  return (
    <div className={styles['chat-bubble']}>

      <div className={styles['chat-bubble__body']}>
        {avatar &&
          <div className={styles['chat-bubble__avatar']}>
            <img src={avatar} alt='profile' />
          </div>
        }

        {message &&
          <div className={styles['chat-bubble__message']}>
            <span>{message}</span>
          </div>
        }
      </div>

      {date &&
        <div className={styles['chat-bubble__date']}>
          <span>{date}</span>
        </div>
      }

      {email &&
        <div className={styles['chat-bubble__email']}>
          <span>{email}</span>
        </div>
      }
    </div>
  );
};

ChatBubble.displayName = 'ChatBubble';

export default ChatBubble;
