import * as React from 'react';
import {useState,useEffect} from 'react';
import {Text, View,TouchableOpacity,Platform, ImageBackground, FlatList,Button,ActivityIndicator,StyleSheet,SafeAreaView} from 'react-native';
import {DatePickerIOS} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MapView from 'react-native-maps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatePicker from 'react-native-datepicker';
import styless from '../Screens/Globalstyle';
//DATE PICKER
function YourApp ({ navigation }) {
  const [date, setDate] = useState('09-10-2020');

  return (
    <SafeAreaView style={styless.dpcontainer}>
      <View style={styless.dpcontainer}>
        <Text style={styless.dptitle}>
          React Native Date Picker – 
          To Pick the Date using Native Calendar
        </Text>
        <DatePicker
          style={styless.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
          <Button title=" Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

// ALTERNATE DATE PICKER
/*
function HomeScreen({ navigation }) {
  const [chosenDate, setChosenDate] = useState(new Date());

  
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
   <ImageBackground source={require('../assets/image1.jpeg')}style={{  height:1000}} >
      <DatePickerIOS
        date={chosenDate}
        onDateChange={setChosenDate}
      />
      <Text style={{fontSize:50}}>{chosenDate}</Text>
      <Button title=" Back" onPress={() => navigation.goBack()} />
      </ImageBackground>
    </View>
  );
}
*/

//FLATLIST ON TAPSCREEN

function listScreen({ navigation }) {
const [isloading, setLoading] = useState();
const [data, setData] = useState();
//console.log('testt',data)
const getdata = async () => {   
    try {
            const url = await fetch('https://api.github.com/users/hadley/orgs')  
        const json = await url.json();      
        setData(json);
    }
    catch (error) {
        console.error(error);
    }
    finally {
        setLoading(false);
    }
}
useEffect(() => {
    getdata();
}, []);
  return (
    <View style={{ flex: 1}}>
      {isloading ? <ActivityIndicator /> : (
                <FlatList
                 data={data}
                keyExtractor={item => item.id}
                 renderItem={({ item }) => (
                  <TouchableOpacity>
                       <View style={styless.flatlistborder}> 
                          <Text>{item.id}
                          </Text>
                          </View>
                  </TouchableOpacity>
              )}
               />             
              )}
              <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

//MAPVIEW BY CUSTOM LOCATION

function SetScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <Text>Sett</Text>
      <MapView  style={{flex: 1}} region={{    
        //location of adyar,chennai     
         latitude: 13.003387,
         longitude: 80.255043, 
          }} showsUserLocation={true}    
                   />  
                   <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="DatePicker" component={YourApp} />
        <Tab.Screen name="Settings" component={listScreen} />  
        <Tab.Screen name="Sett" component={SetScreen} />    
      </Tab.Navigator>
  );
}
