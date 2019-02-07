import React from 'react';
import { StyleSheet,TouchableOpacity, Text,TextInput, View,FlatList, ActivityIndicator,SafeAreaView } from 'react-native';
import BookSearchTile from '../components/BookSearchTile';
import { Icon } from 'react-native-elements';
import { DotsLoader } from 'react-native-indicator';
import { searchBook } from '../services/bookDetails.service';
import { text, colors, layout } from '../styles/base';

export default class SearchBook extends React.Component {
  state = {search: '', books: [], isLoading: false};
  
  searchBook = (bookName) => {
    this.setState({search: bookName});
    if(bookName.length > 2) {
      this.setState({isLoading: true});
      setTimeout(()=> {
        this.state.search === bookName &&
        searchBook(bookName)
        .then(books => this.setState({books, isLoading: false}));
      },3);
    } else {
      this.setState({books: [], isLoading: false});
    }
  }

  _onSelectBook = book => {
    return this.props.navigation.navigate('AddBook', {book});
  }

  _renderBook = book => (
      <BookSearchTile key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          thumbnail={book.thumbnail}
          onPress={() => this._onSelectBook(book)}
        />
 );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: layout.primary }}>
        <View style={{ flex: 1,justifyContent: 'flex-start', marginTop: 20}}>
          <View style={{ flex: 1,justifyContent: 'flex-start', alignContent: 'center', marginHorizontal: 20 }}>
              <View style={{
                  flexDirection: 'row', 
                  alignItems: "center",
                  padding: 10,
                  backgroundColor: 'white',
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  elevation: 1,
              }}>
                  <Icon name="ios-search" size={20} type="ionicon" />
                  <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Try Harry Potter"
                      placeholderTextColor={text.subtitle}
                      onChangeText={this.searchBook}
                      value={this.state.search}
                      style={{ flex: 1, fontWeight: 'bold', backgroundColor: 'white', marginLeft: 10 }}
                  />
                  { !!this.state.search &&  
                  <TouchableOpacity onPress={()=>this.setState({search: '', books: [], isLoading: false})}>
                    <Icon name="ios-close" size={30} type="ionicon" style={{alignSelf: 'flex-end'}} />
                  </TouchableOpacity> 
                }
              </View>
            {this.state.isLoading ? 
              ( <View style={styles.icon} ><DotsLoader color={colors.primary} size={20} /></View> ) :
              ( !!this.state.books.length ? this.state.books.map(this._renderBook) :
              <View style={styles.icon} ><Icon name="find-in-page" color={colors.primary} size={95} type="material" /></View>
              )
            }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  icon: { 
    marginBottom: 70,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
