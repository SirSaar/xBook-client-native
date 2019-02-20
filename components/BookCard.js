import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const BookCard = (props) => (
  <Card>
    <Card.Cover source={{ uri: props.thumbnail }} />
    <Card.Actions>
      <Button>Giveaway</Button>
    </Card.Actions>
  </Card>
);

export default BookCard;