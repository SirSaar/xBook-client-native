import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { dimensions,layout,baseStyles } from "../styles/base";

class BookCard extends Component {
    state = {showDetails: false}

    _onShowDetails = () => {
        this.props.thumbnail && this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <View style={[styles.container,this.props.stretch ? styles.stretch : styles.box]}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this._onShowDetails}>
                    {
                        this.state.showDetails || !this.props.thumbnail ?
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <View style={this.props.stretch && styles.textInStretch}>
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
    },
    stretch: {
        borderWidth: 0.5, 
        borderColor: layout.border, 
        width: (dimensions.fullWidth / 2 - 30)*2, 
        height: (dimensions.fullWidth /2 + 20)*2-100,
    },
    textInStretch: {
        width: dimensions.fullWidth / 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        borderWidth: 0.5, 
        borderColor: layout.border, 
        width: dimensions.fullWidth / 2 - 30, 
        height: dimensions.fullWidth /2 + 20,
        marginBottom: 10
    }
})
export default BookCard;
