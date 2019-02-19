import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, withNavigation } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from 'react-native-elements';

import SearchBook from './screens/SearchBook';
import AddBook from './screens/AddBook';
import Reading from './screens/Reading';
import Explore from './screens/Explore';
import AuthLoading from './screens/AuthLoading';
import SignIn from './screens/SignIn';

import { brandColor, layoutColor, textColor, textSize, textStyles } from "./styles/base";
import { DefaultTheme } from 'react-native-paper';

const AddBookStack = createStackNavigator({
    SearchBook: {
        screen: SearchBook,
        navigationOptions: {
            title: 'Choose a book you have'
        }
    },
    AddBook: {
        screen: AddBook,
        navigationOptions: {
            title: 'What to do with the book?'
        }
    },
}, {
        defaultNavigationOptions: {
            headerStyle: {
                elevation: 1,
                backgroundColor: DefaultTheme.colors.primary
            },
            headerTintColor: 'white',
            headerTitleStyle: DefaultTheme.fonts.medium
        }
    });

const AppNavigator = createMaterialBottomTabNavigator({
    'Explore': {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-search" type="ionicon" size={24}
                color={tintColor} />
        }
    },
    'AddBook': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'Add Book',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add" type="ionicon" size={24}
                color={tintColor} />
        }
    },
    'Reading': {
        screen: Reading,
        navigationOptions: {
            tabBarLabel: 'Reading',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-book" type="ionicon" size={24}
                color={tintColor} />
        }
    },
    'Giveaway': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'Giveaway',
            tabBarIcon: ({ tintColor }) => <Icon name='library-books' type='MaterialIcons' size={24}
                color={tintColor} />
        }
    },
    'Requests': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'Requests',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-swap" type="ionicon" size={24}
                color={tintColor} />
        }
    },

},
    {
        initialRouteName: 'Explore',
        // activeColor: '#f0edf6',
        // inactiveColor: '#3e2465',
        // barStyle: { backgroundColor: '#694fad' },
    });

const AuthStack = createStackNavigator({ SignIn: SignIn }, {
    headerMode: 'none'
});
const AuthLoadingStack = createStackNavigator({ AuthLoading: AuthLoading }, {
    headerMode: 'none'
});

const AuthNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingStack,
        Auth: AuthStack,
        App: AppNavigator,
    }
);

export const AppContainer = createAppContainer(AuthNavigator);
