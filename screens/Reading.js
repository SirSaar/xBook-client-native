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
import BookTile from '../components/BookTile';

import { getReading } from "../services/user.service";
import { currentUser } from "../models/users";
import { getBooks } from "../services/book.service";

const { height, width } = Dimensions.get('window')
class Reading extends Component {
    constructor(props) {
        super(props);
        getReading(currentUser)
        .then(getBooks)
        .then(books => this.setState({books}));
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <BookTile width={width}
                            name="The Cozy Place"
                            type="PRIVATE ROOM - 2 BEDS"
                            price={82}
                            rating={4}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Reading;