import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import store_data from '../../data/patistore_data.json';
import StoreCard from './components/StoreCard/StoreCard.tsx';
import {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar.tsx';

const PatiStoreApp = () => {
  const [list, setList] = useState(store_data);

  // @ts-ignore
  const renderProduct = ({item}) => <StoreCard product={item} />;

  // @ts-ignore
  const handleSearch = text => {
    const filteredList = store_data.filter(product => {
      const searchText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>PATIKASTORE</Text>
      <SearchBar onSearch={handleSearch} />
      <View>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={list}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default PatiStoreApp;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 10,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#7c037c',
  },
});
