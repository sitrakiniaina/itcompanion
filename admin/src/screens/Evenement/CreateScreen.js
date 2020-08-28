import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        margin : '68px 5px',
    },
});
class CreateScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <h1>Create event </h1>
                <h2>Bienvenue </h2>
                <h3>Bienvenue </h3>
                <h4>Bienvenue </h4>
            </div>
        );
    };
}
export default withStyles(styles)(CreateScreen);