const index = (

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './app/components/main';

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
}),


<NavigatorIOS
style={styles.container}
initialRoute={{
    title: 'Test',
    component: Main
}}/>

),
main = (
import React, {Component, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import SecondPage from "./secondPage";

_styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 14,
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  button: {
    backgroundColor: 'pink',
    borderColor: 'white',
    borderWidth: 1,
  },
}),

_navigate() {
  this.props.navigator.push({
      component: SecondPage,
      title: 'Second Page',
  });
},

<View style={_styles.mainContainer}>
  <TouchableHighlight
      style={_styles.button}
      onPress={this._navigate}
      underlayColor="white">
    <Text style={_styles.text}>HeY from the main component!</Text>
  </TouchableHighlight>
</View>


),
secondPage = (

import React, {Component, StyleSheet, View, Text} from 'react-native';

_styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 14,
  },
  mainContainer: {
    backgroundColor: 'orange',
    flex: 1,
    padding: 30,
    marginTop: 65,
  },
}),

<View style={_styles.mainContainer}>
  <Text style={_styles.text}>HeY from the second component!</Text>
</View>

);
