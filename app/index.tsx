import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet, Text, TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import Fontisto from '@expo/vector-icons/Fontisto';

interface IToDo{
  id: number;
  name: string
}


const LotsOfStyles = () => {

  const [todo, setToDo] = useState('')
  const [listtodo, setListToDo] = useState<IToDo[]>([])

  function randomNumber(minimum : number, maximum : number){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
  }

  const deleteToDo = (id: number) => {
    const newToDos = listtodo.filter(item => item.id != id)
    setListToDo(newToDos)
  }

  const handleAddToDo = () =>{
    if (!todo){
      Alert.alert('LỖI INPUT TODO', 'TODO KHÔNG ĐƯỢC ĐỂ TRỐNG',
        [
          {
            text: 'Hủy',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Xác nhận', onPress: () => console.log('OK Pressed')},
        ]
      )
      return
    }
    setListToDo([...listtodo, {id: randomNumber(2, 200000000), name: todo}])
    setToDo("")
  }

  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <Text style = {styles.header}> TO DO APP </Text>

        {/* Form  */}
        <View style = {styles.form}>
          <TextInput 
            value={todo}
            style = {styles.toDoInput} 
            onChangeText={(value) => setToDo(value)}
          />

          <Button 
            title='Thêm việc'
            color={'red'}
            onPress={handleAddToDo}
          />
        </View>

        {/* list to do */}
        <View style = {styles.todo}>
        
          <FlatList 
            data={listtodo}
            keyExtractor={item => item.id + ""}
            renderItem={data =>{
              return(
                <Pressable 
                onPress={() => deleteToDo(data.item.id)}
                style = {({pressed}) => ({opacity: pressed ? 0.5 : 1})}
                >
                 <View style = {styles.groupToDo}>
                  <Text style = {styles.todoItem}>{data.item.name}</Text>
                  <Fontisto name="close" size={24} color="black" />
                 </View>
                  

                </Pressable>
              )
            }}
          />
        x

        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};


const styles = StyleSheet.create({
  groupToDo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderStyle: 'dashed',
    marginBottom: 15 ,
    marginHorizontal: 10,
    padding: 10,
    


  },
  header : {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60
  },
  container: {
    paddingTop: 50,
  
    flex : 1,
    
  },
  toDoInput: {
    borderBottomWidth: 1,
    borderColor: 'green',
    padding: 5,
    marginHorizontal: 15,
    marginTop: 15,
    margin: 15
  },

  todoItem : {
    fontSize: 20,
    // borderWidth: 1,
    // // marginBottom: 20,
    // borderStyle: 'dashed',
    // padding: 10
  },

  body:{
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  form : {
    marginBottom: 10
  },
  todo : {
    flex: 1
  }
});








































export default LotsOfStyles









