import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

//user information
const userName = "John Doe";
const userSaved = 25; //amount of pounds saved by the user this month

//user's community inforation
const commName = "Oak Ridge"
const commGoal = 2500; //amount of pounds of C02 to avoid emmiting
const commSaved = 100; //amount of pounds of C02 saved
const commLeft = commGoal-commSaved; //amount of pounds of C02 left before the community meets its goal

const commPeople = [
  { name: "Nancy Brown", saved: 22 },
  { name: "Bob Smith", saved: 10 },
  { name: "Will Baker", saved: 15 },
  { name: "Mary Williams", saved: 18 },
];

PeopleArr = commPeople.map(i => (
  <Text style={{fontSize: 16, marginTop: 5}}> - {i.name}: {i.saved} pounds of C02</Text>
));

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, {userName}</Text>
      <Text style={styles.stats}>{commName} has saved <B>{commSaved} out of {commGoal}</B> pounds of C02 this month, leaving you <B>{commLeft} pounds away</B> from meeting your goal!</Text>

      <Text style={styles.title}>Neighbors:</Text>

      <View style={{marginVertical: 10}}>{PeopleArr}</View>

        <TouchableOpacity
          onPress={() => {navigation.navigate("Carpool")}}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Carpool</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.navigate("Log")}}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.navigate("Chat")}}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Chat</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default HomeScreen

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = StyleSheet.create({
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
    marginTop: 20,
    borderColor: "0000ff",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0000ff",
    fontWeight: '700',
    fontSize: 16,

  },
})