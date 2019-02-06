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
            <View style={[styles.container,this.props.stretch ? styles.stretch : styles.box]}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this._onShowDetails}>
                    {
                        this.state.showDetails || !this.props.thumbnail ?
                        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={baseStyles.title}>{this.props.title}</Text>
                            <Text style={baseStyles.subtitle}>{this.props.author}</Text>
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
        paddingTop: 8, 
    },
    stretch: {
        width:  dimensions.fullWidth - 15,
        height: dimensions.fullHeight*6/8
    },
    box: {
        borderWidth: 0.5, 
        borderColor: layout.border, //#dddddd
        width: dimensions.fullWidth / 2 - 30, 
        height: dimensions.fullWidth /2 + 20
    }
})
export default BookTile;
