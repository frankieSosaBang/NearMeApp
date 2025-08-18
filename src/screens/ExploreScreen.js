import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ExploreScreen</Text>
        <Text style={styles.description}>
          To jest ekran eksploracji i wyszukiwania.
          {'\n\n'}
          Funkcjonalności tego ekranu:
          {'\n'}• Wyszukiwanie miejsc w okolicy
          {'\n'}• Przeglądanie kategorii (restauracje, sklepy, rozrywka)
          {'\n'}• Filtrowanie wyników wyszukiwania
          {'\n'}• Mapa z pinami lokalizacji
          {'\n'}• Lista wyników z ocenami i opisami
          {'\n'}• Sortowanie według odległości lub popularności
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default ExploreScreen;
