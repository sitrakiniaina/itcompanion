import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CustomTableHead from '../baseScreen/CustomTableHead';
import { createHeader } from '../../utilitaire/utilitaire';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        margin: '68px 5px',
    },
    toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    toolbartitle: {
        flex: '1',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    toolbarbutton: {
        position: 'absolute',
        right: theme.spacing(3),
    },
    button: {
        backgroundColor: '#00c851',
        margin: theme.spacing(1),
    }
});

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.createData = this.createData.bind(this);
    }
    createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }   

    render() {
        const { classes } = this.props;
        const rows = [
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            this.createData('Eclair', 262, 16.0, 24, 6.0),
            this.createData('Cupcake', 305, 3.7, 67, 4.3),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
        //arg 1 : libelle , arg 2 : text-align
        const headers = [
            createHeader('Titre', 'justify'),
            createHeader('Date', 'right'),
            createHeader('Type', 'right')
        ]
        return (
            <main className={classes.root}>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                        Evènement
                        </Typography>
                        <Tooltip title="Filter list" className={classes.toolbarbutton}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<AddIcon />}
                            >
                                Ajouter
                            </Button>
                        </Tooltip>
                    </Toolbar>
                    <TableContainer>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <CustomTableHead header={headers}></CustomTableHead>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

            </main>
        );
    };
}
export default withStyles(styles)(ListScreen);