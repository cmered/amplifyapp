jsx
import React from 'react';
import { FullPageChat } from 'flowise-embed-react';

function App() {
  return (
    <div>
      <FullPageChat
        chatflowid="16f521f8-8a93-45c0-b31e-2f4af2c98a5b"
        apiHost="https://flowise-49a7.onrender.com"
      />
    </div>
  );
}

export default App;