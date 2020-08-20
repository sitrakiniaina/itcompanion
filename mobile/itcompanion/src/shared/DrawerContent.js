import React, { Component } from 'react';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class DrawerContent extends Component {
    render() {
        return (
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
        );
    }

}
