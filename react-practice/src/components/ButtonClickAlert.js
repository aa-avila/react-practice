import { Button } from '@mui/material';

function ButtonClickAlert(props) {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={() => {
        alert('clicked');
      }}
    >
      {props.text}
    </Button>
  );
}

export default ButtonClickAlert;
