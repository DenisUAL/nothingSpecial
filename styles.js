import {StyleSheet} from 'react-native';

const flokOrange = '#e65d0a';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: flokOrange,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    overflow: 'scroll'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 0,
    margin: 5
  },
  text: {
    fontFamily: 'sans-serif',
    color: 'white',
    textAlign: 'center',
    margin: 7,
    fontSize: 12
  },
  buttonLable: {
    fontFamily: 'sans-serif',
    color: 'black',
    textAlign: 'center',
    margin: 7
  },
  inputbox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  comment: {
    color: 'white',
    margin: 5,
    textAlign: 'left'
  },
  button: {
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    width: '100%'
  },
  helpContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  termsOfService: {
    fontFamily: 'sans-serif',
    color: 'white',
    textAlign: 'center',
    margin: 7,
    padding: 5,
    fontSize: 12,
    textDecorationLine: 'underline'
  }
});

export default styles;
