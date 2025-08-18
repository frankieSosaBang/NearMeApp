import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen, ExploreScreen, ProfileScreen } from '../screens';
import { HomeIcon, ExploreIcon, ProfileIcon } from '../components/SimpleIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Main':
              return <HomeIcon focused={focused} size={size} color={color} />;
            case 'Explore':
              return <ExploreIcon focused={focused} size={size} color={color} />;
            case 'Profile':
              return <ProfileIcon focused={focused} size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e1e1e1',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          borderBottomWidth: 1,
          borderBottomColor: '#e1e1e1',
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#333333',
        },
      })}
    >
      <Tab.Screen 
        name="Main" 
        component={MainScreen}
        options={{
          title: 'Główna',
          headerTitle: 'NearMeApp',
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen}
        options={{
          title: 'Eksploruj',
          headerTitle: 'Eksploracja',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerTitle: 'Mój Profil',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
