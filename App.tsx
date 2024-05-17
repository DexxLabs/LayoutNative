import React from "react";
import { View,SafeAreaView, ScrollView, StyleSheet,useColorScheme } from 'react-native'
import Cards from './components/Cards.tsx'
import Scrollprop from './components/Scrollprop.tsx'
import ImageCard from "./components/ImageCard.tsx"
import Flash from "./components/Flash.tsx"
import ActionCard from "./components/ActionCard.tsx";
import ContactList from "./components/ContactList.tsx";


function cssbuild():JSX.Element{
  const mode = useColorScheme() === 'dark'
  return(
    <View style={mode?styles.boxx:styles.boxxw}>
 <SafeAreaView>
<ScrollView>
  <Cards/>
  <Scrollprop/>
  <ImageCard/>
    <Flash/>
    <ContactList/>
    <ActionCard/>
    
</ScrollView>
 </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  boxx: {
    
    backgroundColor: "#141414"
  },
  boxxw: {
    backgroundColor: "#faf9f6"
  }
}
)

export default cssbuild