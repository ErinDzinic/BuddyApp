import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import * as Location from 'expo-location';

export default function SecondPage({navigation,route}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { ime,prezime } = route.params;

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
      <Image source={require('../pictures/earth.png')}
                style={styles.img}
                />         
      </View>
      <View style={styles.txtView} >
        <Text style={styles.txt}>Welcome {ime}{prezime}</Text>
        <Text style={styles.txt}>Tell us where you live</Text>
        <Text>We need your location for better experience </Text>
        <View style={styles.btn}>
        <Button
                title='Next'
                onPress={()=> navigation.navigate('Login')}
                color = 'white'
                />
        </View>       
      </View> 
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      display:'flex',
      backgroundColor: 'rgb(255,95,116)',
    },
    txt:{
      fontWeight: 'bold',
      fontSize: 37,
      fontFamily: 'notoserif'
    },
    btn:{
      display:'flex',
      top: 50
      
    },
    img:{
      width:400,
      height: 350,
      alignContent:'center',
      justifyContent: 'center'
    },
    imgView: {

      top:0,
      borderBottomLeftRadius: 200,
      borderBottomRightRadius: 200,
      position: "absolute",
    },
    txtView:{
        width: '100%',
        height:'100%',
        alignItems:'center',
        position:'absolute',
        top: 500
    }
    
  });
