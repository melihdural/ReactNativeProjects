import styles from '../../styles/Header.styles.ts';
import {Text, View} from 'react-native';

// @ts-ignore
const Header = ({listElements}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Yapılacaklar</Text>
      <Text style={styles.header}>{listElements.length}</Text>
    </View>
  );
};

export default Header;
