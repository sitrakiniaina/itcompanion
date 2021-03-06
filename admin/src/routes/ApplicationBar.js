import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppDrawer from './AppDrawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});
class ApplicationBar extends Component {
    constructor(props) {
        super(props);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.state = {
            open: false,
        };
    }
    handleDrawerOpen() {
        this.setState({
            open: true
        });
    };
    handleDrawerClose() {
        this.setState({
            open: false
        });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <>
                <style>
                    {`
                    .makeStyles-toolbar-12 {
                        background: url("https://www.oio.mg/media/100x100/uploads/images/school/logo/183ba157b0_29_1551075016.jpeg") no-repeat center center;
                        background-size: contain;
                    }
                `}
                </style>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            IT Companion
                        </Typography>
                        {/* <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div> */}
                    </Toolbar>
                </AppBar>
                <AppDrawer openDrawer={open} close={this.handleDrawerClose.bind(this)}></AppDrawer>
            </>
        );
    };
}
export default withStyles(styles)(ApplicationBar);