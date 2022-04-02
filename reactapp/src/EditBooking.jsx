import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
const EditBooking = () => {
   const [user, setUser] = useState({
      id : "",
      eventName: "",
      applicantName: "",
      applicantAddress: "",
      applicantMobileNo: "",
      applicantEmailId: "",
      eventAddress: "",
      eventDate: "",
      eventTime: "",
      noOfPeople: "",
      selectFoodCatogory: "",
      quantityOfVeg: "",
      quantityOfNonVeg: "",
      selectAddOnCatogory: ""
   });

   const { id,eventName, applicantName, applicantAddress, applicantMobileNo, applicantEmailId, eventAddress, eventDate, eventTime, noOfPeople, selectFoodCatogory, quantityOfVeg, quantityOfNonVeg, selectAddOnCatogory } = user;
   const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   useEffect(() => {
      loadUser();
   }, []);

   const onSubmit = e => {
      e.preventDefault();
      var id = localStorage.getItem('id');      
      let formData = new FormData();      
      formData.append('id', id);
      formData.append('eventName', user.eventName);
      formData.append('applicantName', user.applicantName);
      formData.append('applicantAddress', user.applicantAddress);
      formData.append('applicantMobileNo', user.applicantMobileNo);
      formData.append('applicantEmailId', user.applicantEmailId);
      formData.append('eventAddress', user.eventAddress);
      formData.append('eventDate', user.eventDate);
      formData.append('eventTime', user.eventTime);
      formData.append('noOfPeople', user.noOfPeople);
      formData.append('selectFoodCatogory', user.selectFoodCatogory);
      formData.append('quantityOfVeg', user.quantityOfVeg);
      formData.append('quantityOfNonVeg', user.quantityOfNonVeg);
      formData.append('selectAddOnCatogory', user.selectAddOnCatogory);      
      axios({
          method: 'put',
          url: 'http://localhost/api-student/event.php',
          data: formData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {  
        if(response.data.status === 1){
          alert("successfully Updated Event Detail.");
         //  window.location.href="/getBookedTheme";        
         }else{
          alert("Failed to Update event details...!");      
        }
      })
      .error(function (response) {
        alert("Failed to Update event details...!");
      });
   };

   const loadUser = async () => {
      var id = localStorage.getItem('id');      
      axios.get('http://localhost/api-student/event.php/'+id).then(result => {         
         setUser(result.data);
      });
   };
   return (
      <div className="container">
         <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit A User</h2>
            <form onSubmit={e => onSubmit(e)} style={{ padding: "10px" }}>
               <Grid container >
                  <Grid item xs={6}>

                     <TextField
                        variant="outlined"
                        placeholder="Name: SS birthday Event"
                        label="Event Name"
                        name="eventName"
                        onChange={e => onInputChange(e)}
                        value={eventName}
                        margin="normal"
                     />
                     <br />
                     <TextField
                        variant="outlined"
                        placeholder="Enter applicant name"
                        label="Applicant Name"
                        name="applicantName"
                        onChange={e => onInputChange(e)}
                        value={applicantName}
                        margin="normal"

                     />
                     <br />
                     <TextField
                        variant="outlined"
                        placeholder="Enter applicant address"
                        label="Applicant Address"
                        name="applicantAddress"
                        onChange={e => onInputChange(e)}
                        value={applicantAddress}
                        margin="normal"

                     />
                     <br />
                     <TextField
                        variant="outlined"
                        placeholder="Enter applicant mobile no"
                        label="Applicant Mobile No"
                        name="applicantMobileNo"
                        onChange={e => onInputChange(e)}
                        value={applicantMobileNo}
                        margin="normal"

                     />
                     <br />
                     <TextField
                        variant="outlined"
                        placeholder="Enter Your applicant email-id"
                        label="Applicant EmailId"
                        name="applicantEmailId"
                        onChange={e => onInputChange(e)}
                        value={applicantEmailId}
                        margin="normal"

                     />
                     <br />
                     <TextField
                        variant="outlined"
                        placeholder="Address: Coimbatore"
                        label="Enter Event Address"
                        name="eventAddress"
                        onChange={e => onInputChange(e)}
                        value={eventAddress}
                        margin="normal"

                     />
                     <br />
                     <TextField
                        variant="outlined"
                        label="Enter date of the event"
                        type="date"
                        InputLabelProps={{
                           shrink: true
                        }}
                        margin="normal"
                        name="eventDate"
                        onChange={e => onInputChange(e)}
                        value={eventDate}
                     />


                  </Grid>
                  <Grid item xs={6}>
                     <TextField

                        variant="outlined"
                        id="time"
                        label="Enter event time"
                        type="time"
                        name="eventTime"
                        onChange={e => onInputChange(e)}
                        value={eventTime}
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
                        name="noOfPeople"
                        onChange={e => onInputChange(e)}
                        value={noOfPeople}
                        margin="normal"

                     />
                     <br />

                     <TextField
                        variant="outlined"
                        placeholder="Enter Your FoodCatogory"
                        label="Food Catogory"
                        name="selectFoodCatogory"
                        onChange={e => onInputChange(e)}
                        value={selectFoodCatogory}
                        margin="normal"

                     />
                     <br />

                     <TextField
                        variant="outlined"
                        placeholder="Enter quantity of Nonveg items"
                        label="Quantity of Nonveg Items"
                        name="quantityOfNonVeg"
                        onChange={e => onInputChange(e)}
                        value={quantityOfNonVeg}
                        margin="normal"

                     /><br /> <TextField
                        placeholder="Enter quantity of Veg items"
                        label="Quantity of Veg Items"
                        name="quantityOfVeg"
                        onChange={e => onInputChange(e)}
                        value={quantityOfVeg}
                        margin="normal"
                        variant="outlined"
                     /> <br />

                     <TextField
                        variant="outlined"
                        placeholder="Enter ADD ons"
                        label="ADD ons"
                        name="selectAddOnCatogory"
                        onChange={e => onInputChange(e)}
                        value={selectAddOnCatogory}
                        margin="normal"

                     />

                  </Grid>
               </Grid>

               <Button
                  color="primary"
                  variant="contained"
                  type="onSubmit"
               >Update</Button>
            </form>
         </div>
      </div>
   );
};

export default EditBooking;
