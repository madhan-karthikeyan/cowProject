import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { geminiService } from '../services/gemini';
import Icon from 'react-native-vector-icons/Feather';

const indianBreeds = {
  cows: ['Gir', 'Sahiwal', 'Red Sindhi', 'Tharparkar', 'Rathi', 'Kankrej'],
  bulls: ['Gir', 'Sahiwal', 'Red Sindhi', 'Tharparkar', 'Rathi', 'Kankrej'],
};

export default function Compatibility() {
  const [cowDetails, setCowDetails] = useState({
    breed: '',
    age: '',
    milkYield: '',
  });

  const [bullDetails, setBullDetails] = useState({
    breed: '',
    age: '',
    proven: false,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const checkCompatibility = async () => {
    try {
      setLoading(true);
      setError(null);

      const compatibility = await geminiService.checkCompatibility(
        {
          breed: cowDetails.breed,
          age: parseInt(cowDetails.age),
          milkYield: parseInt(cowDetails.milkYield),
        },
        {
          breed: bullDetails.breed,
          age: parseInt(bullDetails.age),
          proven: bullDetails.proven,
        }
      );

      setResult(compatibility);
    } catch (err) {
      setError('Failed to check compatibility. Please try again.');
      Alert.alert('Error', 'Failed to check compatibility. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderBreedPicker = (type: 'cow' | 'bull', breeds: string[]) => (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>{type === 'cow' ? 'Cow' : 'Bull'} Breed</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.breedList}>
        {breeds.map((breed) => (
          <TouchableOpacity
            key={breed}
            style={[
              styles.breedButton,
              type === 'cow'
                ? cowDetails.breed === breed && styles.selectedBreed
                : bullDetails.breed === breed && styles.selectedBreed,
            ]}
            onPress={() =>
              type === 'cow'
                ? setCowDetails({ ...cowDetails, breed })
                : setBullDetails({ ...bullDetails, breed })
            }
          >
            <Text
              style={[
                styles.breedButtonText,
                type === 'cow'
                  ? cowDetails.breed === breed && styles.selectedBreedText
                  : bullDetails.breed === breed && styles.selectedBreedText,
              ]}
            >
              {breed}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Breeding Compatibility Check</Text>

        {/* Cow Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cow Details</Text>
          {renderBreedPicker('cow', indianBreeds.cows)}
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age (years)</Text>
            <TextInput
              style={styles.input}
              value={cowDetails.age}
              onChangeText={(text) => setCowDetails({ ...cowDetails, age: text })}
              keyboardType="numeric"
              placeholder="Enter age"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Milk Yield (L/day)</Text>
            <TextInput
              style={styles.input}
              value={cowDetails.milkYield}
              onChangeText={(text) => setCowDetails({ ...cowDetails, milkYield: text })}
              keyboardType="numeric"
              placeholder="Enter milk yield"
            />
          </View>
        </View>

        {/* Bull Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bull Details</Text>
          {renderBreedPicker('bull', indianBreeds.bulls)}
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age (years)</Text>
            <TextInput
              style={styles.input}
              value={bullDetails.age}
              onChangeText={(text) => setBullDetails({ ...bullDetails, age: text })}
              keyboardType="numeric"
              placeholder="Enter age"
            />
          </View>

          <TouchableOpacity
            style={styles.provenContainer}
            onPress={() => setBullDetails({ ...bullDetails, proven: !bullDetails.proven })}
          >
            <Icon
              name={bullDetails.proven ? 'check-square' : 'square'}
              size={24}
              color={bullDetails.proven ? '#4F46E5' : '#6B7280'}
            />
            <Text style={styles.provenText}>Proven Sire</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.checkButton}
          onPress={checkCompatibility}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.checkButtonText}>Check Compatibility</Text>
          )}
        </TouchableOpacity>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {result && (
          <View style={styles.resultContainer}>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{result.score}% Compatible</Text>
              <Icon
                name={result.score >= 70 ? 'check-circle' : 'alert-circle'}
                size={24}
                color={result.score >= 70 ? '#059669' : '#DC2626'}
              />
            </View>

            <View style={styles.traitsContainer}>
              {Object.entries(result.traits).map(([trait, value]) => (
                <View key={trait} style={styles.traitCard}>
                  <Text style={styles.traitLabel}>
                    {trait.charAt(0).toUpperCase() + trait.slice(1)}
                  </Text>
                  <Text style={styles.traitValue}>{value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.recommendationContainer}>
              <Text style={styles.recommendationLabel}>Recommendation</Text>
              <Text style={styles.recommendationText}>{result.recommendation}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  pickerContainer: {
    marginBottom: 16,
  },
  breedList: {
    flexGrow: 0,
    marginTop: 8,
  },
  breedButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  selectedBreed: {
    backgroundColor: '#4F46E5',
  },
  breedButtonText: {
    color: '#4B5563',
    fontSize: 14,
  },
  selectedBreedText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  provenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  provenText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#374151',
  },
  checkButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#DC2626',
    marginTop: 16,
    textAlign: 'center',
  },
  resultContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  traitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  traitCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
  },
  traitLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  traitValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  recommendationContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  recommendationLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  recommendationText: {
    fontSize: 16,
    color: '#111827',
    lineHeight: 24,
  },
});