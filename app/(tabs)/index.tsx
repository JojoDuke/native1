import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground 
} from 'react-native'
import React from 'react'
import theLogo from "../../assets/images/icon.png"

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={theLogo}>
        <Text style={styles.text}>index</Text>
      </ImageBackground>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 23,
  }
})