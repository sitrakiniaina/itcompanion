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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function DescriptionScreen() {
  return (
    <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>L'AVENIR N'A PAS DE PRIX</Text>
              <Text style={styles.sectionDescription}>    
              IT University
Diplômes habilités par l’Enseignement Supérieur – Système LMD
IT University est un établissement d’enseignement supérieur privé spécialisé en informatique, créé en 2011, pour répondre aux  besoins du secteur professionnel en matière de nouvelles technologies.
IT University adopte le système LMD et offre actuellement une formation de 3ans après le BAC, dans les modules suivants :

Licence spécialisée en développement d’applications (Programmation)
Licence spécialisée en Base de données et Réseaux
Licence spécialisée  en Web Intégration et Web designer
Après ce programme , tous les sortants d’IT University seront  tout de suite opérationnels, IT University met surtout en exergue la base mathématique dans son programme, afin de permettre aux étudiants d’avoir un bon niveau de raisonnement  et  de continuer leurs études en master et en doctorat.         
              </Text>
            </View>
          
          </View>
        </ScrollView>
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
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


