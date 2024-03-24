import SongCard from './components/SongCard/SongCard.tsx';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import music_data from '../../data/music-data.json';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import {useState} from 'react';

const MusicApp = () => {
  const [list, setList] = useState(music_data);

  // @ts-ignore
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={style.seperator} />;

  // @ts-ignore
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={style.container}>
      <SearchBar onSearch={handleSearch} />
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};

export default MusicApp;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#ACABAB',
  },
});
