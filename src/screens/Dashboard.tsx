import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const stats = [
  { name: 'Total Livestock', value: '42', icon: 'box', color: '#3B82F6' },
  { name: 'Active Breeding', value: '12', icon: 'activity', color: '#10B981' },
  { name: 'Milk Production', value: '850L', icon: 'droplet', color: '#F59E0B' },
  { name: 'Revenue', value: '₹45,000', icon: 'dollar-sign', color: '#8B5CF6' },
];

const recentActivity = [
  { id: 1, animal: 'Gir Cow #123', event: 'Health Check', date: '2024-03-15' },
  { id: 2, animal: 'HF Bull #456', event: 'Breeding', date: '2024-03-14' },
  { id: 3, animal: 'Sahiwal Cow #789', event: 'Vaccination', date: '2024-03-13' },
];

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <View key={stat.name} style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: stat.color }]}>
              <Icon name={stat.icon} size={24} color="white" />
            </View>
            <Text style={styles.statLabel}>{stat.name}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.activityContainer}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {recentActivity.map((activity) => (
          <TouchableOpacity key={activity.id} style={styles.activityCard}>
            <View>
              <Text style={styles.animalName}>{activity.animal}</Text>
              <Text style={styles.eventText}>{activity.event}</Text>
            </View>
            <Text style={styles.dateText}>{activity.date}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: (Dimensions.get('window').width - 48) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  activityContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  activityCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  animalName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  eventText: {
    fontSize: 14,
    color: '#6B7280',
  },
  dateText: {
    fontSize: 14,
    color: '#6B7280',
  },
});