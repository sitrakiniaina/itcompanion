/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Platform, PermissionsAndroid, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { getDirection, getDirectionOpenRoute } from '../../api/GoogleMapApi';
import Location from '../../../location.config';
import FlagLogo from '../../assets/images/flag_logo.jpeg';
import { configureFonts } from 'react-native-paper';


export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.createPoint = this.createPoint.bind(this);
        this.state = {
            region: {},
            routes: [],
            origin: {
                latitude: 0.0,
                longitude: 0.0,
            },
            destination: {
                latitude: 0.0,
                longitude: 0.0,
            },
            initialRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        };
    }
    onRegionChange = (region) => {
        //console.log('onRegionChange', region);
        this.setState({
            initialRegion: region
        })
    };
    createPoint(origin) {
        return origin.longitude + ',' + origin.latitude;
    }
    requestPermissions = async () => {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization();
            Geolocation.setRNConfiguration({
                skipPermissionRequests: false,
                authorizationLevel: 'whenInUse',
            });
        }

        if (Platform.OS === 'android') {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }
    }
    initRoute(origin, destination) {
        let pointOrigin = this.createPoint(origin);
        let pointDestination = this.createPoint(destination);
        getDirectionOpenRoute(pointOrigin, pointDestination).then(request => {
            if (typeof request.data.features[0].geometry.coordinates != 'undefined') {
                let coords = request.data.features[0].geometry.coordinates;
                let routes = coords.map((point, indice) => {
                    return {
                        latitude: point[1],
                        longitude: point[0]
                    }
                })
                this.setState({
                    routes: routes,
                })
            }
        });
    }
    componentDidMount() {
        this.requestPermissions();
        Geolocation.getCurrentPosition(position => {

            this.setState({
                origin: {
                    latitude: Number(position.coords.latitude),
                    longitude: Number(position.coords.longitude),
                },
                destination: {
                    latitude: -20.251683076544033,
                    longitude: 57.4945316481933,
                },
                initialRegion: {
                    latitude: Number(position.coords.latitude),
                    longitude: Number(position.coords.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
            })
            this.initRoute(this.state.origin, this.state.destination);
        })
    }
    render() {
        // var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -20.2693975,
                        longitude: 57.4885235,
                        latitudeDelta: 0.03815,
                        longitudeDelta: 0.03935,
                    }}
                    compassOffset={{ x: -15, y: 100 }}
                    onRegionChange={this.onRegionChange}
                    showsUserLocation
                    showsCompass={true}
                    mapType="terrain"
                >
                    {this.state.routes.length > 0 ?
                        <MapView.Polyline
                            coordinates={this.state.routes}
                            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                            strokeColors={[
                                '#8a8684',
                                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                                '#e9b31c',
                                '#e9b31c',
                                '#e9b31c',
                                '#8a8684'
                            ]}
                            strokeWidth={6}
                        />
                        : null
                    }
                    {typeof this.state.origin.latitude === 'undefined' ?
                        null
                        : <MapView.Marker
                            title={"Départ"}
                            coordinate={{
                                latitude: this.state.origin.latitude,
                                longitude: this.state.origin.longitude,
                            }} />}

                    {typeof this.state.destination.latitude === 'undefined' ?
                        null
                        : <MapView.Marker
                            title={"Arrivée"}
                            coordinate={{
                                latitude: this.state.destination.latitude,
                                longitude: this.state.destination.longitude,
                            }} >
                            <Image source={FlagLogo} style={{ height: 50, width: 50 }} />
                        </MapView.Marker>}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});