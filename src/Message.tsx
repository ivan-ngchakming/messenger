import { Box, Card, CardContent, Typography } from '@mui/material';
import { User } from 'firebase/auth';
import { styled } from '@mui/material/styles';
import { Message as MessageType } from './types';

const StyledCard = styled(Card)({
  marginTop: 10,
  width: 'max-content',
});

const ToCard = styled(StyledCard)({
  borderRadius: '18px 18px 18px 0',
})

const FromCard = styled(StyledCard)({
  borderRadius: '18px 18px 0 18px',
  backgroundColor: 'rgb(0, 132, 255)',
})

const StyledCardContent = styled(CardContent)({
  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 12,
  '&:last-child': {
    paddingBottom: 3,
  }
});

const Message = ({ message, currentUser }: { message: MessageType, currentUser: User }) => {
  const isCurrentUser = message.from === currentUser.uid;
  const MessageCard = isCurrentUser ? FromCard : ToCard;

  return (
    <Box display='flex' justifyContent={isCurrentUser ? 'end' : 'start'}>
      <MessageCard >
        <StyledCardContent>
          <Typography
            color={isCurrentUser ? 'white' : 'black'}
            variant='body1'
          >
            {message.text}
          </Typography>
        </StyledCardContent>
      </MessageCard>
    </Box>
  )
}

export default Message;
