import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  text: {
    fontSize: 18,
    margin: 10,
    marginTop: 3,
  },
  button_container: {
    backgroundColor: '#00C2FF',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start',
  },
  button_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-end',
  },
});
