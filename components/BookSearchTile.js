import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    TouchOpacity
} from 'react-native';
import { layout, text } from '../styles/base';

export default class BookTile extends Component {

    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Image source={{uri: this.props.thumbnail}}
                            style={styles.thumbnail}
                            resizeMode="contain" />
                        <View style={styles.columnText}>
                            <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                                {this.props.title}
                            </Text>
                            <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
                                {this.props.author}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 1,
        borderBottomWidth: 1,
        borderColor: layout.border, //'#DCDCDC'
    },
    rowContainer: {
        height: 80,
        width: 300,
        flexDirection: 'row',
    },
    title: {
        paddingLeft: 10,
        paddingTop: 1,
        fontSize: 10,
        fontWeight: 'bold',
        color: text.title
    },
    author: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 8,
        color: text.subtitle
    },
    thumbnail: {
        height: 80,
        width: 80,
    },
    columnText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
});
