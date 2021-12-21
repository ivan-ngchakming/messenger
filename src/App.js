import { useState } from 'react';
import InputBox from './InputBox';
import Messages from './Messages';

function App() {
  const [messages, setMessages] = useState([
    {text: 'test 1', username: 'user1'}, 
    {text: 'test 2', username: 'user2'}
  ]);
  const [currentUser, setCurrentUser] = useState('user1');

  const handleSend = (userInput) => {
    setMessages(prev => ([...prev, { username: currentUser, text: userInput }]))
  }

  return (
    <>
      <Messages messages={messages} currentUser={currentUser} />
      <br />
      <InputBox 
        onSend={handleSend}
      />
    </>
  );
}

export default App;
