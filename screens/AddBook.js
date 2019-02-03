import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

export default class AddBook extends React.Component {
  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', null);
    console.log(book);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 10}}>
        <Card
        title={book.title}
        image={book.thumbnail ? {uri: book.thumbnail} : undefined}
        imageStyle={{height: 350}}>
            <Text style={{marginBottom: 10}}>
                Author: {book.author}
            </Text>
            <View style={{flex:1}}>
                <Button
                    icon={<Icon name='ios-book' type='ionicon' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Reading' />
                <Button
                    icon={<Icon name='library-add' type='MaterialIcons' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Add to Shelf' />
            </View>
        </Card>
        </View>
      </SafeAreaView>
    );
  }
}
