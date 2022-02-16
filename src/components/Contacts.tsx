import { Divider, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { UserContact } from '../types';

const StyledCard = styled(Card)({
	borderRadius: 'none',
	boxShadow: 'none',
});

const ContactCard = ({ contact, selected, onClick }: {
	contact: UserContact;
	selected: boolean;
	onClick: (val: UserContact) => void;
}) => {

	return (
		<StyledCard key={contact.uid} style={{
			backgroundColor: selected ? 'rgba(134, 142, 153, 0.1)' : '#fff',
		}}>
			<CardActionArea disabled={selected} onClick={() => onClick(contact)}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{contact.displayName}
					</Typography>
				</CardContent>
			</CardActionArea>
		</StyledCard>
	)
}

const ContactListArea = styled(Box)({
	overflowY: 'scroll',
	height: 'calc(100vh - 60px )',
})

const Contacts = ({ 
	contacts,
	selected,
	onSelect
}: { 
	contacts: UserContact[];
	selected: UserContact | undefined;
	onSelect: (val: UserContact) => void;
}) => {
	const { currentUser } = useAuth();

	return (
		<Box>
			<Box height='60px' display='flex' justifyContent='center' alignItems='center'>
				<Typography>
					{currentUser?.displayName || currentUser?.email}
				</Typography>
			</Box>

			<ContactListArea>
				{contacts.map((contact, index) => (
					<>
						<ContactCard
							key={contact.uid}
							contact={contact}
							selected={contact===selected}
							onClick={onSelect}
						/>
						{index < contacts.length - 1 && <Divider />}
					</>
				))}
			</ContactListArea>
		</Box>
	)
}

export default Contacts;
