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
import BookTile from "../components/BookTile";
import BookCard from "../components/BookCard";

class Explore extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <BookCard title={'title'}
                        author={'author'}
                        thumbnail={'http://books.google.com/books/content?id=YvQ_AhkJpBUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}>
                </BookCard>
            </SafeAreaView>
        );
    }
}

export default Explore;