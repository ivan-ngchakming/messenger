import Message, { MessageType } from "./Message";

const Messages = ({messages, currentUser}: {messages: MessageType[], currentUser: string }) => {
  return (
    <>
      {messages.map(message => (
        <Message message={message} currentUser={currentUser} />
      ))}
    </>
  )
}

export default Messages;