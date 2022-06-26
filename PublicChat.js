import React, { useState } from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, SliderComponent, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native'

const commName = "Oak Ridge"
const userName = "John"

const messages = [
  {name: "John", date: "6/01/22", time: "10:00 AM", message: "Hi"},
  {name: "John", date: "6/01/22", time: "10:01 AM", message: "Found this app that we could use to help reduce our carbon emmisions"},
  {name: "John", date: "6/01/22", time: "10:03 AM", message: "Invite others you know who live in Oak Ridge that might be interested!"},
  {name: "Nancy", date: "6/02/22", time: "11:03 AM", message: "Wow, this app seems really cool"},
  {name: "Nancy", date: "6/02/22", time: "11:03 AM", message: "I can tell the developer put a lot of work into it"},
  {name: "Will", date: "6/02/22", time: "12:05 AM", message: "I've been looking for someone to carpool with, this seems really helpful!"},
  {name: "Will", date: "6/03/22", time: "9:20 PM", message: "Adding my next door neightbors Mary and Bob"},
  {name: "Bob", date: "6/04/22", time: "4:10 AM", message: "Hi!"},
  {name: "John", date: "6/26/22", time: "8:40 AM", message: "Hello!"},
  {name: "John", date: "6/26/22", time: "8:40 AM", message: "How do you wake up so early?! Anyways, feel free to invite others you know who may be interested"},
]

chatArr = messages.map(i => (
  <View style={{
    color: "#0000ff",
    width: "70%",
    borderRadius: 10,
    alignItems: 'center',
    paddingBottom: 10,
    marginVertical: 10,
    marginRight: 10,
  }}>


    <Text style={{
    textAlign: 'center',
    color: "gray",
    fontWeight: '300',
    fontSize: 12,
    paddingTop: 20,
    paddingHorizontal: 30,
  }}> {i.name}, {i.date} {i.time}</Text>


    <Text style={{
        textAlign: 'center',
        color: "black",
        fontWeight: '300',
        fontSize: 20,
        paddingTop: 20,
        paddingHorizontal: 30,
      }}> {i.message}</Text>


  </View>
)
);

const PublicChat = ({navigation}) => {
  const [message, setMessage] = useState('')
  const send = () => {
    
    const date = new Date().toLocaleString()
    const dateList = date.split(", ");
    messages.push({person: userName, date: dateList[0], time: dateList[1], message: message})


    chatArr = messages.map(i => (
      <View style={{
        color: "#0000ff",
        width: "70%",
        borderRadius: 10,
        alignItems: 'center',
        paddingBottom: 10,
        marginVertical: 10,
        marginRight: 10,
      }}>
    
    
        <Text style={{
        textAlign: 'center',
        color: "gray",
        fontWeight: '300',
        fontSize: 12,
        paddingTop: 20,
        paddingHorizontal: 30,
      }}> {i.name}, {i.date} {i.time}</Text>
    
    
        <Text style={{
            textAlign: 'center',
            color: "black",
            fontWeight: '300',
            fontSize: 20,
            paddingTop: 20,
            paddingHorizontal: 30,
          }}> {i.message}</Text>
    
    
      </View>
    )
    );
  }
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{commName} Chat</Text>
      <Text style={styles.stats}>A place to chat with all your neightbors!</Text>

      <ScrollView><View  style={{flex: 0.8}}>{chatArr}</View></ScrollView>
      
      <View style={styles.inputContainer}>
      <TextInput 
          placeholder="Write your message here..."
          value={message}
          onChangeText={text => setMessage(text)}
          style={styles.input}
      /></View>


      <TouchableOpacity style={styles.buttonOutline} onPress={send}>
        <Text styles={styles.buttonOutlineText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline} onPress={() => {navigation.navigate("Home")}}>
        <Text styles={styles.buttonOutlineText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PublicChat

const styles = StyleSheet.create({
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
  container:{
    justifyContent: 'top',
    alignItems: 'center',
    flex: 1,
  },
  title:{
    textAlign: 'center',
    color: "black",
    fontWeight: '700',
    fontSize: 23,
    paddingTop: 60
  },
  stats:{
    textAlign: 'center',
    color: "black",
    fontWeight: '300',
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  buttonOutline: {
    width: "80%",
    padding:15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderColor: "#0000ff",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0000ff",
    fontWeight: '700',
    fontSize: 16,
  },
  logEntry:{
    color: "#dbdbdb",
    width: "80%",
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: "0000ff",
    borderWidth: 2,
  }
})