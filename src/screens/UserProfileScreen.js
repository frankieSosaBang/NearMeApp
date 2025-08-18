import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>UserProfileScreen</Text>
        <Text style={styles.description}>
          To jest ekran profilu innego użytkownika.
          {'\n\n'}
          Funkcjonalności tego ekranu:
          {'\n'}• Wyświetlanie zdjęcia profilowego i informacji publicznych
          {'\n'}• Historia publicznych recenzji użytkownika
          {'\n'}• Oceny i komentarze do miejsc
          {'\n'}• Publiczne listy ulubionych miejsc
          {'\n'}• Statystyki aktywności (liczba recenzji, odwiedzonych miejsc)
          {'\n'}• Opcja obserwowania użytkownika
          {'\n'}• Przycisk do wysłania wiadomości
          {'\n'}• Zgłaszanie nieodpowiednich treści
          {'\n'}• Udostępnianie profilu
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

export default UserProfileScreen;
