import { Grid } from '@mui/material';
import ChatBox from './ChatBox';

function App() {
  

  return (
    <>
      <Grid container>
        <Grid item xs={3.5}>
          {/* TODO: Contact list */}
        </Grid>
        <Grid item xs={5}>
          <ChatBox 
            currentUser={{ id: 1, name: 'user1' }}
            chattingWithUser={{ id: 2, name: 'user2' }}
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
