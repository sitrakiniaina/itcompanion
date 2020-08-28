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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import history from '../../history';
import { CustomizedDialogs } from '../../components/CustomizedDialogs';
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
        // flex: '1',
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
        margin: theme.spacing(1),
    },
});
class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.createData = this.createData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            openModal : false
        };
    }
    createData(id,name, calories, fat, carbs, protein) {
        return {id, name, calories, fat, carbs, protein };
    }
    handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    handleAddButton() {
        history.push("/etudiant/create");
    }
    handleEditButton() {
        history.push("/etudiant/update");
    }
    
    handleClickModal(open){
        this.setState({
            openModal : open
        });
    }

    render() {
        const { classes } = this.props;
        const rows = [
            this.createData('ETU001','Rasendrahasinarivo', "Sitrakiniaina", "20-08-2017", 1, 4.0),
            this.createData('ETU001','Rasendrahasinarivo', "Herinihaja", "20-08-2017", 8, 4.3),
            this.createData('ETU001','Rasendrahasinarivo', "Herimihary", "20-08-2017", 6, 6.0),
            this.createData('ETU001','Rasendrahasinarivo', "Andoniaina", "20-08-2017", 5, 4.3),
            this.createData('ETU001','Rasendrahasinarivo', "Natacha", "20-08-2017", 3, 3.9),
        ];
        return (
            <main className={classes.root}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={this.handleClick}>
                        Material-UI
                     </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={this.handleClick}>
                        Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                            Liste des étudiants
                        </Typography>
                        <Tooltip title="Filter list" className={classes.toolbarbutton}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.handleAddButton.bind(this)}
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
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Prénom</TableCell>
                                    <TableCell>Date Naissance</TableCell>
                                    <TableCell>Promotion</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell >{row.calories}</TableCell>
                                        <TableCell >{row.fat}</TableCell>
                                        <TableCell >{row.carbs}</TableCell>
                                        <TableCell align="right">
                                            <Tooltip title="Editer">
                                                <IconButton aria-label="Editer" onClick={this.handleEditButton.bind(this)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Supprimer" onClick={this.handleClickModal.bind(this,true)}>
                                                <IconButton aria-label="Supprimer">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <CustomizedDialogs
                    open={this.state.openModal}
                    title="Supprimer"
                    description="Voulez vous vraiment supprimer?"
                    close = {this.handleClickModal.bind(this,false)}
                    action = {this.handleAddButton.bind(this)}
                />

            </main>
        );
    };
}
export default withStyles(styles)(ListScreen);