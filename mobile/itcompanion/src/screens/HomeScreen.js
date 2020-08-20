/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box_100}>
          <View style={styles.inner_large}>
            <Ionicons name="location" size={50} color="white" />
            <Text style={styles.sectionTitle}>ME REPERER</Text>
          </View>
        </View>
        <View style={styles.box_25}>
          <View style={styles.inner}>
            <Ionicons name="document-sharp" size={50} color="white" />
            <Text style={styles.sectionTitle}>DOCUMENTS</Text>
          </View>
        </View>
        <View style={styles.box_25}>
          <View style={styles.inner_calendar}>
            <Ionicons name="calendar-sharp" size={50} color="white" />
            <Text style={styles.sectionTitle}>CALENDRIER</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>

            <Ionicons name="school" size={50} color="white" />
            <Text style={styles.sectionTitle}>EXAMENS</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Ionicons name="qr-code" size={50} color="white" />
            <Text style={styles.sectionTitle}>CARTE D'ETUDIANT</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Ionicons name="qr-code" size={50} color="white" />
            <Text style={styles.sectionTitle}>NOTES</Text>
          </View>
        </View>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
 
  box_100: {
    width: '100%',
    height: '25%',
    padding: 5,
  },
  box_75: {
    width: '75%',
    height: '25%',
    padding: 5,
  },
  box: {
    width: '50%',
    height: '25%',
    padding: 5,
  },
  box_25: {
    width: '25%',
    height: '25%',
    padding: 5,
  },
  inner_large: {
    flex: 1,
    backgroundColor: '#833CE0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    flex: 1,
    backgroundColor: '#CA3257',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner_calendar: {
    flex: 1,
    backgroundColor: '#315237',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitle : {
    fontSize: 15,
    fontWeight: '300',
    color: '#000000',
    fontStyle : 'normal'
  }

});


