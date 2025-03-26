import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { Avatar, Text, List, Divider, Button } from 'react-native-paper';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Avatar.Image size={80} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
        <Text variant="titleLarge" style={styles.name}>John Doe</Text>
        <Text variant="bodyMedium" style={styles.email}>johndoe@example.com</Text>
      </View>

      <Divider style={styles.divider} />

      {/* Settings List */}
      <List.Section>
        <List.Item
          title="Dark Mode"
          left={() => <List.Icon icon="theme-light-dark" />}
          right={() => (
            <Switch
              value={isDarkMode}
              onValueChange={() => setIsDarkMode(!isDarkMode)}
            />
          )}
        />
        <List.Item
          title="Notifications"
          left={() => <List.Icon icon="bell-outline" />}
        />
        <List.Item
          title="Privacy Policy"
          left={() => <List.Icon icon="shield-lock-outline" />}
        />
      </List.Section>

      <Divider style={styles.divider} />

      {/* Logout Button */}
      <Button mode="contained" style={styles.logoutButton} onPress={() => console.log('Logged out')}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  divider: {
    marginVertical: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#d32f2f',
  },
});

export default Settings;
