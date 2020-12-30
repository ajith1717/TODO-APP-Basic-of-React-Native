import React ,{useState} from 'react'
import { Button, TextInput, View ,StyleSheet } from 'react-native'

function Add({pressHandler}) {
    // const [text , setText] = useState(initialList);
    const [text , SetText] = useState("")

    return (
        <View>
            {/* <Header /> */}
            <TextInput 
                placeholder="enter a text"
                onChangeText={(a)=> SetText(a)}
                style = {styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                // onSubmitEditing={pressHandler()} 
            />
            <Button onPress={()=>pressHandler(text)}  title="Add" color="blue"/>
            {/* <Todo data={text}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        // margin:50,
        height:50,
        paddingHorizontal:8,
        marginBottom:20,
        paddingVertical:6,
        borderWidth:1,
        fontSize:20,
        borderRadius:20
    }
    

})

export default Add
