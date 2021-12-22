import Button from '@mui/material/Button';

function ButtonClickAlert(props) {
  return (
    <Button
      variant="contained"
      onClick={() => {
        alert('clicked');
      }}
    >
      {props.text}
    </Button>
  );
}

export default ButtonClickAlert;
