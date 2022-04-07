import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    //let fields = this.state.fields;
    //fields[field] = e.target.value;
    //this.setState({ fields });
    console.log(this.props.values.eventName);
    if (this.handleValidation()) {
      this.props.nextStep();
      //alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  
  };
  handleValidation() {
    let errors = {};
    let formIsValid = true;

    if (this.props.values.eventName.trim() == "") {
      formIsValid = false;
      errors["name"] = "Event Name Cannot be empty";
    }
    if (this.props.values.applicantMobileNo.trim() == "") {
      formIsValid = false;
      errors["applicantMobileNo"] = " Mobile Cannot be empty";
    }
    
    if (this.props.values.applicantEmailId.trim() == "") {
      formIsValid = false;
      errors["applicantEmailId"] = "Email Cannot be empty";
    }
    if (this.props.values.eventDate.trim() == "") {
      formIsValid = false;
      errors["eventDate"] = "Date Cannot be empty";
    }
    if (this.props.values.eventTime.trim() == "") {
      formIsValid = false;
      errors["eventTime"] = "Time Cannot be empty";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleFormSubmit = e =>{
    window.location.href= "/getBookedTheme";
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
            <DialogTitle><h3>BIRTHDAY EVENT BOOKING</h3>
            <a onClick={e => this.handleFormSubmit(e)} style={alinkTag}>Go to Booking List</a>
            </DialogTitle>
            <form onChange={handleChange}>
            
            <Grid container >
              <Grid item xs={6}>
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <TextField
                   variant="outlined"
                   placeholder="Name: SS birthday Event"
                   label="Event Name"
                   name="name"
                   ref="name"
                   onChange={handleChange('eventName')}

                   //onChange={this.handleChange.bind(this, "eventName")}
                value={this.state.fields["eventName"]}
                defaultValue={values.eventName}
    
                                     
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Enter applicant name"
                  label="Applicant Name"
                  onChange={handleChange('applicantName')}
                  defaultValue={values.applicantName}
                  margin="normal"
                  
                />
                <br />
                <TextField                
                 variant="outlined"
                 placeholder="Enter applicant address"
                 label="Applicant Address"
                 onChange={handleChange('applicantAddress')}
                 defaultValue={values.applicantAddress}
                 margin="normal"
                 
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["applicantMobileNo"]}</span>
                <TextField
                 variant="outlined"
                 placeholder="Enter applicant mobile no"
                 label="Applicant Mobile No"
                 onChange={handleChange('applicantMobileNo')}
                 defaultValue={values.applicantMobileNo}
                 margin="normal"
                 type="number"
                 
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <TextField
                  variant="outlined"
                 placeholder="Enter Your applicant email-id"
                 label="Applicant EmailId"
                 onChange={handleChange('applicantEmailId')}
                 defaultValue={values.applicantEmailId}
                 margin="normal"
                 type="email"
                 
                />
                <br />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  placeholder="Address: Coimbatore"
                  label="Enter Event Address"
                  onChange={handleChange('eventAddress')}
                  defaultValue={values.eventAddress}
                  
                  
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["eventDate"]}</span>
                <TextField
                  variant="outlined"
                  label="Enter date of the event"
                  type="date"
                  defaultValue="2222-22-62"
                  onChange={handleChange('eventDate')}
                  InputLabelProps={{
                  shrink: true
                  }}
                  margin="normal"
                  
                />
                <br />
                <span style={{ color: "red" }}>{this.state.errors["eventTime"]}</span>
                <TextField
                  
                  variant="outlined"
                  id="time"
                  label="Enter event time"
                  type="time"
                  defaultValue="12:30"
                  onChange={handleChange('eventTime')}
                  InputLabelProps={{
                  shrink: true
                  }}
                  margin="normal"
                  
                />
                <br />
                <TextField
                  variant="outlined"
                  placeholder="Enter the number of people"
                  label="No of People"
                  onChange={handleChange('noOfPeople')}
                  defaultValue={values.noOfPeople}
                  margin="normal"
                  type="number"
                  
                />
                <br />
              </Grid>
            </Grid>
           
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Next Page</Button>
             </form>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Page_1;