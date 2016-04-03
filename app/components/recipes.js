import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

const
  _styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 14,
    },
    mainContainer: {
      backgroundColor: '#257F27',
      flex: 1,
      padding: 30,
      marginTop: 65,
    },
  }),

  _component = React.createClass({
    render() {
      return (
        <View style={_styles.mainContainer}>
          <Text style={_styles.text}>Recipes here</Text>
        </View>
      );
    }
  });

export default _component;
