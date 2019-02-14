import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, WebView } from 'react-native';


const LOGIN_URL = "https://glacial-fortress-14735.herokuapp.com/api/user/auth/facebook";
const SUCCESS_URL = "https://glacial-fortress-14735.herokuapp.com/api/user/profile";
const FAILED_URL = "https://glacial-fortress-14735.herokuapp.com/api/user/auth/failed";

export default class SignIn extends Component {
  state = {isLoggedIn: false, fbSignIn: false}
  render() {
    if(this.state.isLoggedIn) return this.props.navigation.navigate('App');
    if(this.state.fbSignIn) {
      return (
      <View style={[styles.container]}>
        <WebView
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: LOGIN_URL}}
          javaScriptEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
      )
    } else
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Sign In with Facebook" onPress={this._handlePress} />
      </View>
    );
  }

  onNavigationStateChange (navState) {
    if (navState.url == SUCCESS_URL) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  _handlePress = () => {
    this.setState({fbSignIn: true})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});