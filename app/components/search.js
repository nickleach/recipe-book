import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  ActivityIndicatorIOS,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      color: 'white',
      padding: 10
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    logo: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 20,
    },
    pageTitle: {
      color: 'white',
      fontSize: 30,
      fontStyle: "italic",
      fontWeight: 'bold',
      alignSelf: 'center',
      marginBottom: 20,
    },
    errorMessage: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
    }
  }),

  _component = React.createClass({
    getInitialState(){
      return {
        keywords: null,
        ingredients: null,
        searchResults: null,
        isLoading: false,
        errorMessage: null,
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
      this.setState({isLoading: true});
      const
        ingredients = this.state.ingredients ? `q=${this.state.ingredients.replace(/,?\s+/, ',')}` : '',
        keywords = this.state.keywords ? `i=${this.state.keywords.replace(/,?\s+/, '&q=')}` : '';
      SearchApi.getRecipes(keywords, ingredients).then((res) => {
        if (res.length >= 1) {
          this.setState({
            searchResults: res,
            isLoading: false,
          });
          this._goToRecipes();
        } else {
          this.setState({
            errorMessage: "No recipes found",
            isLoading: false,
          });
        }
      });
    },
    render() {
      return (
        <View style={_styles.mainContainer}>
          <View>
            <Text style={_styles.pageTitle}>Search For Recipes</Text>
            <Image source={require('../assets/forkandknife.png')} style={_styles.logo}/>
          </View>
          <TextInput
            style={_styles.searchInput}
            value={this.state.keywords}
            onChange={this._handleKeywordsChange}
            placeholder="keywords"
            placeholderTextColor="#C9E7C9"
          />
          <TextInput
            style={_styles.searchInput}
            value={this.state.ingredients}
            onChange={this._handleIngredientsChange}
            placeholder="ingredients"
            placeholderTextColor="#C9E7C9"
          />
          <TouchableHighlight
            style={_styles.button}
            onPress={this._search}
            underlayColor="white">
            <Text style={_styles.buttonText}>Search For Recipes</Text>
          </TouchableHighlight>
          <ActivityIndicatorIOS
                    animating={this.state.isLoading}
                    color="white"
                    size="large"
                ></ActivityIndicatorIOS>
          <Text style={_styles.errorMessage}>{this.state.errorMessage}</Text>
        </View>
      );
    }
  });

export default _component;
