import React, { Component } from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';

const FB_APP_ID = '672636582940821';

export default class SignIn extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Sign In with Facebook" onPress={this._handlePressAsync} />
      </View>
    );
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    // You need to add this url to your authorized redirect urls on your Facebook app
    console.log({
      redirectUrl
    });

    let result = await AuthSession.startAsync({
      authUrl:
        `https://glacial-fortress-14735.herokuapp.com/api/auth/facebook`
    });

    if (result.type !== 'success') {
      console.log('Uh oh, something went wrong', result)
      return;
    }
    console.log(result.params)

    const res = await fetch('https://glacial-fortress-14735.herokuapp.com/api/auth/token');
    const body = await res.json();
    console.log(JSON.stringify(body));
  };
}