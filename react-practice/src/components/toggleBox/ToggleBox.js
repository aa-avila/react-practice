import { useState } from 'react';
import BoxFunction from './BoxFunction';
import { Button } from '@mui/material';

function ToggleBox(props) {
  const [boxIsOn, setBoxIsOn] = useState(false);

  function handleBoxOn() {
    setBoxIsOn(true);
  }

  function handleBoxOff() {
    setBoxIsOn(false);
  }

  return (
    <div>
      <h3>ToggleBox</h3>

      <BoxFunction boxState={boxIsOn ? 'on' : 'off'} />

      {boxIsOn && (
        <Button variant="contained" size="small" onClick={handleBoxOff}>
          OFF
        </Button>
      )}

      {!boxIsOn && (
        <Button variant="contained" size="small" onClick={handleBoxOn}>
          ON
        </Button>
      )}
    </div>
  );
}

export default ToggleBox;
