import React, { useState } from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, SliderComponent} from 'react-native'
import { TouchableOpacity } from 'react-native'

const LogAction = ({navigation}) => {

    const [person, setPerson] = useState('')
    const [location, setLocation] = useState('')
    const [range,setRange] = useState('')
    const [time, setTime] = useState('')
    const [email, setEmail] = useState('')

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
          placeholder="Location"
          value={location}
          onChangeText={text => setLocation(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Range (today, tmrw, this week, this month, ect)"
          value={range}
          onChangeText={text => setRange(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Time"
          value={time}
          onChangeText={text => setTime(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
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
    }} onPress={() => {navigation.navigate("Carpool")}}>
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