import React, { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { getCurrentUserByEtuID } from '../api/APIUtils';

export default function EtuModal(props) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(props.id);
  const [etuId, onChangeText] = useState("");
  useEffect(() => {
    setId(props.id);
    console.log(props);
    if (props.showPopUp == true) {
      setModalVisible(true);
    }
  }, [props.id])

  const handleSubmit = () => {
   // props.closeModal();
    //props.navigation.navigate("App");
    console.log("handle submit" + etuId);
    console.log("handle submit id" + id)
    getCurrentUserByEtuID(id, etuId).then((response) => {
     props.navigation.navigate("App");
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Veuillez entrer votre ETU Id</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextInput
              style={styles.inputStyle}
              placeholder="ETUXXXXXXXX"
              placeholderTextColor="#3b5998"
              autoCapitalize="characters"
              value={etuId}
              onChangeText={text => onChangeText(text)}
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
    </View>
  );
}

const styles = {
  modalContainer: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.9,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 200
  },
  modalTitle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    fontSize: 22,
    fontWeight: 'bold'
  },
  inputStyle: {
    flex: 1,
    borderColor: '#3b5998',
    color: 'red',
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    height: 55,
    justifyContent: "center",
    borderWidth: 1
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
