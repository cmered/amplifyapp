import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');

      // Simulate ChatGPT response
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: inputValue, sender: 'user' },
          { text: 'This is a simulated ChatGPT response.', sender: 'chatgpt' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>ChatGPT Interface</h2>
      </div>
      <div className="chat-body">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;