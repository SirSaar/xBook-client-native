import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { dimensions,layoutColor,textStyles } from "../styles/base";

const cardSize = 280;

class BookCard extends Component {
    state = {showDetails: false}

    _onShowDetails = () => {
        this.props.thumbnail && this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <View style={styles.container}>
                    <TouchableOpacity style={{}} onPress={this._onShowDetails}>
                    {
                        this.state.showDetails || !this.props.thumbnail ?
                        <View style={{width: cardSize, height: cardSize}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={textStyles.title}>{this.props.title}</Text>
                                <Text style={textStyles.subtitle}>{this.props.author}</Text>
                            </View>
                        </View>
                        :
                        <Image
                            style={{ width: cardSize, height: cardSize,resizeMode: 'contain' }}
                            source={{uri: this.props.thumbnail}} />
                    }

                    </TouchableOpacity>
                { this.props.children }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: layoutColor.box,
        paddingHorizontal: 12,
        paddingVertical: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
    },
})
export default BookCard;
