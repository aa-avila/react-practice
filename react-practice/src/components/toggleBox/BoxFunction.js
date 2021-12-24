import { Box } from '@mui/material';

function BoxFunction(props) {
  const boxState = props.boxState;
  let bgColor = '';
  let textBox = '';
  if (boxState === 'on') {
    bgColor = 'warning.light';
    textBox = 'ON';
  }
  if (boxState === 'off') {
    bgColor = 'secondary.dark';
    textBox = 'OFF';
  }

  return (
    <Box
      sx={{
        marginY: 2,
        width: 200,
        height: 200,
        backgroundColor: bgColor
      }}
    >
      <h1>{textBox}</h1>
    </Box>
  );
}

export default BoxFunction;
