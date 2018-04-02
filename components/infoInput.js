import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles.js';

export default class InfoInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <TextInput placeholder={this.props.placeholder}
      secureTextEntry={this.props.secure}
      returnKeyType={this.props.action}
      onChangeText={(text)=>{
          this.props.onChange(text);
          }} style={styles.input} underlineColorAndroid='rgba(0,0,0,0)'/>
    );
  }
}

