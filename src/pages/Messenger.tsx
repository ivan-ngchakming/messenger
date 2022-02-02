import { Grid } from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox';
import RequireAuth from '../RequireAuth';
import { app as firebaseApp } from '../firebase';

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
	const navigate = useNavigate();

  const viewWidth = window.innerWidth;
  
	const handleSignout = () => {
		signOut(auth).then(res => {
			navigate('/login');
		})
	}

  return (
		<RequireAuth>
    <Grid container>
			{(!auth.currentUser || viewWidth > 600) && (
				<Grid item xs={12} sm={3}>
				{/* TODO: Contact list */}
				<div>You are {auth.currentUser ? `Signed-in as ${auth.currentUser.email}` : 'Signed-out' }</div>
				<div>
					<button onClick={handleSignout}>Sign Out</button>
				</div>
				</Grid>
			)}
			<Grid item xs={12} sm={9}>
				{auth.currentUser ? (
				<ChatBox 
					currentUser={auth.currentUser}
					chattingWithUser={auth.currentUser.email === demoUser.email ? testUser : demoUser}
				/>
				) : (
					"Login To Continue"
				)}
			</Grid>
    </Grid>
		</RequireAuth>
  );
}

export default Messenger;
