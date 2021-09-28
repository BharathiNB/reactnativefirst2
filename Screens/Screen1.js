import React from 'react';
import { Text, View ,Image,Button, ImageBackground} from 'react-native';

import styless from '../Screens/Globalstyle';


const YourApp = ({ route,navigation }) => {
    return (
        <View style={{ flex: 1,alignItems:"center"}}>
            {/* <ImageBackground source={require('../assets/image1.jpeg')}style={{  height:1000}} > */}
            <Text> 🎉 {route.params.item.id} </Text>
            <Image
            style={styless.viewlogo}  
            source={{uri: (route.params.item.avatar_url)}}
            />
      <Button title = "nextpage to tap navigator with hamburger" onPress={()=>navigation.navigate("nextpage")}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* </ImageBackground> */}
        </View>
    );
}
export default YourApp;

