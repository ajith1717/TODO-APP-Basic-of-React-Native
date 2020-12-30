import React from 'react'
import { View , Text , StyleSheet} from 'react-native'

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                    TODO
            </Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        // flex:1,
        // marginTop:25,
        height:100,
        backgroundColor:"blue",
    },
    text:{
        textAlign:"center",
        color:"#fff",
        fontSize:30,
        margin:40,
        // fontWeight:"bold "
    }
     
})

export default Header
