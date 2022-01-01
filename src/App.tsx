import { Grid } from '@mui/material';
import ChatBox from './ChatBox';
import useAuth from './hooks/useAuth';

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

function App() {
  const { signIn, signOut, user } = useAuth();
  
  return (
    <>
      <Grid container>
        <Grid item xs={3.5}>
          {/* TODO: Contact list */}
          <div>You are {user ? `Signed-in as ${user.email}` : 'Signed-out' }</div>
          <div>
            <button onClick={() => signIn('test@gmail.com', 'test1234')}>Sign In Test</button>
          </div>
          <div>
            <button onClick={() => signIn('demo@gmail.com', 'demo1234')}>Sign In Demo</button>
          <div>
          </div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        </Grid>
        <Grid item xs={5}>
          {user ? (
            <ChatBox 
              currentUser={user}
              chattingWithUser={user.email === demoUser.email ? testUser : demoUser}
            />
          ) : (
            "Login To Continue"
          )}
        </Grid>
        <Grid item xs={3.5}>
          {/* TODO: User profile */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
