import React from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView } from 'react-native';
import BookTile from './BookTile';

export default class AddBook extends React.Component {
  state = {books: []}
  searchBook(bookName) {
    if(bookName.length > 2) this.googleBook(bookName);
  }

  async googleBook(bookName) {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
        const resJson = await res.json();
      } catch {
          console.log('google book error')
      }

      const books = resJson.items;
      const fewBooks = books.slice(0, 3);
      const formattedBooks = fewBooks.map((book) => {
          book.title=book.volumeInfo.title;
          book.thumbnail=book.imageLinks.smallThumbnail
          book.author=book.volumeInfo.authors.join(', ');
          book.more=book.infoLink
        })
      this.setState({books: formattedBooks});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput placeholder="Enter your book name..." onChangeText={(text) => this.searchBook(text)} />
        {this.state.books && this.state.books.map(book => <BookTile book={book}/>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
