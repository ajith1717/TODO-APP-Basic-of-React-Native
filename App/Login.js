import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import {TouchableOpacity, Dimensions, Platform, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight, TextInput, RefreshControl, Alert } from 'react-native';
// import { Actions } from 'react-native-router-flux';

//     const goToSecond = () => {
//       Actions.Hello()
//     }

const instruction = Platform.select({
  ios: "press ctrl+r to reload,\n",
  android: "double tap R on your keyboard to reload"
})

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;



export default function Login() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")

  const changeHandler = () => {
    const data = {
      Name: name,
      PhoneNumber: number,
      Password: password
    }
    console.log(data, "1111111")
    console.log(data["Password"].length, "222")

    {
      data["Password"].length < 8 ? Alert.alert("failed ", "enter ur data or make ur password strong  ")
      : data["Name"] == "" || data["PhoneNumber"] == "" || data["Password"] == "" ? Alert.alert("failed ", "enter ur data ")
        :Alert.alert('sucess',"Account creacted success fully ");
    }
  }



  const inputRef = useRef("")
  const inRef = useRef("")



  return (
    // <TouchableOpacity style = {{ margin: 128 }} onPress = {goToSecond}>
    <View style={styles.container}>
      {/* <ScrollView> */}
        <View style={{ heigth: deviceHeight, width: deviceWidth, alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.font}>MIͥCKͣEͫץM๏UรE</Text>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={require("./image/logo.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.fontContainer}>
            <TextInput
              style={styles.text}
              placeholder="USER NAME"
              returnKeyType={'next'}
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={(event) => {
                inRef.current.focus()
              }}
              onChangeText={(a) => setName(a)}
              value={name}
            />
            <TextInput
              style={styles.text}
              placeholder="PHONE NUMBER"
              returnKeyType={'next'}
              autoCapitalize="none"
              autoCorrect={false}
              ref={inRef}
              onSubmitEditing={(event) => {
                inputRef.current.focus()
              }}
              onChangeText={(a) => setNumber(a)}
              value={number}
            />
            <TextInput
              style={styles.text}
              placeholder="PASSWORD"
              returnKeyType={'next'}
              autoCapitalize="none"
              autoCorrect={false}
              ref={inputRef}
              onChangeText={(a) => { setPassword(a) }}
              value={password}
              onSubmitEditing={changeHandler} />
            <TouchableHighlight style={styles.button}
              underlayColor="transparent"
              onPress={changeHandler}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>

            <Text style={[styles.buttonTextSignup, { color: '#6D6E70' }]}>Don't have account? Click here</Text>
            <View style={styles.imageContainer_}>
              <Image
                resizeMode="contain"
                source={require("./image/download.png")}
                style={styles.image_}
              />
            </View>

          </View>



        </View>

      {/* </ScrollView> */}
    </View>
    // </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 60,
    fontSize: 40,
    color: "#000000",
    marginTop: 50,
    marginLeft: 10,



  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    // marginTop:30
  },
  fontContainer: {
    // marginTop:30,
    paddingHorizontal: 30
  },
  text: {
    marginBottom: 10,
    height: 40,
    width: 300,
    borderRadius: 5,
    fontSize: 20,
    color: "#000000"

  },

  button: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonTextSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10

  },
  imageContainer_: {
    alignItems: 'center',
  },
  image_: {
    height: 200,
    width: 300,
    marginTop: 50
  },
});
