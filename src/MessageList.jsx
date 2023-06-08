import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender}: </strong>
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;

