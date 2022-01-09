import { useState, useEffect } from 'react';
import BoxFunction from './BoxFunction';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function ToggleBox(props) {
  const [boxIsOn, setBoxIsOn] = useState(false);

  function handleBoxOn() {
    setBoxIsOn(true);
    localStorage.setItem(props.boxId, 1);
  }

  function handleBoxOff() {
    setBoxIsOn(false);
    localStorage.setItem(props.boxId, 0);
  }

  useEffect(() => {
    const storedBoxState = Number(localStorage.getItem(props.boxId));
    // console.log(storedBoxState);

    if (storedBoxState === 1) {
      setBoxIsOn(true);
    }
    if (storedBoxState === 0) {
      setBoxIsOn(false);
    }
  }, []);

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
