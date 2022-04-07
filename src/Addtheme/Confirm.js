import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();    
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleFormSubmit = e =>{   
    e.preventDefault();    
    let formData = new FormData();
    formData.append('themeName', this.props.values.themeName);
    formData.append('imageUrl', this.props.values.imageUrl);
    formData.append('photographerDetails', this.props.values.photographerDetails);
    formData.append('videographerDetails', this.props.values.videographerDetails);
    formData.append('themereturnGift', this.props.values.themereturnGift);
    formData.append('themeCost', this.props.values.themeCost);
    formData.append('themeDescription', this.props.values.themeDescription);
    
    axios({
        method: 'post',
        url: 'http://localhost/theme/add',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    
    
  }

   render() {
    const {
      values: { themeName, imageUrl, photographerDetails, videographerDetails, themereturnGift, themeCost, themeDescription }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm Theme Data" />
            <List>
              <ListItem>
                <ListItemText primary="Theme Name" secondary={themeName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Image Url" secondary={imageUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Photographer Details" secondary={photographerDetails} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Videographer Details" secondary={videographerDetails} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Themereturn Gift" secondary={themereturnGift} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Theme Cost" secondary={themeCost} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Theme Description" secondary={themeDescription} readonly />
              </ListItem>
              </List>
            <br />

           

            <Button
              color="primary"
              variant="contained"
              // onClick={this.continue}
              onClick={e => this.handleFormSubmit(e)}
            >Add Theme</Button>

      


          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;