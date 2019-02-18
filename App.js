import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './router';

import { useStrict } from 'mobx';
import promiseFinally from 'promise.prototype.finally';
import { Provider } from 'mobx-react';

import userStore from './stores/user.store';
import authStore from './stores/auth.store';

const stores = {
  userStore,
  authStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);


export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
