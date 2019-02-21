import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions
} from "react-native";
import BookCard from '../components/BookCard';

import { inject, observer } from "mobx-react";
import { withTheme } from 'react-native-paper';

@inject('userStore')
@observer
class Reading extends Component {

    _onAddToGiveaway = (id) => this.props.userStore.updateBook(id, true);

    render() {
        const {
            theme: {
              colors: { background },
            },
          } = this.props;
      
        const books = this.props.userStore.availableBooks;
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
                <ScrollView>
                    <View style={styles.grid}>
                    {
                        !!books.length ?
                        books.map(book => 
                            <View style={styles.item} key={book.id}>
                                <BookCard 
                                title={book.title}
                                author={book.author}
                                thumbnail={book.thumbnail}
                                >
                                </BookCard>
                            </View>
                        ) :
                        (<Text>There is no books</Text>)
                    }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ...Platform.select({
      web: {
        grid: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gridRowGap: '8px',
          gridColumnGap: '8px',
          padding: 8,
        },
        item: {
          width: '100%',
          height: 150,
        },
      },
      default: {
        grid: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 4,
        },
        item: {
          height: Dimensions.get('window').width / 2,
          width: '50%',
          padding: 4,
        },
      },
    }),
  });

export default withTheme(Reading);