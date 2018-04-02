import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Picker,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import styles from './styles.js';
import DatePicker from './components/datePicker.js';
import GenderPicker from './components/genderPicker.js';
import InfoInput from './components/infoInput.js';
// import LinearGradient from 'react-native-linear-gradient';
import {Font, LinearGradient} from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: ''
    }
  }

  componentWillMount() {
    Font
      .loadAsync({'BerkshireSwash-Regular': require('./assets/fonts/BerkshireSwash-Regular.ttf')})
      .then(() => {
        let style = StyleSheet.create({
          logoText: {
            color: 'white',
            fontFamily: 'BerkshireSwash-Regular',
            fontSize: 40,
            textAlign: 'center',
            padding: 10
          }
        });
        this.setState({style});
      })
  }

  render() {
    return (
    <LinearGradient colors={['#e65d0a', '#860100']} style={{width: '100%', height: '100%'}}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Image
          style={{
          width: '100%',
          // height: 400
        }}
          source={require('./assets/images/birds.png')}/>
        <Text style={this.state.style.logoText}>Flokr</Text>
        <Text style={styles.text}>Let us know you are real</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             axios.get('https://blooming-gorge-89719.herokuapp.com/facebook/').then((res) => {
               console.log(res.data)}).catch((err) => { console.log(err); }) }}>
               <Text style={styles.buttonLable}>
               CONTINUE WITH FACEBOOK
               </Text>
               </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             axios .post('https://blooming-gorge-89719.herokuapp.com/facebook/', this.state) .then((res) => {
               console.log(res)}).catch((err) => { console.log(err); }) }}>
               <Text style={styles.buttonLable}>
               CONTINUE WITH INSTAGRAM
               </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>{console.log('help pressed')}} style={styles.helpContainer}>
                <Text style={styles.text}>
                ?
                </Text>
               </TouchableOpacity>
               <Text style={styles.text}>No worries! We never post anything to Facebook or Instagram</Text>
               <Text style={styles.termsOfService}>Terms of Service</Text>
      </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}
