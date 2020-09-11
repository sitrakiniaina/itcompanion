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
import history from '../../history';
import { CustomizedDialogs } from '../../components/CustomizedDialogs';
import CustomTableHead from '../baseScreen/CustomTableHead';
import { createHeader } from '../../utilitaire/utilitaire';
import CustomIconButton from '../baseScreen/CustomIconButton';
import { LABEL_SUPPRIMER } from '../../utilitaire/constante';

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
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            openModal : false
        };
    }
    createData(id,libelle, facebookid, facebooklibelle, datedebut, datefin) {
        return { id, libelle, facebookid, facebooklibelle, datedebut,datefin };
    }
    handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    handleAddButton() {
        history.push("/promotion/create");
    }
    handleEditButton() {
        history.push("/promotion/update");
    }
    
    handleClickModal(open){
        this.setState({
            openModal : open
        });
    }

    render() {
        const { classes } = this.props;
        const rows = [
            this.createData('1','Promotion 1', "1159520490900274","ITU Prom1", "20-08-2017", "20-08-2017"),
            this.createData('2','Promotion 2', "1159520490900274","ITU Prom2", "20-08-2017", "20-08-2017"),
            this.createData('4','Promotion 4', "1159520490900274","ITU Prom4", "20-08-2017", "20-08-2017"),
            this.createData('5','Promotion 5', "1159520490900274","ITU Prom5", "20-08-2017", "20-08-2017"),
            this.createData('6','Promotion 6', "1159520490900274","ITU Prom6", "20-08-2017", "20-08-2017"),
            this.createData('7','Promotion 7', "1159520490900274","ITU Prom7", "20-08-2017", "20-08-2017"),
            this.createData('8','Promotion 8', "1159520490900274","ITU Prom8", "20-08-2017", "20-08-2017"),
        ];

        const headers = [
            createHeader('ID', 'justify'),
            createHeader('Libelle', 'justify'),          
            createHeader('Facebook Libelle', 'justify'),
            createHeader('Facebook ID', 'justify'),
            createHeader('Date début', 'right'),
            createHeader('Date fin', 'right'),
            createHeader('', 'center')
        ]
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
                            Liste promotions
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
                                    <CustomTableHead header={headers}></CustomTableHead>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <TableCell >{row.id}</TableCell>
                                        <TableCell >
                                            {row.libelle}
                                        </TableCell>
                                        <TableCell >{row.facebooklibelle}</TableCell>
                                        <TableCell >{row.facebookid}</TableCell>
                                        <TableCell align="right">{row.datedebut}</TableCell>
                                        <TableCell align="right">{row.datefin}</TableCell>
                                        <TableCell align="right">
                                            <CustomIconButton label="Editer" event={this.handleEditButton.bind(this)}></CustomIconButton>
                                            <CustomIconButton label="Supprimer" event={this.handleClickModal.bind(this,true)}></CustomIconButton>
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <CustomizedDialogs
                    open={this.state.openModal}
                    title="Supprimer"
                    mode={LABEL_SUPPRIMER}
                    description="Voulez vous vraiment supprimer?"
                    close = {this.handleClickModal.bind(this,false)}
                    action = {this.handleAddButton.bind(this)}
                />

            </main>
        );
    };
}
export default withStyles(styles)(ListScreen);