import { useEffect, useRef } from 'react';
import Message from "./Message";
import { User, Message as MessageType } from './types';

const Messages = ({messages, currentUser}: {messages: MessageType[], currentUser: User }) => {
  const dummyRef = useRef<HTMLElement | null>();

  useEffect(() => {
    const elem = dummyRef.current;
    if (!elem) return;
    elem.scrollIntoView();
  }, [messages]);

  return (
    <>
      {messages.map(message => (
        <Message key={message.text} message={message} currentUser={currentUser} />
      ))}
      <div
        ref={(elem) => { dummyRef.current = elem; }}
      />
    </>
  )
}

export default Messages;
