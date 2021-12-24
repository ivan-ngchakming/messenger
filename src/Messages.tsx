import Message, { MessageType } from "./Message";
import { User } from './UserCard';

const Messages = ({messages, currentUser}: {messages: MessageType[], currentUser: User }) => {
  return (
    <>
      {messages.map(message => (
        <Message message={message} currentUser={currentUser} />
      ))}
    </>
  )
}

export default Messages;
