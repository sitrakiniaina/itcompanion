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
import PublicationService from '../../services/PublicationService';
import PromotionService from '../../services/PromotionService';
import TypepublicationService from '../../services/TypepublicationService';
import { renderDateFormat } from '../../utilitaire/dateUtil';
import Chip from '@material-ui/core/Chip';

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
    },
    paginationBox: {
        height: '53px',
        marginTop: '15px',
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10px'
    },
    chip :{
        marginRight :'4px'
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
        this.retrievePromotions = this.retrievePromotions.bind(this);
        this.retrieveTypepublication = this.retrieveTypepublication.bind(this);
        this.state = {
            openModal: false,
            typepublication: 1,
            typepublications: [],
            promotions: [],
            showFilter: false,
            publications: [],
            page: 0,
            limit: 5,
            totalPages: null,
            itemsCountPerPage: null,
            totalItemsCount: null,
            activePage: 0,


        };
    }
    retrieveTypepublication() {
        TypepublicationService.getAll()
            .then(response => {
                this.setState({
                    typepublications: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
    retrievePromotions() {
        PromotionService.getAll()
            .then(response => {
                this.setState({
                    promotions: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
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

    handleChangeTitre(event) {
        this.setState({
            titre: event.target.value
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
        this.retrievePublications();
        this.retrievePromotions();
        this.retrieveTypepublication();
    }

    retrievePublications() {
        PublicationService.getAll(this.state.titre, this.state.activePage, this.state.limit,this.state.typepublication)
            .then(response => {
                const totalPages = response.data.totalPages;
                const itemsCountPerPage = response.data.size;
                const totalItemsCount = response.data.totalElements;
                this.setState({ totalPages: totalPages })
                this.setState({ totalItemsCount: totalItemsCount })
                this.setState({ itemsCountPerPage: itemsCountPerPage })
                this.setState({
                    publications: response.data.content
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    searchButton() {
        this.retrievePublications();
    }
    handleChangePage(event, page) {
        this.setState({
            activePage: page - 1
        });
        this.retrievePublications();
    }

    render() {
        const { classes } = this.props;

        const { typepublications, promotions } = this.state;
        const headers = [
            createHeader('ID', 'justify'),
            createHeader('Titre', 'justify'),
            createHeader('Promotion', 'justify'),
            createHeader('Type publication', 'justify'),
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
                                    <TextField id="standard-search" label="Libelle" type="search" variant="outlined" onChange={this.handleChangeTitre.bind(this)} />
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
                                        {typepublications.map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.libelle}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField

                                        id="outlined-select-currency-native"
                                        select
                                        label="Promotion"
                                        //value={this.state.typepublication}
                                        //onChange={this.handleChangeTypePublication}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {promotions.map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.libelle}
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
                                        onClick={this.searchButton.bind(this)}

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

                                    <StyledTableRow key={row.id}>
                                        <TableCell >{row.id}</TableCell>
                                        <TableCell >
                                            {row.titre}
                                        </TableCell>
                                        <TableCell >
                                            {
                                                row.promotions.map((promotion) => (
                                                    <Chip className={classes.chip} label={promotion.libelle} color="primary" />
                                                ))}
                                        </TableCell>
                                        <TableCell >{row.typepublication.libelle}</TableCell>
                                        <TableCell align="right">{renderDateFormat(row.dateDebut)}</TableCell>
                                        <TableCell align="right">{renderDateFormat(row.dateFin)}</TableCell>
                                        <TableCell align="right">
                                            <CustomIconButton label="Editer" event={this.handleEditButton.bind(this)}></CustomIconButton>
                                            <CustomIconButton label="Supprimer" event={this.handleClickModal.bind(this, true)}></CustomIconButton>
                                        </TableCell>
                                    </StyledTableRow>

                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                    <Grid className={classes.paginationBox}>
                        <Pagination count={this.state.totalPages} page={this.state.activePage + 1} onChange={this.handleChangePage.bind(this)} color="primary" shape="rounded" />
                    </Grid>


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