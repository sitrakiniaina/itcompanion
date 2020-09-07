import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Divider } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
    }
    render() {
        const { classes } = this.props;
        const promotions = [
            { title: 'Promotion 1', year: 1994 },
            { title: 'Promotion 2', year: 1972 },
            { title: 'promotion 3', year: 1974 },
            { title: 'Promotion 4', year: 1994 },
            { title: 'Promotion 5', year: 1972 },
            { title: 'promotion 6', year: 1974 }

        ]
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
        return (

            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                            Créer publication
                        </Typography>

                    </Toolbar>
                    <Container className={classes.containerroot}>
                        <form className={classes.form}>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="libelle">Titre</InputLabel>
                                <Input
                                    required
                                    id="libelle"
                                    name="libelle"
                                    type="text"
                                />
                            </FormControl>

                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="type">Type</InputLabel>
                                <Select
                                    id="type"
                                    name="type"
                                >
                                    {types.map((option) => (
                                        <MenuItem value={option.value}>{option.label}</MenuItem>

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
                                        defaultValue="2017-05-24"
                                        name="date-debut"

                                    />
                                </FormControl>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="heure-debut">Heure début</InputLabel>
                                    <Input
                                        required
                                        id="heure-debut"
                                        type="time"
                                        defaultValue="08:00"
                                        name="heure-debut"
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
                                        defaultValue="2017-05-24"
                                        name="date-fin"

                                    />
                                </FormControl>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="heure-fin">Heure fin</InputLabel>
                                    <Input
                                        required
                                        id="heure-fin"
                                        type="time"
                                        defaultValue="17:00"
                                        name="heure-fin"
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
                            />
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="lien">Lien</InputLabel>
                                <Input
                                    name="lien"
                                    id="lien"
                                    type="text"
                                />
                            </FormControl>
                            <Autocomplete
                                style={{ width: '100%' }}
                                multiple
                                id="promotion"
                                options={promotions}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                    <TextField
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
                                    //onClick={this.handleAddButton.bind(this)}
                                    startIcon={<SaveIcon />}
                                >
                                    Ajouter
                            </Button>
                            </Grid>
                        </form>
                    </Container>
                </Paper>
            </div>
        );
    };
}
export default withStyles(styles)(CreateScreen);