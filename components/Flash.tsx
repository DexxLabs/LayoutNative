
      import { Image, ScrollView, StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

export default function ImageCard():JSX.Element {
    const mode = useColorScheme() === 'dark'
  return (
    <ScrollView>
        
        <View style={[styles.card,styles.elevated]}>
        <Image source={{uri:'https://images7.alphacoders.com/117/1173352.png'}}
      style={styles.imagecard}/>
        
        <View style={styles.cardBody}>
        <View >
        <Text style={styles.cardtitle}>Flash</Text>
        </View>
        <Text style={styles.cardlabel}>Barry Allen, Gotham City</Text>
        <Text style={styles.carddesc}>The Flash: Barry Allen, blessed with super-speed, races to protect Central City with lightning-fast heroics.</Text>
        <Text style={styles.cardfooter}>Fictional Character</Text>
      </View>
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    heading:{
      fontSize: 24,
        fontWeight:'bold',
        padding: 8,
        color:'#ffffff'
        
      },
      
      headingd:{
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
        color:'#141414'
        
      },
      imagecard:{
        height: 200,
        borderTopLeftRadius:10,
        borderTopRightRadius: 10
        
        
      },
      card:{
        marginHorizontal:10,
        marginVertical:10,
    height:350,
        borderRadius:10
      },
      elevated:{
          backgroundColor: '#ffffff',
          elevation: 3,
          shadowOffset:{
            height:1,
            width:1
          }
          
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal: 12,
      },
      cardtitle:{
        color:'#141414',
        fontWeight:'bold',
        fontSize: 23,
        paddingTop: 5,
      },
      carddesc:{
        color:'#141414',
        paddingTop:5,
        paddingBottom: 5
        
      },
      cardfooter:{
        color:'#141414',
        fontWeight: 'bold',
        paddingTop: 5
      },
      cardlabel:{
        color:'#141414',
        fontWeight:'bold',
        paddingTop:3,

      }
})