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
  TouchableOpacity,
  Linking
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Anticons from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={styles.box_100}>
              <TouchableOpacity
                style={styles.inner_large}
                onPress={() => navigation.navigate('App')}>
                <Ionicons name="location" size={50} color="white" />
                <Text style={styles.sectionTitle}>ME REPERER</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* section 1 */}
          <View style={styles.container}>
            <View style={styles.box_25}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => navigation.navigate('Certificat')}>
                <Ionicons name="document-sharp" size={50} color="white" />
                <Text style={styles.sectionTitle}>DOCUMENTS</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box_25}>
              <TouchableOpacity
                style={styles.inner_calendar}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="calendar-sharp" size={50} color="white" />
                <Text style={styles.sectionTitle}>CALENDRIER</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.inner_examen}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="school" size={50} color="white" />
                <Text style={styles.sectionTitle}>EXAMENS</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* section 2 */}
          <View style={styles.container}>
            <View style={styles.box_75}>
              <TouchableOpacity
                style={styles.inner_ce}
                onPress={() => navigation.navigate('Badge')}>
                <Ionicons name="qr-code" size={50} color="white" />
                <Text style={styles.sectionTitle}>CARTE D'ETUDIANT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box_25}>
              <TouchableOpacity
                style={styles.inner_note}
                onPress={() => navigation.navigate('Calendrier')}>
                <Octicons name="graph" size={50} color="white" />
                <Text style={styles.sectionTitle}>NOTES</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* section 3 */}
          <View style={styles.container}>
            <View style={styles.box_100}>
              <TouchableOpacity
                style={styles.inner_large}
                onPress={() =>Linking.openURL('https://www.facebook.com/IT-University-149992451733737/')}>
                <Ionicons name="logo-facebook" size={50} color="white" />
               
                <Text style={styles.sectionTitle}>NOUS SUIVRE</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* section 4 */}
          <View style={styles.container}>
            
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.inner_calendar}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="basketball" size={50} color="white" />
                <Text style={styles.sectionTitle}>SPORT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.inner_examen}
                onPress={() => navigation.navigate('Calendrier')}>
                <Anticons name="contacts" size={50} color="white" />
                <Text style={styles.sectionTitle}>CONTACT</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* section 5 */}
          {/* <View style={styles.container}>
            <View style={styles.box_25}>
              <TouchableOpacity
                style={styles.inner_ce}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="qr-code" size={50} color="white" />
                <Text style={styles.sectionTitle}>CARTE D'ETUDIANT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box_75}>
              <TouchableOpacity
                style={styles.inner_note}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="qr-code" size={50} color="white" />
                <Text style={styles.sectionTitle}>NOTES</Text>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* section 6 */}
          {/* <View style={styles.container}>
            <View style={styles.box_25}>
              <TouchableOpacity
                style={styles.inner}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="document-sharp" size={50} color="white" />
                <Text style={styles.sectionTitle}>DOCUMENTS</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box_25}>
              <TouchableOpacity
                style={styles.inner_calendar}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="calendar-sharp" size={50} color="white" />
                <Text style={styles.sectionTitle}>CALENDRIER</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.inner_examen}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="school" size={50} color="white" />
                <Text style={styles.sectionTitle}>EXAMENS</Text>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* section 7 */}
          {/* <View style={styles.container}>
            <View style={styles.box_100}>
              <TouchableOpacity
                style={styles.inner_large}
                onPress={() => navigation.navigate('Calendrier')}>
                <Ionicons name="location" size={50} color="white" />
                <Text style={styles.sectionTitle}>ME REPERER</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box_100: {
    width: '100%',
    height: 150,
    padding: 5,
  },
  box_75: {
    width: '75%',
    height: 150,
    padding: 5,
  },
  box: {
    width: '50%',
    height: 150,
    padding: 5,
  },
  box_25: {
    width: '25%',
    height: 150,
    padding: 5,
  },
  inner_large: {
    flex: 1,
    backgroundColor: '#d3516b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    backgroundColor: '#ebcaa7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_calendar: {
    flex: 1,
    backgroundColor: '#8aadc1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_examen: {
    flex: 1,
    backgroundColor: '#456270',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_ce: {
    flex: 1,
    backgroundColor: '#689a8e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_note: {
    flex: 1,
    backgroundColor: '#ebcaa7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 10,
  },
});
