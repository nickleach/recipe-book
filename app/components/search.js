import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Recipes from './recipes';
import SearchApi from '../modules/searchApi';

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
      backgroundColor: '#257F27'
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
        keywords: null,
        ingredients: null,
        searchResults: null
      }
    },
    _handleIngredientsChange(event) {
      this.setState({
        ingredients: event.nativeEvent.text
      });
    },
    _handleKeywordsChange(event) {
      this.setState({
        keywords: event.nativeEvent.text
      });
    },
    _goToRecipes() {
      this.props.navigator.push({
        component: Recipes,
        title: 'Search Results',
        passProps: {
          recipes : this.state.searchResults
        }
      });
    },
    _search() {
      const
        ingredients = this.state.ingredients ? `q=${this.state.ingredients.replace(/,?\s+/, ',')}` : '',
        keywords = this.state.keywords ? `i=${this.state.keywords.replace(/,?\s+/, '&q=')}` : '';
      SearchApi.getRecipes(keywords, ingredients).then((res) => {
        this.setState({
          searchResults: res,
        });
        this._goToRecipes();
      });
    },
    render() {
      return (
        <View style={_styles.mainContainer}>
          <TextInput
            style={_styles.searchInput}
            value={this.state.keywords}
            onChange={this._handleKeywordsChange}
            placeholder="keywords"
            placeholderTextColor="white"
          />
          <TextInput
            style={_styles.searchInput}
            value={this.state.ingredients}
            onChange={this._handleIngredientsChange}
            placeholder="ingredients"
            placeholderTextColor="white"
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
