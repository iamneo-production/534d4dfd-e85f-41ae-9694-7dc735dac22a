import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export class Success extends Component {
  
  
  
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Successfully Added ThemeDetails </h1>
            <a href="/users/123" class="active">Michael</a>

           
            {/* <a href={getBookedTheme}>LinkedIn handle</a> */}
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;