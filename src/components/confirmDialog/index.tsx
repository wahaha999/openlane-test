import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography'

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: boolean;
  open: boolean;
  onClose: (value?: boolean) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(true);
  };


  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent dividers>
        <Typography>Profile will be removed.</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='error'
          autoFocus
          onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          variant='outlined'
          color='primary'
          onClick={handleOk}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialogRaw