import { ScrollView, StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

export default function hs():JSX.Element{
  const mode = useColorScheme() === 'dark'
  return (
    <View>
      <Text style={mode?styles.headingd:styles.heading}>Scrollable</Text>
      <ScrollView horizontal={true} style={styles.contain}>
        <View style={[styles.card,styles.eone]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.eone]}>
          <Text>Here</Text>
        </View>
        <View style={[styles.card,styles.eone]}>
          <Text>for</Text>
        </View>
        <View style={[styles.card,styles.eone]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card,styles.eone]}>
          <Text>Stuff</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  heading:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
    color:'#141414'
    
  },
  headingd:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
    color:'#ffffff'
    
  },

  card:{
    flex: 1,
    height:100,
    width: 100,
    borderRadius: 9,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset:{
      width:2,
      height:2
    },
    shadowRadius:1,
    shadowOpacity:0.5
  },
  contain:{
    padding: 5,
    flex: 1,
    flexDirection: 'row'
  },

  eone:{
    backgroundColor: '#00b894'
  },
})