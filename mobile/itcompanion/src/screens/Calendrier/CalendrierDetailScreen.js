import React, { Component } from 'react';
import { Alert, StyleSheet, Text, Button, View, TouchableOpacity, Typography, ScrollView } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
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
                        placeholder='Examen Programmation'

                    />
                    <Input
                        placeholder='Début'
                        value='Jeu 03 2020 8:00'

                    />
                    <Input
                        placeholder='Fin'
                        value='Jeu 03 2020 8:00'
                    />

                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>
                        Examen de Programmation avec le language C
                    </Text>
                </View>
                {/* <View style={styles.containerButton}>

                    <Button
                        title="Enregistrer"
                        color="#f194ff"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                    <Button
                        title="Annuler"
                        color="#f194ff"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View> */}
                {/* <Calendar
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

                /> */}

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
    },
    containerButton: {
        padding: 10,
        margin: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    description: {
        textAlign: 'center',
        borderRadius: 5,
        marginVertical: 8,
        padding: 10,
        margin: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
    }
});