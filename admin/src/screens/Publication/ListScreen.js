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
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import Pagination from '@material-ui/lab/Pagination';
import TablePagination from '@material-ui/core/TablePagination';
import PublicationService from '../../services/PublicationService';;

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        margin: '68px 5px',
    },
    toolbar: {
        display: 'flex',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        alignItems: 'inherit',
        flexDirection: 'column'
    },
    toolbarHead: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
    toolbartitle: {
        // flex: '1',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    toolbarbutton: {
        //position: 'absolute',
        //right: theme.spacing(3),
    },
    button: {
        backgroundColor: '#00c851',
        margin: theme.spacing(1),
    },
    filterButton: {
        backgroundColor: '#8BA7DC',
        color: 'white'
    },
    searchButton: {
        color: 'white',
        backgroundColor: '#8BA7DC',
        margin: theme.spacing(2),
    },
    search: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',

        },
        '& .MuiInputBase-root': {
            height: '45px'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    searchHead: {
        width: '75%',


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
        this.handleChangeTypePublication = this.handleChangeTypePublication.bind(this);
        this.handleFilterButton = this.handleFilterButton.bind(this);
        this.retrievePublications = this.retrievePublications.bind(this);
        this.state = {
            openModal: false,
            typepublication: "",
            showFilter: false,
            publications: []
        };
    }
    createData(id, libelle, facebookid, facebooklibelle, datedebut, datefin) {
        return { id, libelle, facebookid, facebooklibelle, datedebut, datefin };
    }
    handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    handleAddButton() {
        history.push("/publication/create");
    }
    handleEditButton() {
        history.push("/promotion/update");
    }

    handleClickModal(open) {
        this.setState({
            openModal: open
        });
    }
    handleChangeTypePublication = (event) => {
        this.setState({
            typepublication: event.target.value
        });

    };
    handleFilterButton() {
        this.setState({
            showFilter: !this.state.showFilter
        });
    };

    componentDidMount() {
        this.retrievePublications()
    }

    retrievePublications() {
        PublicationService.getAll()
            .then(response => {
                this.setState({
                    publications: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    render() {
        const { classes } = this.props;
        const rows = [
            this.createData('1', 'Publication 1', "1159520490900274", "ITU Prom1", "20-08-2017", "20-08-2017"),
            this.createData('2', 'Publication 2', "1159520490900274", "ITU Prom2", "20-08-2017", "20-08-2017"),
            this.createData('4', 'Publication 4', "1159520490900274", "ITU Prom4", "20-08-2017", "20-08-2017"),
            this.createData('5', 'Publication 5', "1159520490900274", "ITU Prom5", "20-08-2017", "20-08-2017"),
            this.createData('6', 'Publication 6', "1159520490900274", "ITU Prom6", "20-08-2017", "20-08-2017"),
            this.createData('7', 'Publication 7', "1159520490900274", "ITU Prom7", "20-08-2017", "20-08-2017"),
            this.createData('8', 'Publication 8', "1159520490900274", "ITU Prom8", "20-08-2017", "20-08-2017"),
        ];
        const types = [
            {
                value: '1',
                label: 'Evenement',
            },
            {
                value: '2',
                label: 'Stage',
            },
            {
                value: '3',
                label: 'Emplois',
            },
            {
                value: '4',
                label: 'Actualité',
            },
        ];
        const promotions = [
            {
                value: '1',
                label: 'Promotion 1',
            },
            {
                value: '2',
                label: 'Promotion 2',
            },
            {
                value: '3',
                label: 'Promotion 3',
            },
            {
                value: '4',
                label: 'Promoition 4',
            },
        ];
        const headers = [
            createHeader('ID', 'justify'),
            createHeader('Titre', 'justify'),
            createHeader('Promotion', 'justify'),
            createHeader('Promotion Fb ID', 'justify'),
            createHeader('Date début', 'right'),
            createHeader('Date fin', 'right'),
            createHeader('', 'center')
        ]
        return (
            <main className={classes.root}>

                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Grid className={classes.toolbarHead}>
                            <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                                Liste publication
                            </Typography>
                            <Grid>
                                <Tooltip title="Filter list">
                                    <Button
                                        className={classes.filterButton}
                                        variant="contained"
                                        onClick={this.handleFilterButton}
                                        startIcon={<FilterListIcon />}
                                    >
                                        Filtrer
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Ajouter" className={classes.toolbarbutton}>
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

                            </Grid>
                        </Grid>
                        {this.state.showFilter && (
                            <Grid className={classes.search}>
                                <Grid className={classes.searchHead}>
                                    <TextField id="standard-search" label="Libelle" type="search" variant="outlined" />
                                    <TextField

                                        id="outlined-select-currency-native"
                                        select
                                        label="Type"
                                        value={this.state.typepublication}
                                        onChange={this.handleChangeTypePublication}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {types.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField

                                        id="outlined-select-currency-native"
                                        select
                                        label="Promotion"
                                        value={this.state.typepublication}
                                        onChange={this.handleChangeTypePublication}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {promotions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField id="datedebut" label="Date début" type="date" variant="outlined" defaultValue="2017-05-24" />
                                    <TextField id="datefin" label="Date fin" type="date" variant="outlined" defaultValue="2017-05-24" />
                                </Grid>
                                <Grid className={classes.searchFooter}>
                                    <Button
                                        className={classes.searchButton}
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleAddButton.bind(this)}

                                    >
                                        Rechercher
                                    </Button>
                                </Grid>
                            </Grid>
                        )}

                    </Toolbar>
                    <TableContainer>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <CustomTableHead header={headers}></CustomTableHead>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.publications.map((row) => (
                                    row.promotions.map((promotion) => (
                                        <StyledTableRow key={row.id + "_" + promotion.id}>
                                            <TableCell >{row.id}</TableCell>
                                            <TableCell >
                                                {row.titre}
                                            </TableCell>
                                            <TableCell >{promotion.libelle}</TableCell>
                                            <TableCell >{promotion.facebookid}</TableCell>
                                            <TableCell align="right">{row.dateDebut}</TableCell>
                                            <TableCell align="right">{row.dateFin}</TableCell>
                                            <TableCell align="right">
                                                <CustomIconButton label="Editer" event={this.handleEditButton.bind(this)}></CustomIconButton>
                                                <CustomIconButton label="Supprimer" event={this.handleClickModal.bind(this, true)}></CustomIconButton>
                                            </TableCell>
                                        </StyledTableRow>
                                    ))
                                ))}
                            </TableBody>
                        </Table>
                        {/* <Pagination count={10} color="primary" /> */}
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={4}
                        rowsPerPage={5}
                        page={1}
                    // onChangePage={handleChangePage}
                    // onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
                <CustomizedDialogs
                    open={this.state.openModal}
                    title="Supprimer"
                    mode={LABEL_SUPPRIMER}
                    description="Voulez vous vraiment supprimer?"
                    close={this.handleClickModal.bind(this, false)}
                    action={this.handleAddButton.bind(this)}
                />

            </main >
        );
    };
}
export default withStyles(styles)(ListScreen);