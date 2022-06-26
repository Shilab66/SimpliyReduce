import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native';

const requests = [
  {name: "Will", range: "this week", time: "7:00AM", location: "Beverly Park Hiking Grounds", email: "will@hiking.com"},
  {name: "Mary", range: "today", time: "4:00PM", location: "Oak Ridge Elementary School", email: "mary@schooldistric.com"},
  {name: "Nancy", range: "this month", time: "8:00AM", location: "Sandy Hills Office Complex", email: "nancy@taxconsulations.com"}
]

requestsArr = requests.map(i => (
  <View style={{
    color: "#dbdbdb",
    width: "90%",
    borderRadius: 5,
    alignItems: 'center',
    paddingBottom: 10,
    marginVertical: 10,
    borderColor: "0000ff",
    borderWidth: 2,
    marginLeft: 20
  }}>
    <Text style={{
    textAlign: 'center',
    color: "black",
    fontWeight: '300',
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
  }}> {i.name} would like to go to {i.location} {i.range} at {i.time}.</Text>

<Text style={{
    textAlign: 'center',
    color: "black",
    fontWeight: '300',
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
  }}> {i.email}.</Text>
  </View>
));


const Carpool = ({navigation}) => {
  return (
    <View style={{
      justifyContent: 'top',
      alignItems: 'center',
      flex: 1,
    }}>
      
        <Text style={styles.title}>Carpool</Text>
        <Text style={styles.stats}>A platform you can use to cordinate carpooling plans with your neightbors.</Text>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => {navigation.navigate("Request")}}>
          <Text styles={styles.buttonOutlineText}>Create Request</Text>
        </TouchableOpacity>
        <ScrollView>{requestsArr}</ScrollView>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => {navigation.navigate("Home")}}>
          <Text styles={styles.buttonOutlineText}>Back</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Carpool

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
    borderColor: "#0000ff",
    borderWidth: 2,
    marginBottom: 20
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