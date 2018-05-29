import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui'

class Nav extends React.Component {

  styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    Nav: {
      padding: 20, marginLeft: 10
    }
  };

  render(){
    return(
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={this.styles.Nav}>
            Travel App
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Nav;
