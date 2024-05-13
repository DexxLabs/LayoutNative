import React from "react";
import { SafeAreaView, ScrollView, StyleSheet,useColorScheme } from 'react-native'
import Cards from './components/Cards.tsx'
import Scrollprop from './components/Scrollprop.tsx'


function cssbuild(){
  return(
 <SafeAreaView>
<ScrollView>
  <Cards/>
  <Scrollprop/>
</ScrollView>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boxx: {
    backgroundColor: "#141414"
  },
  boxxw: {
    backgroundColor: "#ffffff"
  }
}
)

export default cssbuild