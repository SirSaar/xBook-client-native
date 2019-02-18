import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View, WebView, ActivityIndicator, AsyncStorage } from 'react-native';
const parseUrl = require('url-parse');
import { serverUrl } from '../config';
import { SocialIcon } from "react-native-elements";
import { textStyles, brandColor,dimensions } from "../styles/base";
import { inject, observer } from 'mobx-react';

const LOGIN_URL = serverUrl + "/api/auth/facebook";
const SUCCESS_PATH = "/api/auth/success";
const FAILED_PATH = "/api/auth/failed";

@inject('authStore')
@observer
export default class SignIn extends Component {
  state = { fbSignIn: false }
  render() {
    if (this.props.authStore.isLoading) return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
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
      );
    }
    return (
      <View style={[styles.container, {backgroundColor: brandColor.primary}]}>
        <View style={{width: dimensions.fullWidth*6/8}}>
          <Text style={[textStyles.brandTitle, { marginBottom: 45 }]}>xBook</Text>
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
      this.onSuccess(authToken);
    }

    if (url.pathname == FAILED_PATH) {
      this.onFailed();
    }
  }

  onFailed = async () => {
    this.setState({fbSignIn:false});
    // TODO: open snackbar with message
  }

  onSuccess = async (token) => {
    await this.props.authStore.setToken(token);
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