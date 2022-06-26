import React, { useState } from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, SliderComponent} from 'react-native'
import { TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogAction = ({navigation}) => {

    const [person, setPerson] = useState('')
    const [method, setMethod] = useState('')
    const [miles, setMiles] = useState('')

    const addData1 = async() =>{
      const value = await AsyncStorage.getItem('@log')
      const newValue = value + "," + person + ":" + method + ":" + miles + ":" + toString(parseInt(miles)*411)
      AsyncStorage.setItem('@log', newValue)
      navigation.navigate("Log");
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
      
      <View style={styles.inputContainer}>
      <TextInput 
          placeholder="Name"
          value={person}
          onChangeText={text => setPerson(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Method (walking, biking, carpooling, ect)"
          value={method}
          onChangeText={text => setMethod(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Miles"
          value={miles}
          onChangeText={text => setMiles(text)}
          style={styles.input}
        />

        <TouchableOpacity style={{
      width: "80%",
      padding:15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
      borderColor: "#0000ff",
      borderWidth: 2,
      marginBottom: 20
    }} onPress={addData1}>
          <Text styles={styles.buttonOutlineText}>Submit</Text>
        </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>
    )
    }

export default LogAction

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    inputContainer: {
      width: "80%",
  
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical:10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: "#0000ff",
      width: "100%",
      padding:15,
      borderRadius: 10,
      alignItems: 'center'
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: "0000ff",
      borderWidth: 2,
    },
    buttonText: {
      color: "white",
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: "#0000ff",
      fontWeight: '700',
      fontSize: 16,
    },
  })