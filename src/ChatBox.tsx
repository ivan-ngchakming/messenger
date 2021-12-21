import { useState } from 'react';
import InputBox from './InputBox';
import Messages from './Messages';
import { MessageType } from './Message';

const ChatBox = ({}) => {
  const [messages, setMessages] = useState<MessageType[]>([
    {text: 'test 1', username: 'user1'}, 
    {text: 'test 2', username: 'user2'}
  ]);
  const [currentUser, setCurrentUser] = useState<string>('user1');

  const handleSend = (userInput: string) => {
    setMessages((prev: MessageType[]) => ([...prev, { username: currentUser, text: userInput }]))
  }

  return (
    <>
      <Messages messages={messages} currentUser={currentUser} />
      <br />
      <InputBox 
        onSend={handleSend}
      />
    </>
  )
}

export default ChatBox;
