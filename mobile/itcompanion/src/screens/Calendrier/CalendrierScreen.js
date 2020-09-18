import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Typography, ScrollView } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import data from '../../mock/data.js';
export default class CalendrierScreen extends Component {
  constructor(props) {
    super(props);
    this.initSelectedDate = this.initSelectedDate.bind(this);
    this.state = {
      items: {},
      dateSelected: '',
      daySelected: ''
    };
  }

  navigateToDetailsPage() {
    this.props.navigation.navigate("CalendrierDetails");
  }

  onDayPress = (day) => {
    this.setState({
      daySelected: day.dateString,
      dateSelected: {
        [day.dateString]: {
          selected: true, color: '#307ecc', selectedColor: '#466A8F'
        }
      }
    });
    console.log(this.state.dateSelected);
  }
  initSelectedDate() {
    this.setState({
      daySelected: "2020-09-18",
      dateSelected: {
        ['2020-09-18']: {
          selected: true, color: '#307ecc', selectedColor: '#466A8F'
        }
      }
    });
  }
  componentDidMount() {
    this.initSelectedDate();
  }
  render() {
    return (
      <>
        <Calendar
          style={[
            styles.calendar,
            {
              borderRadius: 5,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
              marginBottom: 3,
            },
          ]}
          onDayPress={this.onDayPress}
          // Collection of dates that have to be colored in a special way. Default = {}
          markedDates={this.state.dateSelected}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'simple'}
          current={'2020-09-18'}

        />
        <ScrollView>
          
          {list
          .filter(({ dateDebut }) => dateDebut === this.state.daySelected)
          .map((l, i) => (         
              <ListItem key={i} bottomDivider onPress={this.navigateToDetailsPage.bind(this)}>
                <Icon name={"av-timer"} color='red' />
                <ListItem.Content>
                  <ListItem.Title>{"." + l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron size={30} color='#466A8F'
                  onPress={this.navigateToDetailsPage.bind(this)} />
              </ListItem>
          ))}
        </ScrollView>
      </>
    );
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


}
const list = [
  {
    id: 1,
    name: 'Examen mathematique',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '17:00 - 19:00 Connecting to the development server...',
    dateDebut: '2020-09-18'
  },
  {
    id: 2,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    dateDebut: '2020-09-18'
  },
  {
    id: 3,
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    dateDebut: '2020-09-18'
  },
  {
    id: 4,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    dateDebut: '2020-09-02'
  },
  {
    id: 5,
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    dateDebut: '2020-09-10'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    dateDebut: '2020-09-15'
  },
  {
    name: 'Examen mathematique',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '17:00 - 19:00 Connecting to the development server...'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },

]
// const keyExtractor = (item, index) => index.toString()
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});