import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Typography, ScrollView } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { ListItem, Avatar, Icon, Input } from 'react-native-elements'

export default class CalendrierDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shedule: this.props.shedule,
            dateSelected: '',
        };
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <Input
                        placeholder='Titre'
                    // leftIcon={
                    //     <Icon
                    //         name='av-timer'
                    //         size={24}
                    //         color='black'
                    //     />
                    // }
                    />
                    <Input
                        placeholder='Début'
                    // leftIcon={
                    //     <Icon
                    //         name='av-timer'
                    //         size={24}
                    //         color='black'
                    //     />
                    // }
                    />
                    <Input
                        placeholder='Fin'
                    />

                </View>
                <View >
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                      >
                        <Text style={styles.buttonTextStyle}>Enregistrer</Text>
                    </TouchableOpacity>
                </View>
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
                    markedDates={this.state.dateSelected}
                    markingType={'simple'}

                />

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

        borderRadius: 5,
        padding: 10,
        margin: 10,
        height: 230
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
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