import React, { Component } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose';
import { Link } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser';

// Material-UI
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    absolute: {
      position: 'absolute',
      right: theme.spacing.unit * 3,
    },
    relative: {
      right: theme.spacing.unit * 3,
      paddingLeft: 10, 
    }
});

class Nav extends Component {

  state = {
    anchorEl: null,
  };

  handleMenu = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = (e) => {
    e.preventDefault()
    this.props.dispatch(removeAuthedUser());
    this.handleClose();
  }

  render() {


   const { authedUser, authedUserAvatar, classes } = this.props;
   const { anchorEl } = this.state;
   const open = Boolean(anchorEl);

   return (
      <div>
        { authedUser === null
         ?
         <AppBar position="static">
            <ToolBar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" style={{paddingLeft: 15}}>
                  Would You Rather
              </Typography>
              <div className={classes.absolute}>
                <AccountCircle className="avatar-small" style={{flex: 1}}/>
             </div>
            </ToolBar>
         </AppBar>
         :
         <AppBar position="static">
            <ToolBar>
              <IconButton
                  aria-label="Menu"
                  aria-owns={open ? 'menu-appbar' : null}
                  color="inherit"
                  onClick={this.handleMenu}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" style={{paddingLeft: 15, textAlign: 'center'}}>
                  Would You Rather
              </Typography>

              <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 open={open}
                 onClose={this.handleClose}
               >
                 <Link to="/" style={{ textDecoration: 'none' }}>
                   <MenuItem onClick={this.handleClose}>Home</MenuItem>
                 </Link>
                 <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                   <MenuItem onClick={this.handleClose}>Leaderboard</MenuItem>
                 </Link>
                 <Link to="/login" style={{ textDecoration: 'none' }}>
                   <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
                 </Link>
               </Menu>

                 <Typography variant="p" color="inherit" style={{flex: 1, size: 10, paddingLeft: 15, textAlign: 'right'}}>
                  <Hidden smDown>
                    Welcome, {authedUser}!
                  </Hidden>
                 </Typography>
                  <div className={classes.relative}>
                    <Avatar src={authedUserAvatar[0]} className="avatar-small" style={{flex: 1 }}/>
                 </div>
            </ToolBar>
         </AppBar>
        }
      </div>
    )
  }
}


function mapStateToProps ({ users, authedUser, authedUserAvatar }) {
  return {
    authedUser: authedUser == null ? authedUser : Object.keys(users)
        .filter((a) => a === authedUser)
        .map((a) => users[a].name),
    authedUserAvatar: authedUser == null ? authedUser : Object.keys(users)
        .filter((a) => a === authedUser)
        .map((a) => users[a].avatarURL)
  }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(Nav);
