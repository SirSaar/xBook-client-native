import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, WebView, ActivityIndicator,AsyncStorage } from 'react-native';
const parseUrl = require('url-parse');
import { serverUrl } from '../config';

const LOGIN_URL = serverUrl + "/api/auth/facebook";
const SUCCESS_PATH = "/api/auth/success";
const FAILED_PATH = "/api/auth/failed";

export default class SignIn extends Component {
  state = { fbSignIn: false, loginFailed: false, isLoading: false }
  render() {
    if (this.state.isLoading) return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
    if (this.state.fbSignIn) {
      return (
        <WebView
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          source={{ uri: LOGIN_URL }}
          javaScriptEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      )
    }
    return (
      <View style={styles.container}>
        {this.state.loginFailed && <Text>There was an issue during log in</Text>}
        <Button title="Sign In with Facebook" onPress={this._onFbSignIn} />
      </View>
    );
  }

  onNavigationStateChange = (navState) => {
    const url = parseUrl(navState.url, true);

    if (url.pathname == SUCCESS_PATH) {
      const authToken = url.query['auth_token'];
      this.setState({isLoading: true})
      this.onSuccess(authToken);
    }

    if (url.pathname == FAILED_PATH) {
      this.onFailed();
    }
  }

  onFailed = async () => {
    this.setState({
      loginFailed: true
    });
  }

  onSuccess = async (authToken) => {
    await AsyncStorage.setItem('authToken', authToken);
    this.props.navigation.navigate('App');
  }

  _onFbSignIn = () => {
    this.setState({ fbSignIn: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});