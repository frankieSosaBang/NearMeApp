import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Simple icon components using Unicode symbols
export const HomeIcon = ({ focused, size = 24, color = '#666666' }) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.icon, { fontSize: size, color: focused ? '#007AFF' : color }]}>
      🏠
    </Text>
  </View>
);

export const ExploreIcon = ({ focused, size = 24, color = '#666666' }) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.icon, { fontSize: size, color: focused ? '#007AFF' : color }]}>
      🔍
    </Text>
  </View>
);

export const ProfileIcon = ({ focused, size = 24, color = '#666666' }) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.icon, { fontSize: size, color: focused ? '#007AFF' : color }]}>
      👤
    </Text>
  </View>
);

// Alternative text-based icons
export const HomeIconText = ({ focused, size = 16, color = '#666666' }) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.textIcon, { fontSize: size, color: focused ? '#007AFF' : color }]}>
      HOME
    </Text>
  </View>
);

export const ExploreIconText = ({ focused, size = 16, color = '#666666' }) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.textIcon, { fontSize: size, color: focused ? '#007AFF' : color }]}>
      SEARCH
    </Text>
  </View>
);

export const ProfileIconText = ({ focused, size = 16, color = '#666666' }) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.textIcon, { fontSize: size, color: focused ? '#007AFF' : color }]}>
      PROFILE
    </Text>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  textIcon: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
