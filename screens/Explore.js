import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
const { height, width } = Dimensions.get('window')
class Explore extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
            </SafeAreaView>
        );
    }
}

export default Explore;