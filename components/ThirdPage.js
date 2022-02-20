import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';

const ThirdPage = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigation = useNavigation()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user){
        navigation.navigate("LogOut")
      }
    })
    return unsubscribe
  },[])

  const hangleSignUp = () =>{
    auth
      .createUserWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered in with: ', user.email)
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () =>{
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with: ', user.email)
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView  style={styles.main}>

    <View style={styles.inputView}>
      <TextInput placeholder='E-Mail'
      value={email} 
      onChangeText={text => setEmail(text) }
      style={styles.input}>
      </TextInput>

      <TextInput placeholder='Password'
      secureTextEntry
      value={password } 
      onChangeText={text => setPassword(text) }
      style={styles.input}>
      </TextInput>

    </View>

    <View style={styles.buttonView}>
      <TouchableOpacity onPress={handleLogin}
      style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={hangleSignUp}
      style={[styles.button,styles.buttonOutLine]}>
        <Text style={styles.buttonOutLineText}>Register</Text>
      </TouchableOpacity>

    </View>


    </KeyboardAvoidingView>
  )
}

export default ThirdPage

const styles = StyleSheet.create({
  
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
input:{
  
},
inputView:{
  width: '80%',
  backgroundColor: 'yellow',
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 5
},
buttonText:{
  color:'white',
  fontWeight: '700',
  fontSize: 16,

},
buttonView:{
  width:'60%',
  justifyContent:'center',
  alignItems:'center',
  marginTop: 40
},
button:{
  backgroundColor: 'blue',
  width:'100%',
  padding: 15,
  borderRadius: 10,
  alignItems:'center'
},
buttonOutLine:{
  backgroundColor: 'red',
  marginTop: 5,
  borderColor: 'green',
  borderWidth: 1
},
buttonOutLineText:{
  color:'blue',
  fontWeight: '700',
  fontSize: 16,
}

})