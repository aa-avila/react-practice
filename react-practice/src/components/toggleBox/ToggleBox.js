import { useState } from 'react';
import BoxFunction from './BoxFunction';
import { Button, Card, Typography } from '@mui/material';

function ToggleBox(props) {
  const [boxIsOn, setBoxIsOn] = useState(false);

  function handleBoxOn() {
    setBoxIsOn(true);
  }

  function handleBoxOff() {
    setBoxIsOn(false);
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Monospace',
          fontSize: 16,
          fontWeight: 'medium'
        }}
      >
        {props.title}
      </Typography>

      <BoxFunction boxState={boxIsOn ? 'on' : 'off'} />

      {boxIsOn && (
        <Button
          variant="contained"
          size="small"
          onClick={handleBoxOff}
          sx={{ width: '100%' }}
        >
          OFF
        </Button>
      )}

      {!boxIsOn && (
        <Button
          variant="contained"
          size="small"
          onClick={handleBoxOn}
          sx={{ width: '100%' }}
        >
          ON
        </Button>
      )}
    </Card>
  );
}

export default ToggleBox;
