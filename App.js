import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
// import { NativeRouter , Switch , Route } from "react-router-native";
import { Hello } from './App/Hello';
import List from './App/List';
import Login from './App/Login';
import Routes from './App/Routes';
import Add from './App/Todo/Add';
import Todo from './App/Todo/Todo';

export default function App() {
  return (
    // <NativeRouter>
    //   <View style={styles.container}>
    //     <Switch>
    //       <Route exact path="/" component={Login}></Route>
    //       <Route exact path="/Hello" component={Hello}></Route>
    //     </Switch>
    //   </View>
    // </NativeRouter>



      
        <View style={styles.container}>
          <Todo></Todo>
        </View>
     
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'pink',
  // alignItems: 'center',
  // justifyContent: 'center',
  // paddingHorizontal:20,
  // paddingTop:40
},
});

AppRegistry.registerComponent('MY-PROJECT', () => App)


