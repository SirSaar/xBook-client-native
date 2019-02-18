import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  View,
} from 'react-native';
import { brandColor } from "../styles/base";
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const authToken = await this.props.authStore.loadToken();
    this.props.navigation.navigate(authToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: brandColor.primary,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});