import React from 'react';
import { Picker } from 'react-native';
import styles from '../styles.js';

export default class DayPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      picker: ''
    }
  }
  render() {
    var arr = [];
    for(var i = this.props.min; i <= this.props.max; i++){
      i<=9?arr.push('0'+i):arr.push(i+'');
    }
    arr.unshift('-')
    return (
        <Picker
          selectedValue={this.state.picker}
          onValueChange={(itemValue, itemIndex) => {
            this.props.onChange(itemValue)
            this.setState({picker: itemValue})}}
          style={styles.date}>{arr.map((num)=>{
            return (<Picker.Item key={num} label={num} value={num}/>)
          })}
        </Picker>
    );
  }
}

