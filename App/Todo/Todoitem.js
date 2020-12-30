import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function Todoitem({ item, pressHandler }) {
    // console.log(props)
    return (
        <ScrollView>
        <View>
            <TouchableOpacity onPress={() => pressHandler(item.todo)}>
                <View style={styles.name}>
                    <MaterialIcons name="delete" size={48} color="black" />
                    <Text  style={styles.text}>{item.todo}</Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    name: {
        flex:1,
        flexDirection: "row",
        // marginTop: 24,
        padding: 20,
        backgroundColor: "#fff",
        // fontSize: 48,
        margin: "10%",
        borderBottomColor: "#ddd",
        borderRadius: 50,
        borderStyle: "dotted",
        borderWidth: 1,
        borderRadius: 20
    },
    text:{
        paddingRight: 30,
        // marginLeft:"10%",
        // fontSize:30
    }

})

export default Todoitem
