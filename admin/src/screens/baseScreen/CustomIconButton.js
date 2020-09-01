import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { LABEL_EDIT, LABEL_SUPPRIMER } from "../../utilitaire/constante";
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    editIcon: {
        color: '#00c851'
    },
    deleteIcon: {
        color: '#ff3547'
    }
})

function CustomIconButton({ label, event }) {
  const classes = styles();
  if (label === LABEL_EDIT) {
    return (
        <Tooltip title={LABEL_EDIT} onClick={event}>
            <IconButton className={classes.editIcon} aria-label={LABEL_EDIT}>
                <EditIcon />
            </IconButton>
        </Tooltip>
    )
  } else {
    return (
        <Tooltip title={LABEL_SUPPRIMER} onClick={event}>
            <IconButton className={classes.deleteIcon} aria-label={LABEL_SUPPRIMER}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
  }
}

export default CustomIconButton;
