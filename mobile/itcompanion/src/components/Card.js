import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking,
} from 'react-native';
const parseDate = (date) => {
  if (date) {
    let temp = new Date(date);
    return temp.toDateString();
  }
  return "";

}
// 'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1'
const CustomCard = (props) => (
  <Card style={{ marginVertical: 5, marginHorizontal: 5 }}>
    {
      props.ogImage?
      (<Card.Cover source={{ uri: props.ogImage }} />):null
    }
    
    <Card.Content>
      <Title>{props.titre ? props.titre : "Evenement titre"}</Title>
      <Paragraph>{props.description ? props.description : "This is an example to make Section List in React Native. Section List is a list of sections and headings. It is among the simple but mostly used c"}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={()=>Linking.openURL(props.lien)} >Voir détails</Button>
      <Text style={{ marginLeft: 120 }}>{parseDate(props.dateDebut)}</Text>
    </Card.Actions>
  </Card>
);

export default CustomCard;