import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, SafeAreaView ,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import styless from './Screens/Globalstyle';
const STORAGE_KEY1 = '@save_age1'
const STORAGE_KEY2 = '@save_age2'
const YourApp = ({navigation}) => {
 
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [cpass, setcPassword] = useState('');

  const [semail, setsEmail] = useState("");
  const [spass, setsPassword] = useState('');

 const signup=()=>{
  if (!email) {
    alert("enter email")
  }
  else if (!pass) {
    alert("enter password")
  }
  else if (!cpass) {
    alert("enter confirm password")
  }
  else if (pass.length < 1) {
    alert(" password mustbe morethan 6 characters")
  }
  else if (pass !=  cpass) {
    alert("pass and confirm pass must be same")
  }
  else {   
    alrt()
  
  }
 }

const alrt =()=>{
  alert("signup successfully")
  saveData();
 

}

 const signin=()=>{
  
  //console.log("from signup",email)
   navigation.goBack();
   
 // navigation.navigate("LOGIN",{pass,email});
}
const saveData = async () => {
  console.log(pass)
  try {
    await AsyncStorage.multiSet([[STORAGE_KEY1, pass],[STORAGE_KEY2, email]]);
    alert('Data successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}
const dData = async () => {
let keys = [STORAGE_KEY1,STORAGE_KEY2];
AsyncStorage.multiRemove(keys, (err) => {
  // keys k1 & k2 removed, if they existed
  // do most stuff after removal (if you want)
});
}

// const readData = async () => {
//   try {
//     AsyncStorage.multiGet([STORAGE_KEY1, STORAGE_KEY2], (err, items) => {
//       console.log("shajvx",items,"err",err);
//       items.map((result, i, store) => {
//         // get at each store's key/value so you can work with it
//         let key = store[i][0];
//         let value = store[i][1];
//         console.log("keyy",key)
//         console.log("value",value)
//       });
//     });
//   } catch (e) {
//     alert('Failed to fetch the data from storage')   
//   }
// }



  return (
    <SafeAreaView style={{ flex: 1 }}>
    {/* <ImageBackground source={require('./assets/image1.jpeg')}  style={styless.stack}> */}
    <Text style={styless.identifier}>USER ID</Text>
    <TextInput style={styless.textbox} placeholder="Enter your e-mail"
      onChangeText={text => { setEmail(text) }}
      >{}</TextInput>
    <Text style={styless.identifier}>PASSWORD</Text>
    <TextInput style={styless.textbox} placeholder="Enter your password"
     onChangeText={text => { setPassword(text) }}
      >{}</TextInput>
      <Text style={styless.identifier}>CONFIRM PASSWORD</Text>
    <TextInput style={styless.textbox} placeholder="Enter your password"
      onChangeText={text => { setcPassword(text) }}
      >{}</TextInput>

    <TouchableOpacity onPress={signup}>
       <Text style={styless.signup}>signup</Text>
      
    </TouchableOpacity>
    <Text onPress={signin}>back to signin</Text>
    
    {/* <TouchableOpacity onPress={readData}>
       <Text style={styless.signup}>readdd</Text>
      
    </TouchableOpacity> */}
    {/* <TouchableOpacity onPress={dData}>
       <Text style={styless.signup}>dddddd</Text>
      
    </TouchableOpacity> */}
    {/* </ImageBackground> */}
  </SafeAreaView>
  );
}

export default YourApp;