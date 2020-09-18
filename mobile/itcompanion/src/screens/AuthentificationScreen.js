import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Linking
} from 'react-native';
import PropTypes from 'prop-types';
import EtuModal from '../components/EtuModal';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import { getCurrentUser } from '../api/APIUtils';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants/Auth2Constant';

class AuthentificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenements: [],
            currentEvenement: null,
            currentIndex: -1,
            classes: "",
            studentToken: "",
            authenticated: false,
            currentUser: null,
            loading: false,
            token: "",
            showPopUp : false

        };
        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
        if(!this.state.loading){
            SplashScreen.hide();
        }
        
    }
    handleCloseModal(){
        this.setState({
            showPopUp : false
        });
    }
    // componentWillUnmount() {
    //     this.loadCurrentlyLoggedInUser();
    //     // SplashScreen.hide();
    // }
    loadCurrentlyLoggedInUser() {
        //AsyncStorage.clear();
        AsyncStorage.getItem(ACCESS_TOKEN).then((token) => {
            if (token) {             
                getCurrentUser(token)
                    .then(response => {
                        let showPopUp = false;
                        if(response.data.etuid!==null){
                            this.props.navigation.navigate("App");
                        }else{
                            showPopUp = true;
                        }
                        this.setState({
                            currentUser: response.data,
                            authenticated: true,
                            loading: true,
                            studentToken : response.data.etuid,
                            showPopUp : showPopUp
                        });
                    }).catch(error => {
                        console.log(error);
                    });               
            }
        });
    }
    render() {
        AuthentificationScreen.propTypes = {

        };
        
        return (
            <>
                <View style={styles.mainBody}>
                    {/* <Loader loading={loading} /> */}
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <View style={{ marginTop: 100 }}>
                            <KeyboardAvoidingView enabled>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require("../assets/images/ITC-logo.png")}
                                        style={{
                                            width: '70%',
                                            height: 175,
                                            resizeMode: 'contain',
                                            margin: 30,
                                        }}
                                    />
                                </View>
                                <View style={styles.SectionStyle}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        underlineColorAndroid="#FFFFFF"
                                        placeholder="Enter Email" //dummy@abc.com
                                        placeholderTextColor="#F6F6F7"
                                        autoCapitalize="none"
                                        keyboardType="email-address"

                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                    />
                                </View>
                                <View style={styles.SectionStyle}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        underlineColorAndroid="#FFFFFF"
                                        placeholder="Enter Password" //12345
                                        placeholderTextColor="#F6F6F7"
                                        keyboardType="default"
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                        secureTextEntry={true}
                                    />
                                </View>
                                {/* {errortext != '' ? (
                                    <Text style={styles.errorTextStyle}> {errortext} </Text>
                                ) : null} */}
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    activeOpacity={0.5}
                                    onPress={() => this.props.navigation.navigate('App')}>
                                    <Text style={styles.buttonConnectTextStyle}>SE CONNECTER</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.facebookbuttonStyle}
                                    activeOpacity={0.5}
                                    onPress={() => Linking.openURL(FACEBOOK_AUTH_URL)}
                                >
                                    <Image
                                        source={require("../assets/images/fb-logo.png")}
                                        style={styles.iconBtn}
                                    />
                                    <Text style={styles.buttonTextStyle}> SE CONNECTER AVEC FACEBOOK</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.googlebuttonStyle}
                                    activeOpacity={0.5}
                                    onPress={() => this.props.navigation.navigate('App')}>
                                    <Image
                                        source={require("../assets/images/google-logo.png")}
                                        style={styles.iconBtn}
                                    />
                                    <Text style={styles.buttonTextStyle}>SE CONNECTER AVEC GOOGLE</Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
                   
                    <EtuModal closeModal = {()=>this.handleCloseModal()}navigation={this.props.navigation} showPopUp={this.state.showPopUp} id={this.state.currentUser?this.state.currentUser.id:null} ></EtuModal>
                </View>
            </>
        );
    }
}
const styles = {
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
    },
    iconBtn: {
        resizeMode: 'contain',
        height: 20,
        width: 15,
        flex: .2,
        marginBottom: 5
    },
    facebookbuttonStyle: {
        backgroundColor: '#3b5998',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googlebuttonStyle: {
        backgroundColor: '#d6492e',
        borderWidth: 0,
        color: '#d93025',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonConnectTextStyle: {
        color: '#FFFFFF',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 13,
        flex: .8,
        textAlign: 'center',
        marginRight: '10%',
        fontWeight: 'bold'
    },
    googleTextStyle: {
        color: '#d93025',
        fontSize: 13,
        flex: .8,
        textAlign: 'center',
        marginRight: '10%',
        fontWeight: 'bold'
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        borderColor: 'white',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
}
export default AuthentificationScreen;