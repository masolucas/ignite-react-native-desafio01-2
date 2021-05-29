import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';

import darkModeIcon from '../assets/icons/DarkMode.png';
import darkModeOffIcon from '../assets/icons/DarkModeOff.png';

interface DarkModeProps {
  darkMode: boolean;
  onPress: () => void;
}

export function Header({ darkMode, onPress }: DarkModeProps) {
  

  return (
    <View style={darkMode ? [styles.header, styles.headerDark] : styles.header}>
      <Text style={[styles.headerText, { marginLeft: 'auto' }]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.darkModeButton}
        onPress={() => onPress()}
      >
        <Image source={darkMode ? darkModeOffIcon : darkModeIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular'
  },
  darkModeButton: {
    marginLeft: 'auto',
    marginRight: 17,
    marginTop: 10
  },
  headerDark: {
    backgroundColor: '#191932',
  },

});
