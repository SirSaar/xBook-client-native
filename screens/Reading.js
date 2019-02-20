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

import { brandColor, layoutColor } from "../styles/base";
import { inject, observer } from "mobx-react";

@inject('userStore')
@observer
class Reading extends Component {

    _onAddToGiveaway = (id) => this.props.userStore.updateBook(id, true);

    render() {
        const books = this.props.userStore.myAvailableBooks;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: layoutColor.background }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 20, marginTop: 50, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        !!books.length ?
                        books.map(book => 
                            <BookTile key={book.id}
                            title={book.title}
                            author={book.author}
                            thumbnail={book.thumbnail}
                            >
                                <View style={{padding: 8, paddingBottom: 0}}>
                                    <Button onPress={()=> this._onAddToGiveaway(book.id)} color={brandColor.primary} title="Add to Giveaway"/>
                                </View>
                            </BookTile>
                        ) :
                        (<Text>There is no books</Text>)
                    }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Reading;