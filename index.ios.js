'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import Main from './app/components/main';
import Search from './app/components/search';
import Recipes from './app/components/recipes';
import Login from './app/components/login';


const
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  }),
  recipeBook = React.createClass({
    getInitialState() {
      return {
        selectedTab: 'search',
        isLoggedIn: null,
      }
    },
    componentDidMount() {
    },
    _handleLogin() {
      this.setState({
        isLoggedIn: true
      });
    },
    _setTab(tabId) {
      this.setState({
        selectedTab: tabId
      })
    },
    render() {
      if (this.state.isLoggedIn) {
        return (
          <TabBarIOS>
            <TabBarIOS.Item
              title = "search"
              selected = {this.state.selectedTab === 'search'}
              onPress = {() => this._setTab('search')}
              systemIcon = "search">
              <NavigatorIOS
                style = {styles.container}
                initialRoute = {
                  {
                    title: 'Search',
                    component: Search
                  }
                }/>
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title = "search"
                selected = {this.state.selectedTab === 'recipes'}
                onPress = {() => this._setTab('recipes')}
                systemIcon = "favorites">
                <NavigatorIOS
                  style = {styles.container}
                  initialRoute = {
                    {
                      title: 'Recipes',
                      component: Recipes
                    }
                  }/>
                </TabBarIOS.Item>
          </TabBarIOS>
        );
      } else {
        return (
          <Login
            loginHandler={this._handleLogin}/>
        );
      }

    }
  });

AppRegistry.registerComponent('recipeBook', () => recipeBook);
