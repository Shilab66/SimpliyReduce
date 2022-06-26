import React, { useState } from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, SliderComponent} from 'react-native'
import { TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const allowedEmail = "someone@gmail.com";
const allowedPswd = "Hello";


const LoginS = ({navigation}) => {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async() =>{
    const result = await AsyncStorage.getItem('@users')
    const newResult = result + "," + email +":"+ password
    AsyncStorage.setItem('@users', newResult)
  }

  const handleLogin = async() =>{
    const value = await AsyncStorage.getItem('@users')
    const valueList = value.split(",")
    for(var i=1; i<valueList.length; i++){
      const pair = valueList[i].split(":");
      if(pair[0] == email && pair[1] == password){
        navigation.navigate("Home");
      }
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      
      <View style={styles.inputContainer}>
      <TextInput 
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignup}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>


    </KeyboardAvoidingView>
  )
}

export default LoginS

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