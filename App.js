// App.js
import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([]);

  // Function to add new message to the chat
  const addMessage = (message, sender) => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender }]);
  };

  return (
    <div className="App">
      <h1>Malayalam ChatBot</h1>
      <ChatBox messages={messages} />
      <ChatInput addMessage={addMessage} />
    </div>
  );
}

export default App;
