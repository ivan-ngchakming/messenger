import { useState } from 'react';
import { Grid } from '@mui/material';
import { getAuth } from "firebase/auth";

import ChatBox from '../components/ChatBox';
import Contacts from '../components/Contacts';
import RequireAuth from '../RequireAuth';
import { app as firebaseApp } from '../firebase';
import useContacts from '../hooks/useContacts';
import { UserContact } from '../types';

const testUser = {
  uid: 'bQgXbip8ldONs4xfHKoFTqJGIEz1',
  displayName: null,
  email: 'test@gmail.com',
}

const demoUser = {
  uid: 'JWHUW4cEKygO3WoAz0NCmiVaeIY2',
  displayName: null,
  email: 'demo@gmail.com',
}

const Messenger = () => {
  const auth = getAuth(firebaseApp);
	const [chattingWith, setChattingWith] = useState<UserContact>();
	const contacts = useContacts(auth.currentUser?.uid);

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
					currentUser={auth.currentUser}
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
