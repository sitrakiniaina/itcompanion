import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export function CustomizedDialogs(props) {
  return (
    <div >
      <Dialog onClose={()=>props.close()} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={()=>props.close()}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography >
            {props.description}
          </Typography>
        </DialogContent>
        <DialogActions>      
          <Button  onClick={()=>props.close()}  color="secondary" style={{ color: "#F9060A"}}  startIcon={<CloseIcon style={{ color: "#F9060A"}}/>}>
            NON
          </Button>
          <Button  onClick={()=>props.action()}  color="primary" style={{ color: green[500] }} startIcon={<DoneIcon style={{ color: green[500] }}/>}>
            OUI
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}