import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import news_data from '../../data/news_data.json';
import news_banner_data from '../../data/news_banner_data.json';
import ScrollView = Animated.ScrollView;
import NewsCard from './components/NewsCard.tsx';

const NewsApp = () => {
  // @ts-ignore
  const renderNews = ({item}) => <NewsCard news={item} />;
  const listHeader = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {news_banner_data.map(bannerNews => (
          <Image
            style={styles.banner_image}
            source={{uri: bannerNews.imageUrl}}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={listHeader}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default NewsApp;
