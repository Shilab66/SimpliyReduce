import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const savedLog = [
  {id: 1, person: "Nancy", method: "biked", miles: 2, pounds: 1.82},
  {id: 2, person: "Bob", method: "walked", miles: 3, pounds: 2.73},
  {id: 3, person: "Will", method: "carpooled", miles: 11, pounds: 10.01},
  {id: 4, person: "Mary", method: "walked", miles: 1, pounds: 0.91},
  {id: 5, person: "Nancy", method: "carpooled", miles: 29, pounds: 26.39},
  {id: 6, person: "Bob", method: "biked", miles: 6, pounds: 5.46},
  {id: 7, person: "Will", method: "walked", miles: 3, pounds: 2.73},
  {id: 8, person: "Mary", method: "walked", miles: 5, pounds: 4.55},
  {id: 9, person: "John", method: "biked", miles: 7, pounds: 6.37},
  {id: 11, person: "Mary", method: "carpooled", miles: 35, pounds: 31.85},
  {id: 10, person: "John", method: "walked", miles: 5, pounds: 4.55},
]

logArr = savedLog.map(i => (
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
  }}> {i.person} {i.method} {i.miles} miles, saving {i.pounds} pounds of C02 from being emmited</Text>
  </View>
));
const Log = ({navigation}) => {


  const addData = async() =>{
    const value = await AsyncStorage.getItem('@log')
    if(value != null){
      const valueList = value.split(",");

      for(var i=0; i<valueList.length; i++){
        const obj = valueList[i];
        savedLog.append({person:obj[0], method:obj[1], miles:obj[2], pounds:obj[3]});
      }
      console.log("done");
  }

    logArr = savedLog.map(i => (
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
      }}> {i.person} {i.method} {i.miles} miles, saving {i.pounds} pounds of C02 from being emmited</Text>
      </View>
    ));
  }
  
  useEffect(() => {
    addData();
  }, []);


  return (
    <View style={{
      justifyContent: 'top',
      alignItems: 'center',
      flex: 1,
    }}>
      
        <Text style={styles.title}>Log</Text>
        <Text style={styles.stats}>An in-depth list of all actions that have been logged this month.</Text>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => {navigation.navigate("Action")}}>
          <Text styles={styles.buttonOutlineText}>Log Action</Text>
        </TouchableOpacity>
        <ScrollView>{logArr}</ScrollView>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => {navigation.navigate("Home")}}>
          <Text styles={styles.buttonOutlineText}>Back</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Log

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