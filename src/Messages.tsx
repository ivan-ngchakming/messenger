import { useEffect, useRef } from 'react';
import { User } from 'firebase/auth';
import Message from "./Message";
import { Message as MessageType } from './types';

const Messages = ({messages, currentUser}: {messages: MessageType[] | null, currentUser: User }) => {
  const dummyRef = useRef<HTMLElement | null>();

  useEffect(() => {
    const elem = dummyRef.current;
    if (!elem) return;
    elem.scrollIntoView();
  }, [messages]);

  return (
    <>
      {messages ? (
        messages.map(message => (
          <Message key={message.text} message={message} currentUser={currentUser} />
        ))
      ) : (
        "Loading"
      )}

      {/* invisible div for scrolling to bottom on init */}
      <div
        ref={(elem) => { dummyRef.current = elem; }}
      />
    </>
  )
}

export default Messages;
