import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar
}));

const WeatherSideBar = () => {
    const classes = useStyles();
    return (
        <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
            <div className={classes.toolbar}/>
            <List>
                <ListItem button>
                    <ListItemText primary={`Severe Alerts`} />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default WeatherSideBar;