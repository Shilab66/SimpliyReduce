import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Test = () => {
    const result = "e";

    const storeData = () =>{
        AsyncStorage.setItem("akey", "value")
        getData()
      }

      const getData = async () => {
          const result = await AsyncStorage.getItem('akey')
          console.log(result);
      }

  return (
    <View>
        <TouchableOpacity
          onPress={storeData}
          style={{paddingTop: 100}}>
            <Text style={styles.buttonOutlineText}>Carpool</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})