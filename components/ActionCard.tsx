import { Linking, StyleSheet, Text, TouchableOpacity, View,Image,ScrollView,useColorScheme } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function OpenWeb(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    const mode = useColorScheme() === 'dark'
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text style={mode?styles.heading:styles.headingd}>About</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
          <Text style={{fontWeight:'bold',fontSize:16, color:'#000', textAlign: 'center',paddingBottom:6}}>Version 2</Text>
        <Image source={{uri:'https://pnclogosofficial.s3.us-west-2.amazonaws.com/2019/06/11155925/Justice-League-Logos-Unveiled-1.jpg'}}
      style={styles.imagecard}/>
        
        <View style={styles.cardBody}>
        <View style={styles.title}>
        <Text style={styles.cardtitle}>The Justice League</Text>
        </View>
        <Text style={styles.carddesc}>A League Of Worlds Most Powerful Superheroes</Text>
        <View style={styles.footericons}>
          <View>
        <TouchableOpacity onPress={()=>OpenWeb("https://www.instagram.com/ranb__r/")}>
        <Text style={styles.cardfooter}>Instagram</Text>
        </TouchableOpacity>
          </View> 
        <View>
          <TouchableOpacity onPress={()=>OpenWeb("https://dexxlabs.github.io/Portfolio/")}>
          <Text style={styles.cardfooter}>Website</Text>
          </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity onPress={()=>OpenWeb("https://x.com/ranb__r")}>
        <Text style={styles.cardfooter}>Twitter</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
      </View>


    </ScrollView>
            
  )
}

const styles = StyleSheet.create({

    headertext:{

    },
    headercontainer:{},
    
    elevatedcard: {


    },
    headingtext: {},
    link:{
        fontWeight: 'bold',
        paddingHorizontal:10,
        alignItems: "center"
    },

    heading:{
      fontSize: 24,
        fontWeight:'bold',
        padding: 8,
        color:'#ffffff',
      
        
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
    height:'auto',
        borderRadius:10,
        padding:5,
        
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
        alignItems: 'center',
        flexGrow:1,
        marginHorizontal: 12,
        marginVertical: 5,
        
      },
      cardtitle:{
        color:'#141414',
        fontWeight:'bold',
        fontSize: 23,
        paddingTop: 5,
      },
      carddesc:{
        color:'#141414',
        flexGrow:1,
        paddingBottom: 20,
        paddingTop: 0,
        fontWeight: '500'
      },
      cardfooter:{
        
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor:"#000",
        height:30,
        width:90,
        borderRadius: 5,
        elevation: 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        
    
        
      },
      cardlabel:{
        color:'#141414',
        fontWeight:'bold',
        paddingTop:3,
        

      },
      title:{
        flex:1,
        alignItems:'center',
        
      },
      footericons:{
        
        flexDirection: 'row',
        width: 350,
        flex:1,
        justifyContent: 'space-evenly',
        
        
        
        
        
        
      }
})