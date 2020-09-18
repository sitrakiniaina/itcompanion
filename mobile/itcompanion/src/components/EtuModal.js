import React, {useState, useEffect} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export default function EtuModal(args) {
    
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log("studentToken 1------ "+args.studentToken)
    if(args.studentToken==true) {
        // console.log("studentToken 2------ "+args.studentToken)
        setModalVisible(true);
        // console.log("anaty condition");
    }
    // console.log("isModalVisible ------ "+isModalVisible)
  }, [args])

  return (
    <View style={{flex: 1}}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Veuillez entrer votre ETU Id</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput
              style={styles.inputStyle}
              placeholder="ETUXXXXXXXX"
              placeholderTextColor="#3b5998"
              autoCapitalize="none"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('App')}>
            <Text style={styles.buttonConnectTextStyle}>VALIDER</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = {
  modalContainer: {
    flex: 0.3,
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.9,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
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
    justifyContent:"center",
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
