import { StyleSheet, Text, View, TextInput, Image, Alert,Button, KeyboardAvoidingView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FirstPage({navigation}){

    return(
        <>
        
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Image source={require('../pictures/circle.png')}
            style={styles.slika}
            />
        
        <View style={styles.zajedno}>
            <View style={styles.container2}>
                <Text style={styles.text}>Please</Text>
                <Text style={styles.text}>Introduce</Text>
                 <Text style={styles.text}>yourself</Text>
             </View>
        <View style={styles.NameSurname}>
            <Text style={styles.text2}>Name</Text>
            <TextInput
                style={styles.inputField}
                placeholder='e.g. Erin'
                underlineColorAndroid="transparent"
                />
            <Text style={styles.text2}>Surname</Text>
            
            <TextInput
                style={styles.inputField}
                placeholder='e.g. Dzinic'
                underlineColorAndroid="transparent" />
                <Image source={require('../pictures/circle.png')}
                style={styles.slika2}
                />
                
        </View>
            <View styles={styles.btn}>
                {/* <MyBtn 
                navigation={'Location'}
                />  */}
               
                </View>
                
        </View>
        <View style={styles.btn}>
        <Button
                title='Next'
                onPress={()=> navigation.navigate('Location')}
                color = 'white'
                />
        </View>       
        </KeyboardAvoidingView>
        </>
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
        backgroundColor: 'rgb(255,95,116)',
      },
      container2: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
        
      },
      zajedno:{
        bottom: 250,
        alignItems: 'center'
      },

      inputField: {
        borderWidth: 0.5,
        width: 250,
        height: 40,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'white',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color:'white',
        textTransform: 'uppercase',
        textAlign: 'left',
        alignSelf: 'flex-start',
        padding: 5,
        right: 50,
        marginTop: 5
      },
      text2:{
          marginTop: 15,
          fontWeight: 'bold',
          paddingTop: 5
      },

      NameSurname: {
          width: '100%',
          alignItems: 'flex-start',
          top: 50,
          margin: 10

      },

      slika: {
        width: 310,
        height: 320,
        alignSelf: 'flex-end',
        top: -180,
        left: 150,
        
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
        position:'absolute',
        bottom: 50,
        
      },

      button:{
        borderRadius:20,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        width: 100,
        alignItems: 'center',
        position: 'absolute',
        top: 100
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'auto'
    }
  });

