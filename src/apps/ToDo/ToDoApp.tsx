import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/Header.tsx';
import AddToDo from './components/AddToDo/AddToDo.tsx';
import {useState} from 'react';
import ToDoCard from './components/ToDoCard/ToDoCard.tsx';

const ToDoApp = () => {
  const [list, setList] = useState([
    {id: 0, value: 'Çöp dökülecek', isActive: true},
    {id: 1, value: 'Oda toplanacak', isActive: false},
    {id: 2, value: 'Ayakkabı temizlenecek', isActive: false},
    {id: 3, value: 'Markete gidilecek', isActive: true},
  ]);

  // @ts-ignore
  const handleAddElement = text => {
    // @ts-ignore
    setList([...list, {id: list.length, value: text, isActive: true}]);
  };

  // @ts-ignore
  const handleToDoStatus = id => {
    let completedItem = list.find(listElement => listElement.id == id);
    if (completedItem != null) {
      completedItem.isActive = !completedItem.isActive;
      setList([...list].sort(x => x.id));
    }
  };

  // @ts-ignore
  const renderToDoList = ({item}) => (
    <ToDoCard onDelete={handleToDoStatus} toDo={item} />
  );

  return (
    <SafeAreaView style={style.container}>
      <Header listElements={list.filter(x => x.isActive)} />
      <FlatList data={list} renderItem={renderToDoList} />
      <AddToDo onPress={handleAddElement} />
    </SafeAreaView>
  );
};

export default ToDoApp;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#122128',
  },
});
