import Message from "./Message";

const Messages = ({messages, currentUser}) => {
  return (
    <>
      {messages.map(message => (
        <Message message={message} currentUser={currentUser} />
      ))}
    </>
  )
}

export default Messages;