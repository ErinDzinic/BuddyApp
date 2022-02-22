import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';

const LoggedInPage = () => {

    const navigation = useNavigation()

    const handleSignOut = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.mainView}>
         <View style={styles.topImg}>
            <Image source={require('../pictures/buddy.png')}
            style={styles.slika}/>
          </View>
      <Text style={styles.text}>Welcome</Text>
        <Text style={styles.mailTxt}>{auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.signout}>Sign out</Text>
         </TouchableOpacity>
    </View>
  )
}

export default LoggedInPage

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ff3252'
    },
    button:{
        backgroundColor:'white',
        width:'60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:40,
    },
    signout:{
        color:'#ff3252',
        fontWeight:'700',
        fontSize: 16
    },
    text:{
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
    },
    mailTxt:{
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        fontFamily: 'monospace'
    },
    topImg:{
        height:'30%',
        justifyContent: 'center',
        alignItems:'center',
        bottom: 0,
      },
})