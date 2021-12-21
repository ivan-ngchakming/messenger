import { useState} from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, IconButton, InputBase } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)({
  backgroundColor: 'rgba(134, 142, 153, 0.1)',
  borderRadius: '20px',
  border: 'none',
  '& .MuiInputBase-adornedStart': {
    marginLeft: 10,
  }
});

const InputBox = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    console.log("sending " + input);
    onSend(input);
    setInput('');
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <StyledInput 
          variant='standard'
          placeholder='Aa'
          value={input}
          onChange={handleChange}
        />
        <IconButton onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </FormControl>
    </Box>
  )
};

export default InputBox;
