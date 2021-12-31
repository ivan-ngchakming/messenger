import { Grid } from '@mui/material';
import ChatBox from './ChatBox';
import useAuth from './hooks/useAuth';

function App() {
  const { signIn, signOut, signedIn } = useAuth();
  
  return (
    <>
      <Grid container>
        <Grid item xs={3.5}>
          {/* TODO: Contact list */}
          <div>You are {signedIn ? 'Signed-in' : 'Signed-out' }</div>
          <button onClick={signIn}>Sign In</button>
          <button onClick={signOut}>Sign Out</button>
        </Grid>
        <Grid item xs={5}>
          <ChatBox 
            currentUser={{ id: '1', name: 'user1' }}
            chattingWithUser={{ id: '2', name: 'user2' }}
          />
        </Grid>
        <Grid item xs={3.5}>
          {/* TODO: User profile */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
