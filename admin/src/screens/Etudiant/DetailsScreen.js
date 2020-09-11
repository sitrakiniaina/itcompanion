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
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import blackProfile from '../../images/blank-profile.png';
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
        alignItems: 'center',
        flexDirection: 'row',
    },
    formfooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        
        margin: theme.spacing(2),

    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    photogrid: {
        display: 'flex',
        justifyContent: 'center',
        height: '300px',
    },
    formgrid: {
        margin: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
    button :{
        marginLeft : theme.spacing(1),
    }
});
class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: blackProfile
        };
        this.onImageChange = this.onImageChange.bind(this);


    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                            Détails étudiant
                        </Typography>

                    </Toolbar>
                    <Container className={classes.containerroot}>
                        <Grid className={classes.formgrid} item xs={6}>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">ETU Id</InputLabel>
                                <Input
                                    required
                                    id="facebookid"
                                    type="text"
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">Nom</InputLabel>
                                <Input
                                    required
                                    id="libelle"
                                    type="text"
                                    defaultValue="Rasendrahasinarivo"

                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">Prénoms</InputLabel>
                                <Input
                                    required
                                    id="libelle"
                                    type="text"
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">Date de naissance</InputLabel>
                                <Input
                                    required
                                    id="date-debut"
                                    type="date"
                                    defaultValue="1996-03-01"
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">Promotion</InputLabel>
                                <Input
                                    required
                                    id="date-debut"
                                    type="tex"
                                    defaultValue="Promotion 8"
                                />
                            </FormControl>
                            <Grid className={classes.formfooter}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    //onClick={this.handleAddButton.bind(this)}
                                    startIcon={<SaveIcon />}
                                >
                                    Notes
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    //onClick={this.handleAddButton.bind(this)}
                                    startIcon={<SaveIcon />}
                                >
                                    Modifier
                                </Button>
                            </Grid>

                        </Grid>
                        <Grid className={classes.photogrid} item xs={6}>
                            <img width="300px" height="300px" src={this.state.image} alt="{tile.title}" />
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={this.onImageChange} />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Grid>
                    </Container>
                </Paper>
            </div>
        );
    };
}
export default withStyles(styles)(DetailsScreen);