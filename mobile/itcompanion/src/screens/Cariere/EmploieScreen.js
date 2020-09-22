import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {
    Colors,

} from 'react-native/Libraries/NewAppScreen';
import CustomCard from '../../components/Card';
import { getPublication } from '../../services/PublicationService';

export default function EmploieScreen() {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    getStages();
  }, [publications.length])

  const getStages = () => {
    getPublication().then(response => {
      setPublications(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };
  return (

    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      {
        publications
          .filter(({ typepublication }) => typepublication?.code === "emp")
          .map((item,i) => (
            <CustomCard 
              key={i}
              titre={item.titre}
              description={item.description}
              dateDebut={item.dateDebut}
              ogImage={item.ogImage}
              lien={item.lien}
            />
          ))
      }

    </ScrollView>

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


