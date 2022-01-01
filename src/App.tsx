import { Grid } from '@mui/material';
import ChatBox from './components/ChatBox';
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

  const viewWidth = window.innerWidth;
  
  return (
    <>
      <Grid container>
        { (!user || viewWidth > 600) && (
          <Grid item xs={12} sm={3}>
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
        )}
        <Grid item xs={12} sm={9}>
          {user ? (
            <ChatBox 
              currentUser={user}
              chattingWithUser={user.email === demoUser.email ? testUser : demoUser}
            />
          ) : (
            "Login To Continue"
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
