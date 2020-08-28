import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        margin : '68px 5px',
    },
});
class HomeScreen extends Component {
    constructor(props) {
        super(props);     
    }
    render() {
        const { classes } = this.props;

        return (
            <main className={classes.root}> 
                <h2>Bienvenue sur </h2>
                <h1>IT Companion</h1>
            </main>
        );
    };
}
export default withStyles(styles)(HomeScreen);