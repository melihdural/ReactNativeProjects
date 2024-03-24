import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#36454d',
    padding: 8,
    margin: 5,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#758b97',
    padding: 10,
  },
  button_container_active: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#ea990d',
  },
  button_container_passive: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#7c7c7c',
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
