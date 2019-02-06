import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class BookTile extends Component {
    state = {showDetails: false}

    _onShowDetails = () => {
        this.props.thumbnail && this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <View style={{ paddingTop: 8, width: this.props.width / 2 - 30, height: this.props.width/2+20 , borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this._onShowDetails}>
                    {
                        this.state.showDetails || !this.props.thumbnail ?
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.title}</Text>
                            <Text style={{ fontSize: 10 }}>{this.props.author}</Text>
                        </View>
                        :
                        <Image
                            style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
                            source={{uri: this.props.thumbnail}} />
                    }

                    </TouchableOpacity>
                </View>
                { this.props.children }
            </View>
        );
    }
}

export default BookTile;
