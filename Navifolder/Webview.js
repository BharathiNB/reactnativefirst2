import React from 'react';
import { Text, SafeAreaView,Button } from 'react-native';
import { WebView } from 'react-native-webview';
import styless from '../Screens/Globalstyle';
const YourApp = ({navigation}) => {
  return (
    <SafeAreaView style={styless.webview}>
      <Text style={styless.identifier}>
      webview
      </Text>
     
      <WebView 
      height={100}
      width={400}
      source={{ uri: 'https://www.google.com' }} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default YourApp;