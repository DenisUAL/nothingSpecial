import React from 'react';
import { View } from 'react-native';
import styles from '../styles.js';
import NumPicker from './numPicker.js';

export default class DatePicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      month: '',
      day: '',
      year: ''
    }
    // this.onMonChange = this.onMonChange.bind(this);
    // this.onDayChange = this.onDayChange.bind(this);
    // this.onYearChange = this.onYearChange.bind(this);
  }

  // onMonChange(month){
  //   this.setState({month})
  //   this.props.setDate(month, 1);
  // }

  // onDayChange(day){
  //   this.setState({day})
  //   this.props.setDate(day, 2);
  // }

  // onYearChange(year){
  //   this.setState({year})
  //   this.props.setDate(year, 3);
  // }

  componentDidMount(){
  }

  render() {
    return (
      <View style={styles.inputbox}>
          <NumPicker min='1' max='12' onChange={val=>this.props.mon(val)} />
          <NumPicker min='1' max='31' onChange={val=>this.props.day(val)} />
          <NumPicker min='1950' max='2018' onChange={val=>this.props.year(val)} />
      </View>
    );
  }
}

