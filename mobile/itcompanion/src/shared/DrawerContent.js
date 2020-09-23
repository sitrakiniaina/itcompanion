import React, { Component } from 'react';
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';
import { logOut } from '../utilitaire/SessionUtil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions ,StackActions,NavigationActions } from '@react-navigation/native';
export default class DrawerContent extends Component {
    constructor(props) {
        super(props);
    }
    handleLogOut() {
        logOut();
        // this.props.navigation.dispatch(
        //     CommonActions.navigate({
        //       name: 'Auth',
              
        //     })
        //   );
        //console.log(this.props.navigation)
        this.props.navigateTo();
    }
    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <DrawerContentScrollView>
                        <View>
                            <Image
                                source={require('../assets/images/itcompanion.jpg')}
                                style={{ width: '100%', height: 200 }}
                            />
                        </View>
                        <DrawerItemList {...this.props} />


                    </DrawerContentScrollView>
                </View>
                <View style={{ justifyContent: 'flex-end', paddingBottom: 30 }}>
                    <DrawerItem

                        label={
                            () => <Text style={{ color: "red" }}>Se déconnecter</Text>
                        }
                        icon={
                            () => <Ionicons name="log-out-outline" size={23} color="red" />
                        }
                        onPress={this.handleLogOut.bind(this)}
                    />
                </View>
            </>
        );
    }

}
