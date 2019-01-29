import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';

export default bookTile = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:10}}>{props.book.title}</Text>
            <Text style={{fontSize:8}}>{props.book.author}</Text>
            <Image source={{uri: props.book.thumbnail, width: 64, height: 64}} />
            <Button
            onPress={() => _goToURL(props.book.more)}
            title="Read More..."
          />
        </View>
    )
}

const _goToURL = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log('Don\'t know how to open URI: ' + url);
    }
  });
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });