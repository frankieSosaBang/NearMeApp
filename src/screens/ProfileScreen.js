import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ProfileScreen</Text>
        <Text style={styles.description}>
          To jest ekran profilu aktualnie zalogowanego użytkownika.
          {'\n\n'}
          Funkcjonalności tego ekranu:
          {'\n'}• Wyświetlanie zdjęcia profilowego i podstawowych danych
          {'\n'}• Edycja informacji osobistych
          {'\n'}• Historia odwiedzonych miejsc
          {'\n'}• Ulubione lokalizacje
          {'\n'}• Ustawienia konta i prywatności
          {'\n'}• Statystyki aktywności
          {'\n'}• Zarządzanie recenzjami i ocenami
          {'\n'}• Wylogowanie z aplikacji
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

export default ProfileScreen;
