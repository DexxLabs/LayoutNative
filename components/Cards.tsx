import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

export default function components():JSX.Element {
  const mode = useColorScheme() === 'dark'
  return (
    <View>
      <Text style={mode?styles.heading:styles.headingd}>Cards</Text>
      <View style={styles.contain}>
      <View style={[styles.card,styles.cardone]}>
      <Text>Red</Text>
      </View>
      <View style={[styles.card,styles.cardtwo]}>
      <Text>Blue</Text>
      </View>
      <View style={[styles.card,styles.cardthree]}>
      <Text>Green</Text>
      </View>
      <View style={[styles.card,styles.cardfour]}>
      <Text>Purple</Text>
      </View>
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
heading:{
  fontSize: 24,
  fontWeight: 'bold',
  padding: 8,
  color:'#ffffff'
  
},

headingd:{
  fontSize: 24,
  fontWeight: 'bold',
  padding: 8,
  color:'#141414'
  
},

contain:{
  padding: 5,
  flex: 1,
  flexDirection: 'row'
},

card:{
  flex: 1,
  height:100,
  width: 100,
  borderRadius: 9,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center'
  
},
cardone:{
  backgroundColor: '#ef5453'
},
cardtwo:{
  backgroundColor: '#0984e3'
},
cardthree:{
  backgroundColor: '#55efc4'
},
cardfour:{
  backgroundColor: '#6c5ce7'
}

})