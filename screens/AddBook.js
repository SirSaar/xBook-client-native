import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

export default class AddBook extends React.Component {
  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', null);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <Card
        title={book.title}
        image={book.thumbnail ? {uri: book.thumbnail} : undefined}
        imageStyle={{height: 250}}>
            <Text style={{marginBottom: 10}}>
                Author: {book.author}
            </Text>

            <Button
                icon={<Icon name='ios-book' type='ionicon' color='#ffffff' containerStyle={{marginRight: 7}} />}
                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 8, backgroundColor: '#E68523'}}
                title='Reading'
                onPress={()=>console.log()} />
            <Button
                icon={<Icon name='library-add' type='MaterialIcons' color='#ffffff' containerStyle={{marginRight: 5}} />}
                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#00A0DC'}}
                title='Add to Shelf'
                onPress={()=>console.log()} />

        </Card>
        </View>
      </SafeAreaView>
    );
  }
}
