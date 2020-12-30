import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity,Alert } from 'react-native'
const initialList = [
    { name: "aji", key: 1 },
    { name: "params", key: 2 },
    { name: "subham", key: 3 },
    { name: "yogessh", key: 4 },
    { name: "kirithiv", key: 5 },
    { name: "biju", key: 6 },
    { name: "akash", key: 7 },
    { name: "ajith", key: 8 },
    { name: "ajith", key: 9 },
    { name: "ajith", key: 10 },
    { name: "ajith", key: 11 }
]
function List() {
    const [list, SetList] = useState(initialList)


    const clickHandler=(a)=>{
        console.log(a,"aaaaaaaaaa ")
        Alert.alert(a , "thanks for clicking")
        SetList( (preP) =>{
            return preP.filter(b => b.name != a);
        })
    }

    return (
        <View >
            <FlatList
                data={list}
                numColumns={2}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity onPress={()=>clickHandler(item.name)}>
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                        
                    </View>
                )}

            />

            {/* {list.map((a)=>{
                return(
                    <View key={a.key}>
                        <Text  style={styles.name}>{a.name}</Text> 
                    </View>
                )
            })} */}
        </View>
    )
}


const styles = StyleSheet.create({
    name: {
        marginTop: 24,
        padding: 20,
        backgroundColor: "pink",
        fontSize: 24,
        // marginLeft:20,
        margin: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 40
    }
})

export default List
