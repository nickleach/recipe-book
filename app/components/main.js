import React, {Component, StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';
import SecondPage from "./secondPage";

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
    _handleChange(event) {
      this.setState({
        search: event.nativeEvent.text
      });
    },
    _search() {
      this.props.navigator.push({
          component: SecondPage,
          title: 'Second Page',
          passProps: {
            search: this.state.search
          }
      });
    },
    render() {
      return (
        <View style={_styles.mainContainer}>
          <TextInput
            style={_styles.searchInput}
            value={this.state.search}
            onChange={this._handleChange}
          />
          <TouchableHighlight
            style={_styles.button}
            onPress={this._search}
            underlayColor="white">
            <Text style={_styles.buttonText}>Search For Recipes</Text>
          </TouchableHighlight>
        </View>
      );
    }
  });

export default _component;
