import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { handleSetAuthUser } from '../actions/shared';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 275,
  },
  actions: {
    paddingBottom: 15
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  }
};

class Login extends Component {
  
  handleLogin = (e, id) => {
    e.preventDefault()
    const { dispatch } = this.props;
    dispatch(handleSetAuthUser(id));
  }

  render() {

     const { userBank, classes, authedUser, location } = this.props
     const { from } = location.state || { from: { pathname: '/' } };

     if (authedUser !== null) {
       return (
         <Redirect to={from} />
       );
     }

     return (

       <div style={{paddingTop: 15}}>
         <h2>Login</h2>
         <p>Please select a user to login.</p>

           <ul className='dashboard-list'>
              { userBank.map(user => (
               <li key={user.id}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                          {user.role}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {user.name}
                        </Typography>
                        <img src={user.image} className="avatar" alt={user.name} />
                        <Typography component="p">
                          "{user.quote}"
                        </Typography>
                      </CardContent>
                      <CardActions onClick={ e => this.handleLogin(e, user.id)} className={classes.actions}>
                        <Button variant="outlined" color="primary" size="large" onClick={ e => this.handleLogin(e, user.id)} className={classes.button}>
                            Select
                       </Button>
                      </CardActions>
                    </Card>
               </li>
              )) }
            </ul>
       </div>
     )
  }
}

function mapStateToProps({ users, authedUser }) {

  const userBank = Object.keys(users)
    .map((user) => {
      const userProperties = {
        id: users[user].id,
        image: users[user].avatarURL,
        name: users[user].name,
        quote: users[user].quote,
        role: users[user].role
      };
      return userProperties;
    })
  return {
    userBank,
    authedUser
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Login))
