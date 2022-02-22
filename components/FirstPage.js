import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image, KeyboardAvoidingView} from 'react-native';
//import { AsyncStorage } from 'react-native';
import React, { useState } from 'react';

export default function FirstPage({navigation}){
      const [name,setName] = useState('');
      const [surname,setSurname] = useState('');

    return(

        <KeyboardAvoidingView style={styles.container}>

          <View style={styles.topImg}>
            <Image source={require('../pictures/buddy.png')}
            style={styles.slika}/>
          </View>

          <View style={styles.container2}>
                <Text style={styles.text}>Please introduce youself</Text>
           </View>

           <View style={styles.inputView}>
           <Text style={styles.textInput}>Name</Text>
            <TextInput
                style={styles.inputField}
                placeholder='e.g. Erin'
                underlineColorAndroid="transparent"
                returnKeyLabel = {"next"}
                value={name}
                onChangeText={text => setName(text)}
                />
            <Text style={styles.textInput}>Surname</Text>
            
            <TextInput
                style={styles.inputField}
                placeholder='e.g. Dzinic'
                underlineColorAndroid="transparent" 
                value={surname}
                onChangeText={text => setSurname(text)}
                />
           </View>

        <TouchableOpacity style={styles.btn} onPress={()=> {navigation.replace('Location',{ime:name,prezime:surname})}}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
       
    );
}

const styles = StyleSheet.create({

      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        display:'flex',
        width:'100%',
        height:'100%',
        backgroundColor: '#ff3252',
      },
      container2: {
        width: '90%',
        bottom: 100
      },
      textInput:{
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 20,
        color: 'white'
        
    },
      inputView:{
        
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      topImg:{
        height:'30%',
        justifyContent: 'center',
        alignItems:'center',
        bottom: 100,
      },
      slika: {
        top: 20
      },

      inputField: {
        borderWidth: 0.8,
        width:'90%',
        height: 40,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'white',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'white'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'white',
        textTransform: 'uppercase',
        alignSelf: 'center',
        
      },

      slika2: {
            width: 250,
            height:250,
            alignSelf: 'flex-start',
            position:'absolute',
            top: 320,
            right: 150
      },
      btn:{
        top: 20,
        backgroundColor: '#ff3252',
        width: '20%',
        alignItems:'center',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-end',
        right: 20,
        borderWidth: 1,
        borderColor:'white'
      },
      btnText:{
        color: 'white'
      },
  });

