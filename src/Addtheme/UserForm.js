import React, { Component } from 'react';


import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    themeName: '',
    imageUrl: '',
    photographerDetails: '',
    videographerDetails: '',
    themereturnGift: '',
    themeCost: '',
    themeDescription:'',
    
    
  };
 handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { themeName, imageUrl, photographerDetails, videographerDetails, themereturnGift, themeCost,themeDescription } = this.state;
    const values = {  themeName, imageUrl, photographerDetails, videographerDetails, themereturnGift, themeCost,themeDescription};
    return <Success />;
  }
}

export default UserForm;