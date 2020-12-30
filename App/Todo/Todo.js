import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from 'react-native'
import Add from './Add'
import Header from './Header'
import Todoitem from "./Todoitem"



const initialList = [
    { todo: "playing", key: 1 },
    { todo: "eating", key: 2 },
    { todo: "bathing", key: 3 },
    { todo: "listening", key: 4 },
    { todo: "chating", key: 5 },
    { todo: "coding", key: 6 },

]
function Todo() {
    const [list, setList] = useState(initialList)
    const clickHandler = (a) => {
        Alert.alert(
            'Danger',
            'todo will deleted from ur todo list permentaly',
            [
                {
                    text: 'ok',
                    onPress: () => {
                            setList((del) => {
                                return del.filter(d => d.todo != a);
                            }) 
                    }
                },
                {
                    text: 'Cancel',
                }
            ]
        );

        console.log(list)
        
    }


    const changeHandler = (text ,e) => {
        console.log({ todo: text, key: Math.random() })

        setList((del) => {
            return [
                { todo: text, key: Math.random() }, ...del
            ]
        })
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={Styles.container}>
                <Header />
                <View style={Styles.content}>
                    <Add pressHandler={changeHandler} />
                    <ScrollView>
                    <View style={Styles.lists}>
                        
                        <FlatList
                            data={list}
                            renderItem={({ item }) => (
                                <Todoitem item={item} pressHandler={clickHandler} />
                            )}
                        />    
                    </View>
                    </ScrollView>
                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        // backgroundColor: "#808080",
    },
    content: {
        // flex: 1,
        padding: 60,
        backgroundColor:"#ADD8E6",
    },
    lists: {
        // flex: 1,
        marginTop:20,
        backgroundColor:"#ADD8E6",

    }

})

export default Todo
