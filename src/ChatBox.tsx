import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import UserCard, { User } from './UserCard';
import InputBox from './InputBox';
import Messages from './Messages';
import { MessageType } from './Message';

const StyledMessagesBox = styled(Box)({
  height: `calc(100vh - 175px)`,
  padding: '20px 0',
})

const ChatBox = ({ currentUser, chattingWithUser }: { currentUser: User, chattingWithUser: User }) => {
  const [messages, setMessages] = useState<MessageType[]>([
    {text: 'test 1', username: 'user1'}, 
    {text: 'test 2', username: 'user2'},
  ]);

  const handleSend = (userInput: string) => {
    setMessages((prev: MessageType[]) => (
      [...prev, { username: currentUser.name, text: userInput }]
    ));
  }

  return (
    <Box sx={{ height: '100vh' }}>
      <UserCard user={chattingWithUser} />
      <StyledMessagesBox>
        <Messages messages={messages} currentUser={currentUser} />
      </StyledMessagesBox>
      <br />
      <InputBox
        onSend={handleSend}
      />
    </Box>
  )
}

export default ChatBox;
