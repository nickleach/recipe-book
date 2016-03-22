'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './app/components/main';

const
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
}),
 recipeBook = React.createClass({
  render() {
    return (
        <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Search',
            component: Main
        }}/>
    );
  }
});

AppRegistry.registerComponent('recipeBook', () => recipeBook);
