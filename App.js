import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Sandbox from './components/sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffe', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ]);//list on the Todo

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }//press the todo, then it gets deleted if it exists on the list.

  //TODO PRESSHANDLER TO EDIT TEXT

  const submitHandler = (text) => {
    if(text.length > 3){

      setTodos((prevTodos) =>{

        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos // use ... to copy elements of an old array to a new one
        ];
      });//submit to the list

    }else{
      Alert.alert('OOPS!', 'Todos must be over three characters long.',
      [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]) // first title, than message on the alert and finally the button.
    }

    
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
      }}>

      <View style={styles.container}>

        <Header/>  

        <View style={styles.content}>

          <AddTodo submitHandler={submitHandler} />  

          <View style={styles.list}>

            <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            /> 

          </View>   

        </View>

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
