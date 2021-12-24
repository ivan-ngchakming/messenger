import { Avatar, Box, Badge, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export type User = {
	id: number;
	name: string;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    animation: 'ripple 1.2s infinite ease-in-out',
    border: '1px solid currentColor',
    content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
    transform: 'scale(.8)',
    opacity: 1,
    },
    '100%': {
    transform: 'scale(2.4)',
    opacity: 0,
    },
  },
}));

const StyledCard = styled(Card)({
	borderRadius: 0,
	paddingLeft: 10,
	paddingRight: 10,
	paddingTop: 10,
	paddingBottom: 10,
});

const UserCard = ({ user }: { user: User }) => {
  
  return (
    <StyledCard>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box sx={{ marginRight: 2 }}>
					<StyledBadge
						overlap="circular"
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						variant="dot"
					>
						<Avatar />
					</StyledBadge>
				</Box>
				<Typography>
					{ user.name }
				</Typography>
			</Box>
    </StyledCard>
  )
}

export default UserCard;
