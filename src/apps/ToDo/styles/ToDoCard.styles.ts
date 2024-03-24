import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  inner_container_active: {
    flex: 1,
    padding: 10,
    fontSize: 27,
    fontWeight: 'bold',
    justifyContent: 'center',
    backgroundColor: '#789e52',
  },
  inner_container_passive: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#36454d',
  },
  toDo_item_active: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  toDo_item_passive: {
    fontSize: 16,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    textDecorationColor: '#7a7b7b',
    color: '#7a7b7b',
  },
});
