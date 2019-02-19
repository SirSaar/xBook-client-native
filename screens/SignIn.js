import React, { Component } from 'react';
import { StyleSheet, View, WebView, ActivityIndicator, Text } from 'react-native';
const parseUrl = require('url-parse');
import { serverUrl } from '../config';

import { textStyles, brandColor, dimensions } from "../styles/base";
import { inject, observer } from 'mobx-react';
import { Title, Snackbar,DefaultTheme } from 'react-native-paper';
import { SocialIcon } from "react-native-elements";

const LOGIN_URL = serverUrl + "/api/auth/facebook";
const SUCCESS_PATH = "/api/auth/success";
const FAILED_PATH = "/api/auth/failed";

@inject('authStore')
@observer
export default class SignIn extends Component {
  state = { fbView: false, failed: false }
  render() {
    if (this.state.fbView) {
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
      <View style={[styles.container]}>
        <View style={{ marginBottom: 45 }}>
          <Text style={{ fontSize: 75 }}>xBook</Text>
        </View>
        <View style={{width: 250}}> 
          <SocialIcon
            button
            title='Continue with Facebook'
            type='facebook'
            onPress={this._onFbSignIn}
            loading={this.props.authStore.isLoading}
          />
        </View>
        <Snackbar
          visible={this.state.failed}
          onDismiss={() => this.setState({ failed: false })}
        >
          Login failed...
      </Snackbar>
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
    this.setState({ fbView: false, failed: true });
  }

  onSuccess = async (token) => {
    await this.props.authStore.setToken(token);
    this.props.navigation.navigate('App');
  }

  _onFbSignIn = () => {
    this.setState({ fbView: true })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});