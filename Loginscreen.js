
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';
import { Text, TextInput, View, StyleSheet,SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import styless from './Screens/Globalstyle';
const STORAGE_KEY1 = '@save_age'
const STORAGE_KEY2 = '@save_age2'
const YourApp = ({navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [mail1, setmail1] = useState("");
  const [pass1, setPass1] = useState("");
  
  const setmail = (text) => {
    setEmail(text);
  }
  const setpass = (text) => {
    setPassword(text);
  }
  const pressingaction = () => {
     readData();
    console.log("fffff",email)
    console.log("fffff",pass)
    console.log("fffff",mail1)
    console.log("fffff",pass1)
    if (!email) {
      alert("enter email")
    }
    else if (!pass) {
      alert("enter password")
    }
    // else if (pass.length < 6) {
    //   alert(" password mustbe morethan 6 characters")
    // }
    // else if (email != "Test123@gmail.com" || pass != "Test@123") {
    //   alert("Invalid details")
    // }
    else if ((email!==mail1 || pass!==pass1) && (email!="Test123@gmail.com" || pass!="Test@123")){
      alert("Invalid details")
    }
    else {
      alert("signin successfully")
      navigation.navigate("HOME");
    }
  }

  const signup=()=>{
    navigation.navigate("SignUpScreen");
  }
  
  const readData = async () => {
    try {
      AsyncStorage.multiGet([STORAGE_KEY1, STORAGE_KEY2], (err, items) => {
        console.log(items)
        let getPass = items[0]
        let getMail = items[1]
        console.log("ue",getMail[1],getPass[1])
        setmail1(getMail[1])
        setPass1(getPass[1])

        // items.map((result, i, store) => {
        //   // get at each store's key/value so you can work with it
        //   let key = store[i][0];
        //   let value = store[i][1];  
        // });
      });
    } catch (e) {
      alert('Failed to fetch the data from storage')   
    }
  }
  
  return ( 
    <SafeAreaView style={{ flex: 1}}>
     

    
      <ImageBackground source={require('./assets/image1.jpeg')}  style={styless.stack}>
      <View style={{paddingTop:300}}>
      <Text style={styless.identifier}>USER ID</Text>
      <TextInput style={styless.textbox} placeholder="Enter your e-mail"
        onChangeText={text => { setmail(text) }}>{}</TextInput>
      <Text style={styless.identifier}>PASSWORD</Text>
      <TextInput style={styless.textbox} placeholder="Enter your password"
        onChangeText={text => { setpass(text) }}>{}</TextInput>
       <TouchableOpacity onPress={signup}>
         <Text style={styless.signup}>signup?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressingaction} >
        <Text style={styless.signin}>signin</Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={readData}>
       <Text style={styless.signup}>readdd</Text>
      
    </TouchableOpacity>
    </View>
      </ImageBackground>
     
    </SafeAreaView>
  );
}
export default YourApp;