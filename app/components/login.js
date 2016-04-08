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
import FBLogin from 'react-native-facebook-login';
const FBLoginManager = require('NativeModules').FBLoginManager;

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
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
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
      textAlign: 'center',
    },
    errorMessage: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
    },
    facebookIcon: {
      alignSelf: 'flex-start',
    },
  }),

  _component = React.createClass({
    propTypes: {
      loginHandler: React.PropTypes.func.isRequired,
    },
    getInitialState(){
      return {
        isLoading: false,
        errorMessage: null,
        user: null,
      }
    },
    _login() {
      this.props.loginHandler();
    },
    render() {
      return (
        <View style={_styles.mainContainer}>
          <View>
            <Text style={_styles.pageTitle}>Welcome to My Recipe Book!</Text>
            <Image source={require('../assets/forkandknife.png')} style={_styles.logo}/>
          </View>
          <FBLogin style={_styles.button}
            permissions={["email","user_friends"]}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
              this.setState({ user : data.credentials });
            }.bind(this)}
            onLogout={function(){
              console.log("Logged out.");
              this.setState({ user : null });
            }.bind(this)}
            onLoginFound={function(data){
              console.log("Existing login found.");
              console.log(data);
              this.setState({ user : data.credentials });
            }.bind(this)}
            onLoginNotFound={function(){
              console.log("No user logged in.");
              this.setState({ user : null });
            }.bind(this)}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
            }}
          />
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
