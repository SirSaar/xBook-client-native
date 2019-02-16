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
    Button,
    Image,
    Dimensions
} from "react-native";
import BookTile from '../components/BookTile';

import { getReading, changeBookStatus } from "../services/user.service";
import { currentUser, BOOK_STATUS } from "../models/users";
import { brandColor, layoutColor } from "../styles/base";

class Reading extends Component {
    state = {books: []}
    constructor(props) {
        super(props);
        getReading(currentUser)
        .then(books => {
            this.setState({books});
        });
    }

    _onAddToShelf = async (id) => {
        const books = [...this.state.books];
        const index = books.findIndex(book => book.id === id);
        books.splice(index,1);
        this.setState({books});
        await changeBookStatus(id, BOOK_STATUS.shelf);
    }

    render() {
        console.log(this.state.books.length)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: layoutColor.background }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 20, marginTop: 50, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        !!this.state.books.length && 
                        this.state.books.map(book => 
                            <BookTile key={book.id}
                            title={book.title}
                            author={book.author}
                            thumbnail={book.thumbnail}
                            >
                                <View style={{padding: 8, paddingBottom: 0}}>
                                    <Button onPress={()=> this._onAddToShelf(book.id)} color={brandColor.primary} title="Add to Shelf"/>
                                </View>
                            </BookTile>
                        )
                    }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Reading;