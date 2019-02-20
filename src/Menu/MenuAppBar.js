import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/Inbox';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LeftSideMenu from "./LeftSideMenu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        isDrawerOpen: false,
    };

    constructor(props){
        super(props);
        this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
    }

    handleChange = event => {
        this.setState({auth: event.target.checked});
    };

    handleDrawer = event => {
        this.setState({isDrawerOpen: true});
    };

    handleMenu = event => {
        this.setState({isDrawerOpen: true});
    };

    handleCloseDrawer(){
        this.setState({isDrawerOpen: false});
    }


    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const sideList = (
            <div className={classes.list}>
                <List>
                        <ListItem button key={"user"}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText> <Link to="/users">Users</Link></ListItemText>
                        </ListItem>
                        <ListItem button key={"logs"}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText><Link to="/logs">Logs</Link></ListItemText>
                        </ListItem>
                </List>
                <Divider />
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.handleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <Link style={{textDecoration:'none'}} to="/">{this.props.title}</Link>
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <LeftSideMenu opened={this.state.isDrawerOpen} sideList={sideList} onClose={this.handleCloseDrawer}/>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
