import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './router';
import { Provider } from 'mobx-react';
import { Provider as PaperProvider } from 'react-native-paper';

import userStore from './stores/user.store';
import authStore from './stores/auth.store';

import { configure } from "mobx";
configure({ enforceActions: 'observed' });

const stores = {
  userStore,
  authStore
};

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
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
