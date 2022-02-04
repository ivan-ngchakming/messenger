import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { UserContact } from '../types';

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
			<div style={{ height: '50px' }}>
				User Profile Card Placeholder
			</div>
			<div style={{ height: '50px' }}>
				Search Bar Placeholder
			</div>
			{contacts.map((contact) => (
				<Card>
					<CardActionArea onClick={() => onSelect(contact)}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{contact.displayName}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</Box>
	)
}

export default Contacts;
