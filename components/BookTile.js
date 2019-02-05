import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { TouchableOpacity } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native";

class BookTile extends Component {
    state = {showDetails: false}
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this.setState({showDetails: !this.state.showDetails})}>
                    {
                        this.state.showDetails ?
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.title}</Text>
                            <Text style={{ fontSize: 10 }}>{this.props.author}</Text>
                        </View>
                        :
                        <Image
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            source={{uri: this.props.thumbnail}} />
                    }

                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    { this.props.children }
                </View>
            </View>
        );
    }
}

export default BookTile;
