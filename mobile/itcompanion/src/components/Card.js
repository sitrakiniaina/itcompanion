import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
  } from 'react-native';

const CustomCard = () => (
  <Card style={{marginVertical:5,marginHorizontal:5}}>
    <Card.Cover source={{ uri: 'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1' }} />
    <Card.Content>
      <Title>Evenement titre</Title>
      <Paragraph>This is an example to make Section List in React Native. Section List is a list of sections and headings. It is among the simple but mostly used c</Paragraph>
    </Card.Content>
    <Card.Actions>    
      <Button>Voir détails</Button>
      <Text style={{marginLeft:120}}>20 Aout 2020</Text>
    </Card.Actions>
  </Card>
);

export default CustomCard;