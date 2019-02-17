import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import BookTile from "../components/BookTile";
import { brandColor, layoutColor } from "../styles/base";
import BookCard from '../components/BookCard';

export default class AddBook extends React.Component {
  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', null);

    return book && (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: layoutColor.background }}>
          <BookCard
          title={book.title}
          author={book.author}
          thumbnail={book.thumbnail}>
            <View style={{ marginTop: 8}}>
              <Button
                    icon={<Icon name='library-add' type='MaterialIcons' color='#ffffff' containerStyle={{marginRight: 5}} />}
                    buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 10, backgroundColor: brandColor.background}}
                    title='Add to Shelf'
                    onPress={()=>console.log('h')} />
              <Button
                  icon={<Icon name='ios-book' type='ionicon' color='#ffffff' containerStyle={{marginRight: 7}} />}
                  buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: brandColor.background}}
                  title='Read'
                  onPress={()=>console.log()} />
            </View>
          </BookCard>
        </View>
      </SafeAreaView>
    );
  }
}
