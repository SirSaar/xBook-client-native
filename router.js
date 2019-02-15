import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SearchBook from './screens/SearchBook';
import AddBook from './screens/AddBook';
import Reading from './screens/Reading';
import Explore from './screens/Explore';
import AuthLoading from './screens/AuthLoading';
import SignIn from './screens/SignIn';

import { colors, layout, text, fonts, baseStyles } from "./styles/base";

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
            },
            headerTitleStyle: {
                ...baseStyles.header
            }
        }
    });

const AppNavigator = createBottomTabNavigator({
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
    'Shelf': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'GiveAway',
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
        tabBarOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: text.subtitle,
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                shadowOffset: { width: 5, height: 3 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 5
            }
        }
    });

const AuthStack = createStackNavigator({ SignIn: SignIn });

const AuthNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: AppNavigator,
    }
);

export const AppContainer = createAppContainer(AuthNavigator);
