import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,Alert} from 'react-native';
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
        <Text style={styles.txt1}>Hello {ime} {prezime}</Text>
        <Text style={styles.txt2}>We need access to: </Text>
        <Text style={styles.txt3}></Text>
        <View style={styles.locView}>
        <View style={styles.location}>
        <Image source={require('../pictures/location.png')}
                style={styles.locationImg}
                /> 
                
        </View>
        <View style={styles.locationView}>
        <Text style={styles.locationTxt1}> Location!</Text>
        <Text style={styles.locationTxt2}> To display fun stuff about user's location</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.replace('Login')}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
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
      backgroundColor: '#ff3252',
    },
    txt1:{
      fontWeight: 'bold',
      fontSize: 40,
      color: 'white',
    },
    txt2:{
      fontWeight: '700',
      fontSize: 30,
      color: 'white',
    },
    txt3:{
      fontWeight: '700',
      fontSize: 20,
      color: 'white',
    },
    location:{
      height: '10%',
      alignSelf: 'flex-start'
    },
    locationImg:{
      width: 50,
      height: 50,
      right: 20
    },
    locationView:{
      alignSelf: 'flex-end',
      left: 55,
      bottom: 7
      
    },
    locView:{
      left: 35
    },
    locationTxt1:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    locationTxt2:{
      color: 'white',
      fontWeight: '400',
      fontSize: 15,
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
      //justifyContent: 'center',
      alignItems: 'flex-start',
      top: 135,
      right: 40
    },
    btn:{
      top: 40,
      backgroundColor: '#ff3252',
      width: 100,
      alignItems:'center',
      borderRadius: 10,
      padding: 5,
      alignSelf: 'flex-end',
      left: 70,
      borderWidth: 1,
      borderColor:'white'
    },
    btnText:{
      color: 'white'
    },
    
  });
