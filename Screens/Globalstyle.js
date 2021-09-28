import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styless = StyleSheet.create({
    navigationtext: {
        fontSize: 20,
    },
    stack: {
        alignItems: 'stretch',
        paddingLeft: 10,
        height: 1000
    },
    identifier: {
        color: "#d0def2",
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 15,
        alignItems: "stretch"
    },
    textbox: {
        height: 50,
        width: 350,
        margin: 12,
        borderWidth: 2,
        borderColor:"#d0def2",
        padding: 16,
    },
    signup: {
        paddingVertical: 14,
        paddingHorizontal: 313,
        fontSize: 20,
        color: "#d0def2"

    },

    signin: {

        textAlign: "left",
        paddingLeft:12,
        fontSize: 25,
        color: "#d0def2"

    },
    tinyLogo: {

        width: 100,
        height: 100,

    },
    viewlogo:{
        width: 400,
        height: 400,
         resizeMode:'stretch'
        },

   
    Button: {
        fontWeight: 'bold'
    },
    flatlist: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 5
    },
    flatlistborder:{
        paddingBottom: 20,
         borderBottomWidth: 0.5, 
         paddingTop: 5 
    },
    dpcontainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dptitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
      youtube:{
          flex: 1,
           justifyContent: "center", 
           alignItems: "center" 
      },
      webview:{
           flex: 1, 
           paddingTop:50,
            alignItems: "center" 
        },
       


});

export default styless;



//https://github.com/BharathiNB/reactnativefirst2.git