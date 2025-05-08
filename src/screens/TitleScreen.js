import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const TitleScreen = (props) => {



    return <View>
        <Text style={styles.text}>First Screen</Text>
        <Button 
        onPress={() => props.navigation.navigate('Home')}
        title="go to Home Screen"
        />

        <TouchableOpacity onPress={() => props.navigation.navigate('Components')}>
            <Text>Go to Component Screen</Text>
        </TouchableOpacity>


        <Button 

        onPress={() => props.navigation.navigate('Image')}
        title="Go to ImageScreen"
        />
            
    </View>

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default TitleScreen;