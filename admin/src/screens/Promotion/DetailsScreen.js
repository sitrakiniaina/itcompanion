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
        flexDirection: 'column',
    },
    form: {
        width: '500px',
    },
    formfooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(2),
    },
});
class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbartitle} variant="h5" id="tableTitle" component="div">
                            Créer promotion
                        </Typography>

                    </Toolbar>
                    <Container className={classes.containerroot}>
                        <form className={classes.form}>
                            <FormControl fullWidth className={classes.margin}>
                                <InputLabel htmlFor="standard-adornment-amount">Libelle</InputLabel>
                                <Input
                                    required
                                    id="libelle"
                                    type="text"

                                />
                            </FormControl>

                            <Grid>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="standard-adornment-amount">Date début</InputLabel>
                                    <Input
                                        required
                                        id="date-debut"
                                        type="date"
                                        defaultValue="2017-05-24"

                                    />
                                </FormControl>
                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="standard-adornment-amount">Date fin</InputLabel>
                                    <Input
                                        required
                                        id="date-fin"
                                        type="date"
                                        defaultValue="2017-05-24"

                                    />
                                </FormControl>
                            </Grid>
                            <Grid>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="standard-adornment-amount">Facebook Libelle</InputLabel>
                                    <Input
                                        required
                                        id="facebooklibelle"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="standard-adornment-amount">Facebook ID</InputLabel>
                                    <Input
                                        required
                                        id="facebookid"
                                        type="text"
                                    />
                                </FormControl>
                            </Grid>
                            <Divider></Divider>
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
export default withStyles(styles)(DetailsScreen);