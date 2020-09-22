
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ListItem, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import IonIcon from 'react-native-vector-icons/Ionicons';


export default function CertificatScreen() {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Mes certificat de scolarité valide</Text>
        </View>
        <ScrollView>
          {list
            .map((l, i) => (
              <ListItem key={i} bottomDivider >
                <IonIcon name='document-attach' color='#466A8F' size={30} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                </ListItem.Content>
                <ListItem.Chevron name="cloud-download" size={30} color='#466A8F'
                />
              </ListItem>
            ))}
        </ScrollView>
      </View>
      <Divider style={{ backgroundColor: 'blue',margin:10 }} />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Demande en attente de validation</Text>
        </View>
        <ScrollView>
          {list2
            .map((l, i) => (
              <ListItem key={i} bottomDivider >
                <IonIcon name='document-attach' color='#466A8F' size={30} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                 
                </ListItem.Content>
                <ListItem.Chevron name="more-horiz" size={30} color='#466A8F'
                />
              </ListItem>
            ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Button

          color="#7DE24E"
          style={styles.button}
          title="Demander certificat de scolarité"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>



    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 1,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'red',
    width: 45
  }
});

const list = [
  {
    id: 1,
    name: 'Certificat de scolarité S1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '17:00 - 19:00 Connecting to the development server...',
    dateDebut: '2020-09-18',
    type: 'examen'
  },
  {
    id: 2,
    name: 'Certificat de scolarité S2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    dateDebut: '2020-09-18'
  },


]
const list2 = [
  {
    id: 1,
    name: 'Certificat de scolarité S3',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '17:00 - 19:00 Connecting to the development server...',
    dateDebut: '2020-09-18',
    type: 'examen'
  },
  
]