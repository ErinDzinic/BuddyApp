import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';

const LoggedInPage = () => {

    const navigation = useNavigation()

    const handleSignOut = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.main}>
      <Text>Welcome:{auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.signout}>Sign out</Text>
         </TouchableOpacity>
    </View>
  )
}

export default LoggedInPage

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'yellow',
        width:'60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:40,
    },
    signout:{
        color:'white',
        fontWeight:'700',
        fontSize: 16
    }

})