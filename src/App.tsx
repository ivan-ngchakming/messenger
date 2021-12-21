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
          <ChatBox />
        </Grid>
        <Grid item xs={3.5}>
          {/* TODO: User profile */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
