import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView } from 'react-native';
import BookTile from './components/BookTile';
import Icon from 'react-native-vector-icons/Ionicons';
import { DotsLoader } from 'react-native-indicator';
import {searchBook} from '../services/book.serivce';

export default class SearchBook extends React.Component {
  state = {search: '', books: [], isLoading: false, bookSelected: null};
  
  searchBook = (bookName) => {
    this.setState({search: bookName});
    if(bookName.length > 2) {
      this.setState({isLoading: true});
      setTimeout(()=> {
        this.state.search === bookName &&
        searchBook(bookName)
        .then(books => this.setState({books, isLoading: false}))
        .catch(console.log);
      },2);
    } else {
      this.setState({books: [], isLoading: false});
    }
  }

  _onSelectBook = book => {
    return this.props.navigation.navigate('AddBook', {book});
  }

  _renderBook = book => (
      <BookTile key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          thumbnail={book.thumbnail}
          onPress={() => this._onSelectBook(book)}
        />
 );

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1,justifyContent: 'flex-start', marginTop: 20}}>
          <View style={{ flex: 1,justifyContent: 'flex-start', alignContent: 'center', backgroundColor: 'white', marginHorizontal: 20 }}>
              <View style={{
                  flexDirection: 'row', 
                  padding: 10,
                  backgroundColor: 'white',
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  elevation: 1,
              }}>
                  <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                  <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Try Harry Potter"
                      placeholderTextColor="grey"
                      onChangeText={this.searchBook}
                      value={this.state.search}
                      style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                  />
              </View>
            {this.state.isLoading ? 
              ( <View style={{ marginTop: 50,flex: 1,alignItems: 'center'}} ><DotsLoader color="#00A0DC" size={30} /></View> ) :
              ( this.state.books && this.state.books.map(this._renderBook) )
            }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
