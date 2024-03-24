import {Image, Text, View} from 'react-native';
import styles from '../../styles/StoreCard.styles.ts';

// @ts-ignore
const StoreCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      {!product.inStock && (
        <View style={styles.inStock_container}>
          <Text style={styles.inStock_title}>STOKTA YOK</Text>
        </View>
      )}
    </View>
  );
};

export default StoreCard;
