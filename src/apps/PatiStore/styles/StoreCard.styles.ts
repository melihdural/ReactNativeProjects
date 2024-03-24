import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
    backgroundColor: '#e1e5e7',
  },
  inner_container: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
  info_container: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7c7c7c',
  },
  inStock_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  inStock_title: {
    textAlign: 'center',
    color: 'red',
  },
});
