import Box from '@mui/material/Box';

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
        width: 100,
        height: 100,
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>{textBox}</h1>
    </Box>
  );
}

export default BoxFunction;
