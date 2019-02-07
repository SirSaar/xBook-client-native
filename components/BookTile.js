import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { dimensions,layout,baseStyles } from "../styles/base";

class BookTile extends Component {
    state = {showDetails: false}

    _onShowDetails = () => {
        this.props.thumbnail && this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <View style={[styles.container, styles.box]}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this._onShowDetails}>
                    {
                        this.state.showDetails || !this.props.thumbnail ?
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <View>
                                <Text style={baseStyles.title}>{this.props.title}</Text>
                                <Text style={baseStyles.subtitle}>{this.props.author}</Text>
                            </View>
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

const styles = StyleSheet.create({
    container: { 
        paddingVertical: 12,
        backgroundColor: layout.box,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
    },
    box: {
        borderWidth: 0.5, 
        borderColor: layout.border, 
        width: dimensions.fullWidth / 2 - 30, 
        height: dimensions.fullWidth /2 + 20,
        marginBottom: 10
    }
})
export default BookTile;
