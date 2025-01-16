import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

const habits = [
  { id: '1', name: 'Exercise', completed: false },
  { id: '2', name: 'Meditate', completed: false },
  { id: '3', name: 'Read', completed: false },
];

export default function HomeScreen() {
  const [habitList, setHabitList] = useState(habits);

  const toggleHabitCompletion = (id) => {
    setHabitList((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const renderHabit = ({ item }) => (
    <TouchableOpacity
      style={[styles.habitItem, item.completed && styles.habitItemCompleted]}
      onPress={() => toggleHabitCompletion(item.id)}
    >
      <Text style={styles.habitText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Habits</Text>
      <FlatList
        data={habitList}
        renderItem={renderHabit}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.habitList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  habitList: {
    paddingBottom: 16,
  },
  habitItem: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  habitItemCompleted: {
    backgroundColor: '#D3D3D3',
  },
  habitText: {
    fontSize: 18,
  },
});
