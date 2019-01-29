import React from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView, ActivityIndicator } from 'react-native';
import BookTile from './BookTile';

export default class AddBook extends React.Component {
  state = {books: [], loading: false}
  searchBook(bookName) {
    if(bookName.length > 2) {
      this.googleBook(bookName).catch(console.log);
      this.setState({loading: true})
    }
  }

  async googleBook(bookName) {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
      
      const resJson = await res.json();

      const books = resJson.items;
      const fewBooks = books.slice(0, 3);
      const formattedBooks = fewBooks.map((book) => {
          book.title=book.volumeInfo.title;
          book.thumbnail=book.volumeInfo.imageLinks.smallThumbnail
          book.author=book.volumeInfo.authors.join(', ');
          book.more=book.volumeInfo.infoLink;
          return book;
        })
      this.setState({books: formattedBooks, loading: false});
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput placeholder="Enter your book name..." onChangeText={(text) => this.searchBook(text)} />
          {this.state.loading ? 
            ( <ActivityIndicator size="large" color="#0000ff" /> ) :
            ( this.state.books && this.state.books.map(book => <BookTile book={book}/>) )
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40
  },
});
