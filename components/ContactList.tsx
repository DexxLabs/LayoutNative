import { Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function ContactList() {
    const database =[
        {
            uid:1 ,
            name: 'Clark',
            imageUrl: 'https://i.pinimg.com/564x/c2/45/a7/c245a7f9f50c779b63c7973f2d43ea52.jpg'
        },
        {
            uid:2,
            name: 'Bruce',
            imageUrl: 'https://i.pinimg.com/564x/90/9b/af/909bafc6b77d645002691ab28967243e.jpg'
        },
        {
            uid:3,
            name: 'Barry',
            imageUrl: 'https://i.pinimg.com/736x/c9/03/a7/c903a785a58b4ea70866b7c4ce44cc75.jpg'
        },
        {
            uid:4,
            name: 'Diana',
            imageUrl: 'https://i.pinimg.com/564x/0d/89/4f/0d894f8103cdf12176b25afa2a7fa631.jpg'
        },
    
    ];
  return (
    <View>
      <Text style={styles.heading}>Contacts</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        <View>
            {database.map(({uid, name, imageUrl}) => (
                <View key={uid} style={styles.usercard}>
                        
                <Image source ={{uri : imageUrl}} style={styles.imagecard}/>
                    <Text style={styles.text}>{name}</Text>
                </View>
            ))}
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

    heading:{ 
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:16,
        color: '#fff',
        marginBottom: 12
        
    },
    container:{
        paddingHorizontal:12,
        
        
    },
    usercard:{
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom:14
        
        
        
    },
    imagecard:{
        height:60,
        width:60,
        borderRadius:30,
        marginHorizontal:8
        
    },
    text:{
        paddingHorizontal:12,
        fontWeight:'bold',
        textAlignVertical: 'center',
        color:'#000'
    }

})