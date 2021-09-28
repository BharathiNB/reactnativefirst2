
import React from 'react';
import {  Button, View, Text } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Image, TouchableOpacity ,SafeAreaView} from 'react-native';

const YourApp = () => {
    const [isloading, setLoading] = useState();
    const [data, setData] = useState();
    console.log("testtt",data)
    const getdata = async () => {
        try {
            const url = await fetch('https://kuwycredit.in/servlet/rest/ltv/forecast/ltvMakes',
            {
            method:'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                year:'2020'
            })
        });
            const json = await url.json();
          // console.log("testtt",json)
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
   

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     

      {isloading ? <ActivityIndicator /> : (
           <Text>
           Try editing me! 🎉{data.makeList }
       
        
    
                <FlatList
                    data={data}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                              //  <Text>   
                                item.makeList
                                
                                
                              //  </Text>
                       
                    )}
                />
                  </Text>
            )}
    </View>
  );
}

export default YourApp;