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
} from 'react-native';
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import PropTypes from 'prop-types';
class AuthentificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenements: [],
            currentEvenement: null,
            currentIndex: -1,
            classes: ""
            // searchTitle: ""
        };
    }
    componentDidMount() {

    }
    render() {
        AuthentificationScreen.propTypes = {
            classes: PropTypes.object.isRequired,
        };
        const { classes } = this.props;
        const { currentEvenement } = this.state;
        return (
            <>
                <View style={styles.mainBody}>
                    {/* <Loader loading={loading} /> */}
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <View style={{ marginTop: 100 }}>
                            <KeyboardAvoidingView enabled>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require("../assets/images/itcompanion.jpg")}
                                        style={{
                                            width: '50%',
                                            height: 100,
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
                                    <Text style={styles.buttonTextStyle}>LOGIN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.facebookbuttonStyle}
                                    activeOpacity={0.5}
                                    onPress={() => this.props.navigation.navigate('App')}>
                                    
                                    <Text style={styles.buttonTextStyle}>LOGIN WITH FACEBOOK</Text>
                                </TouchableOpacity>
                                <Text
                                    style={styles.registerTextStyle}
                                    onPress={() => this.props.navigation.navigate('App')}>
                                    New Here ? Register
                                </Text>
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
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
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    facebookbuttonStyle: {
        backgroundColor: '#303f9f',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
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