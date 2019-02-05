import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class BookTile extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={{uri: this.props.thumbnail}} />
                </View>
                <View style={{ flex: 1 }}>
                    { this.props.children }
                </View>
            </View>
        );
    }
}

export default BookTile;
