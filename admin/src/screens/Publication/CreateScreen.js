import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PublicationService from '../../services/PublicationService';
import PromotionService from '../../services/PromotionService';

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        padding: theme.spacing(1),
        margin: '68px 5px',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    containerroot: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '100%',
        },
        alignItems: 'center',
        flexDirection: 'column',
    },
    form: {
        width: '700px',
    },
    formfooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(2),
        minWidth: '120px'
    },
    button: {
        margin: theme.spacing(1),
    }
});
class CreateScreen extends Component {
    constructor(props) {
        super(props);
        this.retrievePromotions = this.retrievePromotions.bind(this);
        this.handlePromtionChange = this.handlePromotionChange.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.handleTitre = this.handleTitre.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleDateDebut = this.handleDateDebut.bind(this);
        this.handleHeureDebut = this.handleHeureDebut.bind(this);
        this.handleDateFin = this.handleDateFin.bind(this);
        this.handleHeureFin = this.handleHeureFin.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleLien = this.handleLien.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            publication: {
                titre: '',
                typepublication: {
                    id: 1
                },
                dateDebut: "2017-05-24",
                heureDebut: '08:00',
                dateFin: "2017-05-24",
                heureFin: '17:00',
                description: '',
                lien: '',
                promotions: []
            },
            promotions: []
        };
    }
    componentDidMount() {
        this.retrievePromotions();
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
    handlePromotionChange(values) {
        let publication = this.state.publication;
        publication.promotions = values;
        this.setState({
            publication: publication
        });
    }
    handleTitre(e) {
        console.log(e.target.value);
        let publication = this.state.publication;
        publication.titre = e.target.value;
        this.setState({
            publication: publication
        });
    }

    handleType(event) {
        let publication = this.state.publication;
        publication.typepublication.id = event.target.value;
        this.setState({
            publication: publication
        });
    }
    handleDateDebut(value) {
        let publication = this.state.publication;
        publication.dateDebut = value;
        this.setState({
            publication: publication
        });
    }
    handleHeureDebut(value) {
        let publication = this.state.publication;
        publication.heureDebut = value;
        this.setState({
            publication: publication
        });
    }
    handleDateFin(value) {
        let publication = this.state.publication;
        publication.dateFin = value;
        this.setState({
            publication: publication
        });
    }
    handleHeureFin(value) {
        let publication = this.state.publication;
        publication.heureFin = value;
        this.setState({
            publication: publication
        });

    }
    handleDescription(event) {
        let publication = this.state.publication;
        publication.description = event.target.value;
        this.setState({
            publication: publication
        });
    }
    handleLien(event) {
        let publication = this.state.publication;
        publication.lien = event.target.value;
        this.setState({
            publication: publication
        });
    }
    handleSubmitButton() {
        this.save();
    }
    save() {
        var data = this.state.publication;
        console.log(data);
        PublicationService.create(data)
            .then(response => {
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            });
    }
    render() {
        const { classes } = this.props;
        const { promotions, publication } = this.state;

        const types = [
            {
                id: '1',
                libelle: 'Evenement',
            },
            {
                id: '2',
                libelle: 'Stage',
            },
            {
                id: '3',
                libelle: 'Emplois',
            },
            {
                id: '4',
                libelle: 'Actualité',
            },
        ];
        return (

            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                            Créer publication
                        </Typography>

                    </Toolbar>
                    <Container className={classes.containerroot}>
                        <Grid className={classes.form}>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="libelle">Titre</InputLabel>
                                <Input
                                    required
                                    id="libelle"
                                    name="libelle"
                                    type="text"
                                    value={publication.titre}
                                    onChange={this.handleTitre}
                                    variant="filled"
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="typepublication">Type</InputLabel>
                                <Select
                                    id="typepublication"
                                    name="typepublication"
                                    onChange={this.handleType}
                                    value={publication.typepublication.id}
                                 
                                >
                                    {types.map((option, i) => (
                                        <MenuItem key={i} value={option.id}>{option.libelle}</MenuItem>

                                    ))}
                                </Select>
                            </FormControl>

                            <Grid>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="date-debut">Date début</InputLabel>
                                    <Input
                                        required
                                        id="date-debut"
                                        type="date"
                                        name="date-debut"
                                        value={publication.dateDebut}
                                        onChange={(event, value) => this.handleDateDebut(value)}
                                       
                                    />
                                </FormControl>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="heure-debut">Heure début</InputLabel>
                                    <Input
                                        required
                                        id="heure-debut"
                                        type="time"
                                        name="heure-debut"
                                        value={publication.heureDebut}
                                        onChange={(event, value) => this.handleHeureDebut(value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="date-fin">Date fin</InputLabel>
                                    <Input
                                        required
                                        id="date-fin"
                                        type="date"
                                        name="date-fin"
                                        value={publication.dateFin}
                                        onChange={(event, value) => this.handleDateFin(value)}

                                    />
                                </FormControl>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="heure-fin">Heure fin</InputLabel>
                                    <Input
                                        required
                                        id="heure-fin"
                                        type="time"
                                        name="heure-fin"
                                        value={publication.heureFin}
                                        onChange={(event, value) => this.handleHeureFin(value)}
                                    />
                                </FormControl>
                            </Grid>
                            <TextField
                                style={{ width: '100%' }}
                                id="description"
                                label="Description"
                                name="description"
                                multiline
                                rows={4}
                                value={publication.description}
                                onChange={this.handleDescription}
                                variant="filled"
                            />

                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="lien">Lien</InputLabel>
                                <Input
                                    name="lien"
                                    id="lien"
                                    type="text"
                                    value={publication.lien}
                                    onChange={this.handleLien}
                                />
                            </FormControl>
                           
                            <Autocomplete
                                style={{ width: '100%' }}
                                multiple
                                id="promotion"
                                options={promotions}
                                onChange={(event, values) => this.handlePromotionChange(values)}
                                getOptionLabel={(option) => option.libelle}
                                value={publication.promotions}
                                renderInput={(params) => (
                                    <TextField
                                        id="test"
                                        {...params}
                                        variant="standard"
                                        label="Promotion"
                                        placeholder="promotion"
                                    />
                                )}
                            />
                            <Grid className={classes.formfooter}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={this.handleSubmitButton}
                                    startIcon={<SaveIcon />}
                                >
                                    Sauvegarder
                            </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </div>
        );
    };
}
export default withStyles(styles)(CreateScreen);