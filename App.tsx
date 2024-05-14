import React from "react";
import { View,SafeAreaView, ScrollView, StyleSheet,useColorScheme } from 'react-native'
import Cards from './components/Cards.tsx'
import Scrollprop from './components/Scrollprop.tsx'


function cssbuild():JSX.Element{
  const mode = useColorScheme() === 'dark'
  return(
    <View style={mode?styles.boxx:styles.boxxw}>
 <SafeAreaView>
<ScrollView>
  <Cards/>
  <Scrollprop/>
</ScrollView>
 </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  boxx: {
    flex:1,
    backgroundColor: "#141414"
  },
  boxxw: {
    flex:1,
    backgroundColor: "#faf9f6"
  }
}
)

export default cssbuild