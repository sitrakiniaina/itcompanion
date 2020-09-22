import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
// 'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1'
const CustomCard = (props) => (
  <Card style={{ marginVertical: 5, marginHorizontal: 5 }}>
    <Card.Cover source={{ uri: props.ogImage }} />
    <Card.Content>
      <Title>{props.titre ? props.titre : "Evenement titre"}</Title>
      <Paragraph>{props.description ? props.description : "This is an example to make Section List in React Native. Section List is a list of sections and headings. It is among the simple but mostly used c"}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Voir détails</Button>
      <Text style={{ marginLeft: 120 }}>20 Aout 2020 {Date.parse(props.dateDebut ? props.dateDebut : null)}</Text>
    </Card.Actions>
  </Card>
);

export default CustomCard;