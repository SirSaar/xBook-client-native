import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView } from 'react-native';
import BookTile from './components/BookTile';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBook extends React.Component {
  state = {search: '', books: [], isLoading: false, bookSelected: null};
  
  searchBook = (bookName) => {
    this.setState({search: bookName});
    if(bookName.length > 2) {
      this.setState({isLoading: true});
      setTimeout(()=> {
        this.state.search === bookName &&
        this.googleBook(bookName)
        .then(books => this.setState({books, isLoading: false}))
        .catch(console.log);
      },2);
    } else {
      this.setState({books: [], isLoading: false});
    }
  }

  googleBook = async (bookName) => {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
      
      const resJson = await res.json();

      const books = resJson.items;
      if(!books) return this.setState({books: [], isLoading: false});
      const fewBooks = books.slice(0, 4);
      const formattedBooks = fewBooks.map((book) => {
          const newBook={};
          newBook.id=book.id;
          newBook.title=book.volumeInfo.title;
          newBook.thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
          newBook.author=book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
          newBook.more=book.volumeInfo.infoLink;
          return newBook;
        })
      return formattedBooks;
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
          <View style={{ flex: 1,justifyContent: 'flex-start', backgroundColor: 'white', marginHorizontal: 20 }}>
              <View style={{
                  flexDirection: 'row', padding: 10,
                  backgroundColor: 'white',
                  borderWidth: 0.5,
                  borderColor: '#DCDCDC',
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
              ( <ActivityIndicator style={{ flex: 1, justifyContent: "flex-start", marginTop: 20 }} size="large" color="#0000ff" /> ) :
              ( this.state.books && this.state.books.map(this._renderBook) )
            }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
