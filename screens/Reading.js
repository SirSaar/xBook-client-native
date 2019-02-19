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
import { inject, observer } from "mobx-react";

@inject('userStore')
@observer
class Reading extends Component {

    constructor(props) {
        super(props);
        this.books = props.userStore.currentUser.myNonAvailableBooks;
    }

    _onAddToGiveaway = async (id) => {
        const books = [...this.state.books];
        const index = books.findIndex(book => book.id === id);
        books.splice(index,1);
        this.setState({books});
        await changeBookStatus(id, true);
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
                                    <Button onPress={()=> this._onAddToGiveaway(book.id)} color={brandColor.primary} title="Add to Giveaway"/>
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