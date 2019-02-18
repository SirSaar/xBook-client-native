import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, WebView, ActivityIndicator, AsyncStorage } from 'react-native';
const parseUrl = require('url-parse');
import { SocialIcon } from "react-native-elements";
import { textStyles, brandColor,dimensions } from "../styles/base";

const LOGIN_URL = "https://glacial-fortress-14735.herokuapp.com/api/auth/facebook";
const SUCCESS_PATH = "/api/auth/success";
const FAILED_PATH = "/api/auth/failed";

export default class SignIn extends Component {
  state = { fbSignIn: false, loginFailed: false, isLoading: false }
  render() {
    if (this.state.isLoading) return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
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
      <View style={[styles.container, {backgroundColor: brandColor.primary}]}>
        <View style={{width: dimensions.fullWidth*6/8}}>
          <Text style={[textStyles.brandTitle, { marginBottom: 45 }]}>xBook</Text>
          {this.state.loginFailed && <Text>There was an issue during log in</Text>}
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            onPress={this._onFbSignIn}
          />
        </View>
      </View>
    );
  }

  onNavigationStateChange = (navState) => {
    const url = parseUrl(navState.url, true);

    if (url.pathname == SUCCESS_PATH) {
      const authToken = url.query['auth_token'];
      this.setState({ isLoading: true })
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