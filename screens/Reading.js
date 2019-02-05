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

import { getReading, addToShelf } from "../services/user.service";
import { currentUser } from "../models/users";
import { getBooks } from "../services/bookDetails.service";

const { height, width } = Dimensions.get('window')
class Reading extends Component {
    constructor(props) {
        super(props);
        getReading(currentUser)
        .then(books => this.setState({books}));
    }

    _onAddToShelf = async (id) => {
        await addToShelf(id);
        const books = await getReading(currentUser);
        this.setState({books});
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        this.state.books && 
                        this.state.books.map(book => 
                            <BookTile width={width}
                            title={book.title}
                            author={book.author}
                            thumbnail={book.thumbnail}
                            >
                            <Button onPress={()=> this._onAddToShelf(bood.id)}>Add to Shelf</Button>
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