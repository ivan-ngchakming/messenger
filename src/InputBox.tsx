import { useState} from 'react';
import { Box, IconButton, InputBase, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)({
  '& .MuiInputBase-input': {
    backgroundColor: 'rgba(134, 142, 153, 0.1)',
    borderRadius: '20px',
    border: 'none',
    paddingLeft: 15,
  }
});

const InputBox = ({ onSend }: { onSend: (userInput: string) => void }) => {
  const [input, setInput] = useState('');

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    console.log("sending " + input);
    onSend(input);
    setInput('');
  }

  return (
    <Box sx={{ width: 200 }}>
      <Grid container spacing={1} direction='row' alignItems='center'>
        <Grid item xs={10}>
        <StyledInput
          placeholder='Aa'
          value={input}
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={2}>
        <IconButton onClick={handleSend}>
          <SendIcon />
        </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
};

export default InputBox;
