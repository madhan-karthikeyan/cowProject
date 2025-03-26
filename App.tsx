import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from './src/screens/Dashboard';
import Compatibility from './src/screens/Compatibility';
import Analytics from './src/screens/Analytics';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Dashboard':
                iconName = 'layout';
                break;
              case 'Compatibility':
                iconName = 'users';
                break;
              case 'Analytics':
                iconName = 'bar-chart-2';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
              default:
                iconName = 'home';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#1F2937',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Compatibility" component={Compatibility} />
        <Tab.Screen name="Analytics" component={Analytics} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}