import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/AddToDo.styles.ts';
import {useState} from 'react';

// @ts-ignore
const AddToDo = props => {
  const [textInput, setTextInput] = useState('');
  const handlePress = () => {
    if (textInput.trim() !== '') {
      props.onPress(textInput);
      setTextInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={text => setTextInput(text)}
      />
      <TouchableOpacity
        onPress={handlePress}
        style={
          textInput.length > 0
            ? styles.button_container_active
            : styles.button_container_passive
        }>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDo;
