import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { User } from 'firebase/auth';
import useMessages from './hooks/useMessages';
import UserCard from './UserCard';
import InputBox from './InputBox';
import Messages from './Messages';
import ContextMenu from './ContextMenu';
import { UserContact } from './types';

const StyledMessagesBox = styled(Box)({
  height: `calc(100vh - 175px)`,
  margin: '20px 0',
  paddingBottom: '5px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '&::-moz-scrollbar': {
    display: 'none',
  },
  scrollbarColor: 'transparent transparent', // just hides the scrollbar for firefox
})

const ChatBox = ({ currentUser, chattingWithUser }: { currentUser: User, chattingWithUser: UserContact }) => {
  const { send, messages, clearAll } = useMessages({ currentUser: currentUser, toUser: chattingWithUser })

  const handleSend = (userInput: string) => {
    send(userInput);
  }

  return (
    <Box sx={{ height: '100vh' }}>
      <UserCard user={chattingWithUser} />
      <ContextMenu menuItems={[{label: 'Clear', callback: clearAll }]}>
        <StyledMessagesBox>
          <Messages messages={messages} currentUser={currentUser} />
        </StyledMessagesBox>
        <br />
        <InputBox
          onSend={handleSend}
        />
      </ContextMenu>
      {/* <div><button onClick={clearAll}>Clear</button></div> */}
    </Box>
  )
}

export default ChatBox;
