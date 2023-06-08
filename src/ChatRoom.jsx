import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Firebase Realtime Database reference
    const messagesRef = firebase.database().ref('messages');

    // Listen for changes in messages collection
    messagesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data);
        setMessages(messageList);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      messagesRef.off();
    };
  }, []);

  const addMessage = (message) => {
    // Firebase Realtime Database reference
    const messagesRef = firebase.database().ref('messages');
    
    // Push a new message to the messages collection
    messagesRef.push(message);
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <MessageList messages={messages} />
      <MessageForm addMessage={addMessage} />
    </div>
  );
};

export default ChatRoom;
