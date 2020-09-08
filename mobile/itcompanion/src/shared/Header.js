import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from "@unimodules/core";

const paddingTopHeader = (Platform.OS === 'ios') ? 80 : 50;
const paddingTopTitle = (Platform.OS === 'ios') ? 20 : 2;
const paddingTopIcon = (Platform.OS === 'ios') ? 45 : 13;

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
    height: paddingTopHeader,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc"
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    top: paddingTopTitle,
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
    top: paddingTopIcon
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});

export default Header;