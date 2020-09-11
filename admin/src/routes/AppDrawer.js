import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import history from '../history';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
  active: {
    backgroundColor: 'red'
  }
}));

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#3f51b5",
      '& path': {
        fill: 'white' //affect style to child ==> ListItemIcon
      },
      '& span': {
        color: 'white'
      }
    }
  },
 
  selected: {}
})(MuiListItem);

export default function AppDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { openDrawer } = props;  
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: (() => {
        history.push("/");
        setSelectedIndex(0);
      })
    },
    {
      text: "Publication",
      icon: <ListIcon />,
      onClick: (() => {
        history.push("/publication");
        setSelectedIndex(1);
      })
    },
    {
      text: "Promotion",
      icon: <PeopleIcon />,
      onClick: (() => {
        history.push("/promotion");
        setSelectedIndex(2);
      })
    },
    {
      text: "Etudiants",
      icon: <SchoolIcon />,
      onClick: (() => {
        history.push("/etudiant");
        setSelectedIndex(3);
      })
    },
    {
      text: "Calendrier",
      icon: <CalendarTodayIcon />,
      onClick: (() => {
        history.push("/evenement");
        setSelectedIndex(4);
      })
    },
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => props.close()}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            const clsName = "menu"+text;
            return (
                <ListItem id={clsName} key={index} onClick={onClick} selected={selectedIndex===index}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem> 
            );
          })}

        </List>
        <Divider />
        <List>
          <ListItem >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Paramètres" />        
          </ListItem>
          
        </List>
      </Drawer>
    </div>
  );
}