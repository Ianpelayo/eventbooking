
//MessageForm Component

import React, { useState } from 'react';

const MessageForm = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        sender: 'User',
        content: message,
      };

      // Call the addMessage function passed from the ChatRoom component
      addMessage(newMessage);

      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
