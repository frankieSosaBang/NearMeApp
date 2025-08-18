import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MainScreen</Text>
        <Text style={styles.description}>
          To jest główny ekran aplikacji NearMeApp.
          {'\n\n'}
          Funkcjonalności tego ekranu:
          {'\n'}• Wyświetlanie głównej zawartości aplikacji
          {'\n'}• Dashboard z najważniejszymi informacjami
          {'\n'}• Szybki dostęp do głównych funkcji
          {'\n'}• Nawigacja do innych sekcji aplikacji
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

export default MainScreen;
