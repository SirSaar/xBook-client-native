import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {createAppContainer, StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';

import AddBook from './components/AddBook';

const AddBookStack = createStackNavigator({
    ChooseBook: {
        screen: AddBook,
        navigationOptions: {
            title: 'Choose book you have'
        }
    },
    BookOptions: {
        screen: AddBook,
        navigationOptions: {
            title: 'What to do with the book?'
        }
    },
});

const AppNavigator = createBottomTabNavigator({
    'AddBook': {
        screen: AddBookStack,
        navigationOptions: {
            tabBarLabel: 'Add Book',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={24}
                                               color={tintColor}/>
        },
    },
    {
        tabBarOptions: {
          activeTintColor: 'red',
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
