import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SearchBook from './screens/SearchBook';
import AddBook from './screens/AddBook';
import Reading from './screens/Reading';
import Explore from './screens/Explore';
import AuthLoading from './screens/AuthLoading';
import SignIn from './screens/SignIn';

import { brandColor, layoutColor, textColor, textSize, textStyles } from "./styles/base";

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
                ...textStyles.header
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
        tabBarOptions: {
            activeTintColor: brandColor.primary,
            inactiveTintColor: textColor.subtitle,
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

const AuthStack = createStackNavigator({ SignIn: SignIn },{
    headerMode: 'none'
});
const AuthLoadingStack = createStackNavigator({ AuthLoading: AuthLoading },{
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
