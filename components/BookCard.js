import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View,Text } from "react-native";

const BookCard = (props) => (
  <Card>
    {
    props.thumbnail ? 
    <Card.Cover source={{ uri: props.thumbnail }} /> :
    <BookCardDetails>{props.title}</BookCardDetails>
    }
    <Card.Actions>
      <Button onClick={()=>console.log}>Giveaway</Button>
    </Card.Actions>
  </Card>
);

const BookCardDetails = (props) => (
  <View>
    <Text>{props.children}</Text>
  </View>
)

export default BookCard;