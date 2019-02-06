import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import BookTile from "../components/BookTile";
import { colors } from "../styles/base";

export default class AddBook extends React.Component {
  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', null);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <BookTile stretch
          title={book.title}
          author={book.author}
          thumbnail={book.thumbnail}>
          <View style={{ marginTop: 12, flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent: 'flex-start'}}>
            <Button
                  icon={<Icon name='library-add' type='MaterialIcons' color='#ffffff' containerStyle={{marginRight: 5}} />}
                  buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 10, backgroundColor: colors.primary}}
                  title='Add to Shelf'
                  onPress={()=>console.log('h')} />
            <Button
                icon={<Icon name='ios-book' type='ionicon' color='#ffffff' containerStyle={{marginRight: 7}} />}
                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: colors.primary}}
                title='Read'
                onPress={()=>console.log()} />
          </View>
        </BookTile>
        </View>
      </SafeAreaView>
    );
  }
}
