import styles from '../../styles/SongCard.style.ts';
import {Image, Text, View} from 'react-native';

// @ts-ignore
const SongCard = ({song}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
          {song.isSoldOut && (
            <View style={styles.soldOut_container}>
              <Text style={styles.soldOut_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
