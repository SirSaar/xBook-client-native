import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { dimensions,layoutColor,cardTextStyles } from "../styles/base";

const cardSize = 280;

class BookCard extends Component {
    state = {showDetails: false}

    _onShowDetails = () => {
        this.props.thumbnail && this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        return (
            <View style={styles.container}>
                    <TouchableOpacity onPress={this._onShowDetails}>
                    {
                        this.state.showDetails || !this.props.thumbnail ?
                        <View style={{width: cardSize, height: cardSize}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={cardTextStyles.title}>{this.props.title}</Text>
                                <Text style={cardTextStyles.subtitle}>{this.props.author}</Text>
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
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
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
