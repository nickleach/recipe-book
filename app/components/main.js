import React, {Component, StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';
import Search from "./search";

const
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
      backgroundColor: '#002C91'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    searchInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    }
  }),

  _component = React.createClass({
    getInitialState(){
      return {
        search: null,
      }
    },
    render() {
      return (
        <View style={_styles.mainContainer}>
          <Text>Hey From main</Text>
        </View>
      );
    }
  });

export default _component;
