import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  View,
} from 'react-native';
import { brandColor } from "../styles/base";
import { inject, observer } from 'mobx-react';
import { DefaultTheme } from 'react-native-paper';

@inject('authStore')
@observer
export default class AuthLoading extends React.Component {

  componentDidMount() {
    this.props.authStore.loadToken().then(authToken =>
      this.props.navigation.navigate(authToken ? 'App' : 'Auth')
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.background,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});