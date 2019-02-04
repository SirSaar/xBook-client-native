import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer, StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchBook from './screens/SearchBook';
import AddBook from './screens/AddBook';

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
});

const AppNavigator = createBottomTabNavigator({
    'FindBook': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'Find Book',
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
    'MyBooks': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'My Books',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-book" type="ionicon" size={24}
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
            activeTintColor: '#0077B5',
            inactiveTintColor: 'grey',
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

export const AppContainer = createAppContainer(AppNavigator);
