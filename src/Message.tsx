import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export type MessageType = { text: string, username: string };

const StyledCard = styled(Card)({
  borderRadius: '18px',
  height: 30,
  marginTop: 10,
});

const ToCard = styled(StyledCard)({

})

const FromCard = styled(StyledCard)({
  backgroundColor: 'rgb(0, 132, 255)',
})

const StyledCardContent = styled(CardContent)({
  paddingTop: 3,
  paddingLeft: 12,
});

const Message = ({ message, currentUser }: { message: MessageType, currentUser: string }) => {
  const isCurrentUser = message.username === currentUser;
  const MessageCard = isCurrentUser ? FromCard : ToCard;

  return (
    <MessageCard >
      <StyledCardContent>
        <Typography
          color={isCurrentUser ? 'white' : 'black'}
          variant='body1'
        >
          {message.username}: {message.text}
        </Typography>
      </StyledCardContent>
    </MessageCard>
  )
}

export default Message;
