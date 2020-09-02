import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { LABEL_SUPPRIMER, LABEL_INFO } from '../utilitaire/constante';

const styles = (theme) => ({
  root: {
    margin: 2,
    padding: theme.spacing(2),
    fontWeight: 'bold'  
  },
  closeButton: {
    color: 'white',
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  headerSuppression: {
    backgroundColor: '#ff3547',
    width: '50vh',
    '& h6': {
      color: 'white',
    }
  },
  headerInfo: {
    backgroundColor: '#00c851',
    width: '50vh',
    '& h6': {
      color: 'white',
    }
  }
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
    textAlign: "center",

    '& p': {
      paddingTop: '25px'
    }
  },
}))(MuiDialogContent);

const MyDeleteIcon = withStyles((theme) => ({
  root: {
    color: '#ff3547',
    fontSize: '100px'
  }
}))(DeleteIcon)

const MyInfoIcon = withStyles((theme) => ({
  root: {
    color: '#00c851',
    fontSize: '100px'
  }
}))(InfoIcon)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={(props.mode === LABEL_SUPPRIMER) ? classes.headerSuppression : classes.headerInfo}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const SwitchIcon = (local) => {
  const ret = [];
  if(local.mode === LABEL_SUPPRIMER)
    ret.push(<MyDeleteIcon key={1}/>);
  else 
    ret.push(<MyInfoIcon key={2}/>);
  return ret;
}

const MyDialogContent = withStyles(styles)((props) => {
  return (
    <DialogContent className="myModal-content" dividers>
      <SwitchIcon mode={props.mode}/>
      <Typography>
        {props.description}
      </Typography>
    </DialogContent>
  )
});

export function CustomizedDialogs(props) {
  return (   
    <div >
       <style>
        {`
          .dialog-action {
            justify-content: space-evenly;
            padding: 15px 0;
          }
          .yes-button-disable {
            display: none;
          }
          .action-button {
            border: 1px solid;
            border-radius: 20px;
            font-weight: bold;
            padding: 15px 40px;            
          }
          .no-button {
            background-color: #00c851;
            color: white;
            border-color: #00c851;
          }
          .no-button:hover {
            color: #00c851;
          }
          .ok-button span {
            display: none;
          }
          .ok-button {
            background-color: #00c851;
            border-color: #00c851;
            color: white;
            font-weight: bold;
          }
          .ok-button:after {
            content: 'OK';
          }
          .yes-button {
            background-color: #ff3547;
            color: white;
            border-color: #ff3547;
          }
          .yes-button:hover {
            color: #ff3547;
          }
        `}
        </style>
      <Dialog onClose={()=>props.close()} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" mode={props.mode} onClose={()=>props.close()}>
          {props.title}
        </DialogTitle>
        <MyDialogContent mode={props.mode} description={props.description} dividers>
            {props.description}
        </MyDialogContent>
        <DialogActions className="dialog-action">      
          <Button className={props.mode === LABEL_INFO ? "action-button ok-button" : "action-button no-button"} onClick={()=>props.close()}>
            <span>NON</span>
          </Button>
          <Button className={props.mode === LABEL_INFO ? "yes-button-disable" : "action-button yes-button"} onClick={()=>props.action()}>
            <span>OUI</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}