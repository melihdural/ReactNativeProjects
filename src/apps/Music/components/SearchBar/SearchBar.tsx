import {TextInput, View} from 'react-native';
import styles from '../../styles/SearchBar.styles.ts';

// @ts-ignore
const SearchBar = props => {
  return (
    <View>
      <TextInput
        style={styles.container}
        placeholder="Ara..."
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default SearchBar;
