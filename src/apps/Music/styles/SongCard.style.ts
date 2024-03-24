import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  content_container: {
    flexDirection: 'row',
  },
  inner_container: {
    flex: 1,
    padding: 10,
    fontSize: 27,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldOut_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  soldOut_title: {
    color: 'red',
  },
});
