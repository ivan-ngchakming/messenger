import { useState } from 'react';
import { Grid } from '@mui/material';

import { useAuth } from '../contexts/AuthContext';
import ChatBox from '../components/ChatBox';
import Contacts from '../components/Contacts';
import RequireAuth from '../RequireAuth';
import useContacts from '../hooks/useContacts';
import { UserContact } from '../types';

const Messenger = () => {
	const { currentUser } = useAuth();
	const [chattingWith, setChattingWith] = useState<UserContact>();
	const contacts = useContacts(currentUser?.uid);

  return (
		<RequireAuth>
    <Grid container>
			<Grid item xs={12} sm={3}>
				<Contacts 
					contacts={contacts}
					selected={chattingWith}
					onSelect={(user: UserContact) => setChattingWith(user)}
				/>
			</Grid>
			<Grid item xs={12} sm={9}>
				{chattingWith ? (
				<ChatBox
					// @ts-ignore
					currentUser={currentUser}
					chattingWithUser={chattingWith}
				/>
				) : (
					"Select a contact to start Chatting"
				)}
			</Grid>
    </Grid>
		</RequireAuth>
  );
}

export default Messenger;
