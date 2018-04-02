import React from 'react';
import { Picker } from 'react-native';
import styles from '../styles.js';

export default class GenderPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gender: ''
    }
  }
  render() {
    return (
        <Picker
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemIndex) => {
            this.props.onChange(itemValue)
            this.setState({gender: itemValue})}}
          style={styles.gender}>
          <Picker.Item label='-' value='-'/>
          <Picker.Item label='Male' value='Male'/>
          <Picker.Item label='Female' value='Female'/>
        </Picker>
    );
  }
}

