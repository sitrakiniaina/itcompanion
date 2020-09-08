import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.icons}>
        <Ionicons name="md-menu" size={28} color="white" />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc"
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    top: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "#fff"
  },
  icons: {
    position: "absolute",
    left: 16,
    top: 45
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});

export default Header;