import React from 'react';
import { Text, View,Button } from 'react-native';
import YouTube from 'react-native-youtube';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';
import styless from '../Screens/Globalstyle';



const YourApp = ({navigation}) => {
  return (
    <View style={styless.youtube}>
      <Text>
        Try editing me! 🎉
      </Text>
      <YoutubePlayer
        height={400}
        width={450}
        play={true}
        videoId={'WB-y7_ymPJ4'}
      />
{/* YOUTUBE THROUGH WEBVIEW */}

      {/* <WebView 
      height={100}
      width={400}
      source={{ uri: 'https://www.youtube.com/watch?v=-BUDo3mow00' }} /> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default YourApp;