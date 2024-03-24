import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ToDoCard.styles.ts';

// @ts-ignore
const ToDoCard = props => {
  const handleLongPress = () => {
    props.onDelete(props.toDo.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onLongPress={handleLongPress}
        style={
          props.toDo.isActive
            ? styles.inner_container_active
            : styles.inner_container_passive
        }>
        <Text
          style={
            props.toDo.isActive
              ? styles.toDo_item_active
              : styles.toDo_item_passive
          }>
          {props.toDo.value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCard;
