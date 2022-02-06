import { Divider, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
		<StyledCard key={contact.uid}>
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
	height: 'calc(100% - 60px - 20px )',
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

	return (
		<Box>
			<div style={{ height: '60px', backgroundColor: 'grey' }}>
				User Profile Card Placeholder
			</div>
			<div style={{ height: '20px', backgroundColor: 'darkgrey' }}>
				Search Bar Placeholder
			</div>
			<ContactListArea>
				{contacts.map((contact, index) => (
					<>
						<ContactCard
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
