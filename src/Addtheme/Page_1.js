import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { DialogTitle, Grid } from '@material-ui/core';


export class Page_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  continue = e => {
    e.preventDefault();
   
    console.log(this.props.values.themeName);
    if (this.handleValidation()) {
      this.props.nextStep();
     
    } else {
      alert("Form has errors.");
    }
  
  };
  handleValidation() {
    let errors = {};
    let formIsValid = true;

    if (this.props.values.themeName.trim() == "") {
      formIsValid = false;
      errors["name"] = "Theme Name Cannot be empty";
    }
    if (this.props.values.imageUrl.trim() == "") {
      formIsValid = false;
      errors["imageUrl"] = " imageUrl Cannot be empty";
    }
    
    if (this.props.values.photographerDetails.trim() == "") {
      formIsValid = false;
      errors["photographerDetails"] = "photographerDetails Cannot be empty";
    }
    if (this.props.values.videographerDetails.trim() == "") {
      formIsValid = false;
      errors["videographerDetails"] = "videographerDetails Cannot be empty";
    }
    if (this.props.values.themereturnGift.trim() == "") {
      formIsValid = false;
      errors["themereturnGift"] = "themereturnGift Cannot be empty";
    }
    if (this.props.values.themeCost.trim() == "") {
        formIsValid = false;
        errors["themeCost"] = "themeCost Cannot be empty";
      }
      if (this.props.values.themeDescription.trim() == "") {
        formIsValid = false;
        errors["themeDescription"] = "themeDescription Cannot be empty";
      }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleFormSubmit = e =>{
    window.location.href= "/AddTheme";
  }

  

  render() {
    
    const { values, handleChange } = this.props;
    const alinkTag = {
      color: "#3f51b5",
      cursor: "pointer"  
    };
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle><h3>BIRTHDAY EVENT ADDTHEME</h3>
            <a onClick={e => this.handleFormSubmit(e)} style={alinkTag}>Go to Adding List</a>
            </DialogTitle>
            <form onChange={handleChange}>
            
            <Grid container >
              <Grid item xs={6}>
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <TextField
                   variant="outlined"
                   placeholder="Enter themeName"
                   label="Theme Name"
                   name="name"
                   ref="name"
                   onChange={handleChange('themeName')}

                   //onChange={this.handleChange.bind(this, "eventName")}
                value={this.state.fields["themeName"]}
                defaultValue={values.themeName}
    
                                     
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Enter the Imageurl"
                  label="Image Url"
                  onChange={handleChange('imageUrl')}
                  defaultValue={values.imageUrl}
                  margin="normal"
                  type="url"
                  
                />
                <br />
                <TextField                
                 variant="outlined"
                 placeholder="Enter photographer Details"
                 label="Photographer Details"
                 onChange={handleChange('photographerDetails')}
                 defaultValue={values.photographerDetails}
                 margin="normal"
                 
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["videographerDetails"]}</span>
                <TextField
                 variant="outlined"
                 placeholder="Enter videographer Details"
                 label="Videographer Details"
                 onChange={handleChange('videographerDetails')}
                 defaultValue={values.videographerDetails}
                 margin="normal"
                 
                 
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <TextField
                  variant="outlined"
                 placeholder="Enter themereturnGift"
                 label="Theme ReturnGift"
                 onChange={handleChange('themereturngitf')}
                 defaultValue={values.themereturnGift}
                 margin="normal"
                
                 
                />
                <br />
              
                
               
                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <TextField
                  variant="outlined"
                  placeholder="Enter themecost"
                  label="Theme Cost"
                  onChange={handleChange('themeCost')}
                  defaultValue={values.themeCost}
                  margin="normal"
                  type="number"
                  
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <TextField
                  variant="outlined"
                 placeholder="Enter themedescription"
                 label="Theme Description"
                 onChange={handleChange('themedescription')}
                 defaultValue={values.themeDescription}
                 margin="normal"
                
                 
                />
                <br />
              
              </Grid>
            </Grid>
           
            
             </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Page_1;