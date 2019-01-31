import React from 'react';
import { StyleSheet, Text,TextInput, View,FlatList, ActivityIndicator } from 'react-native';
import BookTile from './BookTile';

export default class AddBook extends React.Component {
  state = {books: [], isLoading: false}
  searchBook(bookName) {
    if(bookName.length > 2) {
      this.googleBook(bookName).catch(console.log);
      this.setState({isLoading: true})
    }
  }

  async googleBook(bookName) {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
      
      const resJson = await res.json();

      const books = resJson.items;
      if(!books) return this.setState({books: [], isLoading: false});
      const fewBooks = books.slice(0, 3);
      const formattedBooks = fewBooks.map((book) => {
          const newBook={};
          newBook.id=book.id;
          newBook.title=book.volumeInfo.title;
          newBook.thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
          newBook.author=book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
          newBook.more=book.volumeInfo.infoLink;
          return newBook;
        })
      return this.setState({books: formattedBooks, isLoading: false});
  }

  _renderItem = item => (
    <BookTile key={item.id}
        id={item.id}
        title={item.title}
        author={item.author}
        thumbnail={item.thumbnail}
        
  /> );

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
        <View style={styles.container}>
          <TextInput
            placeholder="Enter your book name..."
            onChangeText={this.searchBook}
          />
          {this.state.isLoading ? 
            ( <ActivityIndicator size="large" color="#0000ff" /> ) :
            ( this.state.books && this.state.books.map(this._renderItem) )
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
