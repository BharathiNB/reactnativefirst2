


import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import styless from '../Screens/Globalstyle';

const HomeScreen = ({ navigation }) => {
    const [isloading, setLoading] = useState();
    const [data, setData] = useState();
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
    const pressingaction = (item) => {
        //console.warn("tes",item.login);
        navigation.navigate('VIEW DETAILS', { item });
    }
    return (

        <SafeAreaView style={styless.flatlist}>
            {/* <ImageBackground source={require('../assets/image1.jpeg')} style={{ height: 1000 }} > */}
            {isloading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={item => item.item}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => pressingaction(item)}>
                            <View style={styless.flatlistborder}>
                                <Text style={styless.identifier}><Image
                                    style={styless.tinyLogo}
                                    source={{
                                        uri: (item.avatar_url)
                                    }}
                                />   {item.login}
                                </Text></View>
                        </TouchableOpacity>
                    )}
                />
            )}
            {/* </ImageBackground> */}
            <Button onPress={() => navigation.goBack()} title="Go Back Home" style={styless.Button} />
        </SafeAreaView>
    );
}

export default HomeScreen;