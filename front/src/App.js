import React, { Component } from 'react';
import SignUp from './component/SignUp'
import { Grid, Paper } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div id="root">
        <Grid container alignItems='center' style={{ height:  '100%' }}>
          <Grid  item  xs={12}>
            <Paper elevation={4} style={{ margin:  32 }}>
              <Grid container alignItems='center' justify='center'>
                <Grid  item  xs={12}  sm={6} style={{ textAlign:  'center' }}>
                  <img  alt='yo' src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SignUp  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
    </div>
    );
  }
}

export default App;
