import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactsIcon from '@material-ui/icons/Contacts';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';



var drawerWidth = 240;

var useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Navbar() {
  var classes = useStyles();
  var theme = useTheme();
  var [open, setOpen] = React.useState(false);

  var handleDrawerOpen = () => {
    setOpen(true);
  };

  var handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
          
        })}
        style={{backgroundColor:'black'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" style={{letterSpacing:"4px"}} noWrap>
            Ashmit Raj
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemIcon><ContactsIcon/></ListItemIcon>
            <ListItemText primary='Contact Details'/>
          </ListItem>
        </List>
        <Divider />
        <List>
            <a href="https://www.linkedin.com/in/ashmit-raj-72bb22190/">
                <ListItem button >
                    <ListItemIcon><LinkedInIcon color='primary'/> </ListItemIcon>
                    <ListItemText primary='Linkedin'/>
                </ListItem>
            </a>
            
        </List>
        <Divider />
        <List>
            <a href="https://github.com/ashmitraj089?tab=repositories">
                <ListItem button >
                    <ListItemIcon><GitHubIcon style={{color:'black'}}/> </ListItemIcon>
                    <ListItemText primary='GitHub'/>
                </ListItem>
            </a>
        </List>
        <Divider/>
        <List>
            <a href="https://www.instagram.com/_ashmit_/">
                <ListItem button >
                    <ListItemIcon><InstagramIcon color='secondary'/> </ListItemIcon>
                    <ListItemText primary='Instagram'/>
                </ListItem>
            </a>
        </List>
        <Divider/>
        <List>
            <a href="https://twitter.com/Ashmit_Raj123">
                <ListItem button >
                    <ListItemIcon><TwitterIcon color='primary'/> </ListItemIcon>
                    <ListItemText primary='Twitter'/>
                </ListItem>
            </a>
        </List>
        <Divider/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
    </div>
  );
}
export default Navbar;
