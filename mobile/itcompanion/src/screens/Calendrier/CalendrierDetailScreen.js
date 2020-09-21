import React, { Component } from 'react';
import { Alert, StyleSheet, Text, Button, View, TouchableOpacity, Typography, ScrollView } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { ListItem, Avatar, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

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
                        style={styles.input}
                        placeholder='Examen Programmation'
                        value="Examen Programmation"
                        leftIcon={
                            <Icon
                                name='text'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        style={styles.input}
                        placeholder='Début'
                        value='Jeu 03 2020 8:01'
                        libelle="Début"
                        leftIcon={
                            <Icon
                                name='calendar'
                                size={24}
                                color='black'
                            />
                        }

                    />
                    <Input
                        style={styles.input}
                        placeholder='Fin'
                        value='Jeu 03 2020  8:00'
                        leftIcon={
                            <Icon
                                name='calendar'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        style={styles.input}
                        placeholder='Lieu'
                        // value='Ambohijanaka'
                        leftIcon={
                            <Icon
                                name='location'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        style={styles.input}
                        placeholder='Description'

                        multiline={true}
                        numberOfLines={4}
                        leftIcon={
                            <Icon
                                name='document-text'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        accessibilityRole='timer'
                        style={styles.input}
                        placeholder='timer'
                        value='08:00'
                        leftIcon={
                            <Icon
                                name='alarm'
                                size={24}
                                color='black'
                            />
                        }
                    />

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

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,

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
    },
    input: {
        textAlign: 'left',
        paddingLeft: 20
    }
});