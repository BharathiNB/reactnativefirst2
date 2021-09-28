
import * as React from 'react';
import { Button, View ,Image,Text,ScrollView,StyleSheet,ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/Homescreen';
import Screen1 from '../Screens/Screen1';
import Nextpage  from '../Screens/nextpage';
import styless from '../Screens/Globalstyle';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
  //  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen style={{alignItems: "flex-end "}} name="Home" component={HomeScreen}/>
        <Drawer.Screen name="VIEW DETAILS" component={Screen1} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        <Drawer.Screen name = "nextpage" component={Nextpage} options={{ headerShown: false }}/>
      </Drawer.Navigator>
  
  //  </NavigationContainer>
  );
  
  }
 