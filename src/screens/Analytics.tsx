import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const healthMetrics = [
  { name: 'Average Temperature', value: '38.5°C', progress: 0.85, color: '#10B981' },
  { name: 'Activity Level', value: '75%', progress: 0.75, color: '#3B82F6' },
  { name: 'Feed Intake', value: '90%', progress: 0.9, color: '#F59E0B' },
];

const financials = [
  { name: 'Monthly Revenue', value: '₹1,25,000', type: 'income' },
  { name: 'Feed Costs', value: '₹45,000', type: 'expense' },
  { name: 'Veterinary Expenses', value: '₹15,000', type: 'expense' },
  { name: 'Net Profit', value: '₹65,000', type: 'profit' },
];

export default function Analytics() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Metrics</Text>
        {healthMetrics.map((metric) => (
          <View key={metric.name} style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <Text style={styles.metricName}>{metric.name}</Text>
              <Text style={styles.metricValue}>{metric.value}</Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    backgroundColor: metric.color,
                    width: `${metric.progress * 100}%`,
                  },
                ]}
              />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Financial Summary</Text>
        {financials.map((item) => (
          <View
            key={item.name}
            style={[
              styles.financialCard,
              item.type === 'profit' && styles.profitCard,
            ]}
          >
            <Text style={styles.financialLabel}>{item.name}</Text>
            <Text
              style={[
                styles.financialValue,
                item.type === 'income' && styles.incomeText,
                item.type === 'expense' && styles.expenseText,
                item.type === 'profit' && styles.profitText,
              ]}
            >
              {item.value}
            </Text>
          </View>
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
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  metricCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metricName: {
    fontSize: 14,
    color: '#6B7280',
  },
  metricValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  financialCard: {
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
  profitCard: {
    backgroundColor: '#F0FDF4',
  },
  financialLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  financialValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  incomeText: {
    color: '#059669',
  },
  expenseText: {
    color: '#DC2626',
  },
  profitText: {
    color: '#059669',
    fontWeight: 'bold',
  },
});