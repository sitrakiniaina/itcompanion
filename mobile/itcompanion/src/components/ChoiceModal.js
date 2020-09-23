import React, { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ChoiceModal(props) {


    const [country, setCountry] = useState([]);

    const handleSubmit = () => {
        console.log("modal valiny"+country);
        props.setSemestre(country);
        //
    };

    return (
        // <View style={{ flex: 1 }}>
            <Modal isVisible={props.isVisible}>
                <View style={styles.modalContainer}>
                    <View>
                        <Text style={styles.modalTitle}>Veuillez selectionner votre Semestre</Text>
                    </View>

                    <View>
                        <DropDownPicker
                            items={[
                                { label: 'Semestre 1', value: 's1', icon: () => <Icon name="school" size={18} color="#900" /> },
                                { label: 'Semestre 2', value: 's2', icon: () => <Icon name="school" size={18} color="#900" /> },
                                { label: 'Semestre 3', value: 's3', icon: () => <Icon name="school" size={18} color="#900" /> },
                                { label: 'Semestre 4', value: 's4', icon: () => <Icon name="school" size={18} color="#900" /> },
                                { label: 'Semestre 5', value: 's5', icon: () => <Icon name="school" size={18} color="#900" /> },
                                { label: 'Semestre 6', value: 's6', icon: () => <Icon name="school" size={18} color="#900" /> },

                            ]}
                            multiple={true}
                            multipleText="%d items have been selected."
                            min={0}
                            max={10}
                            defaultValue={country}
                            containerStyle={{ height: 60, width: 320 }}
                            style={{ backgroundColor: '#fafafa' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => setCountry(item)}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmit}>
                        <Text style={styles.buttonConnectTextStyle}>VALIDER</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        // </View>
    );
}

const styles = {
    modalContainer: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 20,
        //opacity: 0.9,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent:'space-between',
        //justifyContent: 'center',
        height: 300

    },
    modalTitle: {
        flexDirection: 'row',
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },

    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        width: 250,
        alignItems: 'center',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
    },
    buttonConnectTextStyle: {
        color: '#FFFFFF',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
    },
};
