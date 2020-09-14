import React, { Component } from 'react';
import { Linking, Platform, Text, } from 'react-native';
import AsyncStorage  from '@react-native-community/async-storage'
import { ACCESS_TOKEN, ETU_ID } from '../../constants/Auth2Constant';
import { Redirect } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        };
    }
    getUrlParameter(name, url) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(url);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => {
        this.navigate(event.url);
    }

    navigate = (url) => {
        const { navigate } = this.props.navigation;
        const token = this.getUrlParameter('token',url);   
        const etuid = this.getUrlParameter('token',url);   
        AsyncStorage.setItem(ACCESS_TOKEN, token);
        AsyncStorage.setItem(ETU_ID, token);
        if (token) {
            navigate('App')
        }else{
            navigate('Auth')
        };
    }

    render() {
        return <Text>Hello from Home!</Text>;
    }
}

export default OAuth2RedirectHandler;