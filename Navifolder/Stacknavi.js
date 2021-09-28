import * as React from 'react';
import { Button, View, Text, Backgroundcolor, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../Loginscreen';
import Drawerscreen from '../Navifolder/Drawernavi';
import Tabscreen from '../Navifolder/Tabnavi';
import Youtube from './Youtube';
import Webview from './Webview';
import styless from '../Screens/Globalstyle';
import SignupScreen from '../Signupscreen';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground source={require('../assets/image1.jpeg')} style={styless.stack} >
        <Text style={styless.navigationtext}>DRAWER NAVIGATION DEMO</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('DRAWER')}
        />
        <Text style={styless.navigationtext}>TAB NAVIGATION DEMO</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('TAB')}
        />
        <Text style={styless.navigationtext}>YOUTUBE</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('YOUTUBE')}
        />
        <Text style={styless.navigationtext}>WEBVIEW</Text>
        <Button
          title="CLICK"
          color="#ffff"
          onPress={() => navigation.push('WEBVIEW')}
        />
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen name="LOGIN" component={Loginscreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HOME" component={DetailsScreen} />
        <Stack.Screen name="DRAWER" component={Drawerscreen} options={{ headerShown: false }} />
        <Stack.Screen name="TAB" component={Tabscreen} options={{ headerShown: false }} />
        <Stack.Screen name="YOUTUBE" component={Youtube} options={{ headerShown: false }} />
        <Stack.Screen name="WEBVIEW" component={Webview} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;