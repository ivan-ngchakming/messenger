import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export type MessageType = { text: string, username: string };

const ToCard = styled(Card)({
  borderRadius: '18px'
})

const FromCard = styled(Card)({
  backgroundColor: 'rgb(0, 132, 255)',
  borderRadius: '18px'
})

const Message = ({ message, currentUser }: { message: MessageType, currentUser: string }) => {
  const isCurrentUser = message.username === currentUser;
  const MessageCard = isCurrentUser ? FromCard : ToCard;

  return (
    <MessageCard >
      <CardContent>
        <Typography
          color={isCurrentUser ? 'white' : 'black'}
          variant='h5'
          component='h2'
        >
          {message.username}: {message.text}
        </Typography>
      </CardContent>
    </MessageCard>
  )
}

export default Message;
