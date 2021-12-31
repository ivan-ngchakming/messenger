import { useState} from 'react';
import { Box, IconButton, InputBase } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)({
  width: '100%',
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Enter'){
      handleSend();
    }
  }
  
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
      <StyledInput
        placeholder='Aa'
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  )
};

export default InputBox;
