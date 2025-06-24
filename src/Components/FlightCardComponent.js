import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlightCardComponent = ({width, height}) => {
  return (
    <View style={styles.container}>
        <View >
      <Text style={styles.CardText}>FlightCardComponent</Text>
        </View>
    </View>
  )
}

export default FlightCardComponent

const styles = StyleSheet.create({

    container:{
        borderWidth:2,
        width: 360,
        height: 120,
        borderRadius:10,
        backgroundColor: "#FFCC00",

        

        
    },
    CardText:{
        color:"#1A1A1A",
        fontWeight:"bold",
        fontSize:20,
        textAlign:'left',
        
        
    }


})