import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

// Video 5 


// const LotsOfStyles = () => {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.header}>Hello1</Text>
//         <Text style={styles.parent}>Hello2
//           <Text style = {styles.child}> bla bla</Text></Text>
//       </View>

//       <Text style={styles.hello1}>just red</Text>
//       <Text>just bigBlue</Text>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 110
//     flex : 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   hello1 : {
//     color : 'violet', 
//     borderColor : 'green',
//     borderWidth : 2,
//     fontSize: 100,
//     padding: 20
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 600
//   },
//   parent: {
//     fontSize: 60,
//     color: 'green'
//   },
//   child: {
//     fontSize: 30,
//     color: 'blue'
//   }
  
// });

// VIDEO 6



// const LotsOfStyles = () => {



//   const [name, setName] = useState<string>("eric")  // để khi thay đổi giá trị nó tự động render 
//   const [test, setTest] = useState({
//     name: "Hieu",
//     age: 30
//   })  


//   const [count, setCount] = useState(0)

//   return (
//     <View style={styles.container}>
//         <Text style = {{fontSize : 20, fontWeight : '600'}}> 
//           {/* {test.age} 
//           {JSON.stringify(test)}
//           Vo Van Hieu  */}
//           Khánh Linh
//           count = {count}
//         </Text>
//         <View>
//         <Button title='Increase' onPress={() => setCount(count + 1)}>

//         </Button>
//         </View>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 110
//     flex : 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
  
// });

// VIDEO 6



// const LotsOfStyles = () => {


//   const [count, setCount] = useState(0)
//   const [name, setName] = useState("")
//   const [age, setAge] = useState(0)

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style = {{fontSize : 20, fontWeight : '600'}} >
//           Name : {name}
//         </Text>

//         <TextInput 
//           multiline
//           autoCapitalize = {'words'}
//           onChangeText={(value) => setName(value)}
//           style = {{
//             borderColor: 'green',
//             borderWidth: 2,
//             width: 200,
//             padding: 15
//           }}>
//           </TextInput>
//       </View>


//       <View>
//         <Text style = {{fontSize : 20, fontWeight : '600'}} >
//           Age : {age}
//         </Text>

//         <TextInput 
//           onChangeText={(value) => setAge(+value)}  // + convert string sang number
//           style = {{
//             borderColor: 'green',
//             borderWidth: 2,
//             width: 200,
//             padding: 15
//           }}
//           keyboardType = 'numeric'
//           maxLength={2}
//           />
          
      
//       </View>
        

//       <Text style = {{fontSize : 20, fontWeight : '600'}}> 
//         count = {count}
//       </Text>

//       <View>
//         <Button 
//           color={"red"}
//           title='Increase' onPress={() => setCount(count + 1)}>

//         </Button>
//       </View>

//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     // marginTop: 110
//     flex : 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
  
// });




// VIDEO 7, 8




// const LotsOfStyles = () => {

//   const [students, setStudents] = useState([
//     {id: 1, name: 'Hieu1', age: 18},
//     {id: 2, name: 'Hieu2', age: 18},
//     {id: 3, name: 'Hieu3', age: 18},
//     {id: 4, name: 'Hieu4', age: 18},
//     {id: 5, name: 'Hieu5', age: 18},
//     {id: 6, name: 'Hieu6', age: 18},
//     {id: 7, name: 'Hieu7', age: 18},
//     {id: 8, name: 'Hieu8', age: 18},
//     {id: 9, name: 'Hieu9', age: 18},
//     {id: 10, name: 'Hieu10', age: 18},
//     {id: 11, name: 'Hieu11', age: 18}
//   ])

//   return (
//     <View style={styles.container}>

//       <Text style = {{fontSize: 60}}> Hello World </Text>

//       <FlatList
//         data = {students}
//         numColumns={2}
//         keyExtractor={item => item.id + ""}
//         renderItem={(data) => {
//           return(
//             <View style = {{
//               padding: 15,
//               backgroundColor: "pink",
//               marginBottom: 30,
//               marginHorizontal: 30
//             }}>
//               <Text>{data.item.name}</Text>
//             </View>
//           )
//         }}
//       />
        
        

//       {/* 
//       <ScrollView>
//         {students.map(item => {
//           return(
//             <View key={item.id} style = {{
//               padding: 15,
//               backgroundColor: "pink",
//               marginBottom: 30
//             }}>
//               <Text>{item.name}</Text>
//             </View>
//           )
//         })}
//       </ScrollView> */}

//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     flex : 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   }
  
// });


// VIDEO 9



const LotsOfStyles = () => {

  const [students, setStudents] = useState([
    {id: 1, name: 'Hieu1', age: 18},
    {id: 2, name: 'Hieu2', age: 18},
    {id: 3, name: 'Hieu3', age: 18},
    {id: 4, name: 'Hieu4', age: 18},
    {id: 5, name: 'Hieu5', age: 18},
    {id: 6, name: 'Hieu6', age: 18},
    {id: 7, name: 'Hieu7', age: 18},
    {id: 8, name: 'Hieu8', age: 18},
    {id: 9, name: 'Hieu9', age: 18},
    {id: 10, name: 'Hieu10', age: 18},
    {id: 11, name: 'Hieu11', age: 18}
  ])

  return (
    <View style={styles.container}>

      <Text style = {{fontSize: 60}}> Hello World </Text>

      <FlatList
        data = {students}
        numColumns={2}
        keyExtractor={item => item.id + ""}
        renderItem={(data) => {
          return(
            <View style = {{
              padding: 15,
              backgroundColor: "pink",
              marginBottom: 30,
              marginHorizontal: 30
            }}>
              <Text>{data.item.name}</Text>
            </View>
          )
        }}
      />
        
        

      {/* 
      <ScrollView>
        {students.map(item => {
          return(
            <View key={item.id} style = {{
              padding: 15,
              backgroundColor: "pink",
              marginBottom: 30
            }}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex : 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
  
});








































export default LotsOfStyles









