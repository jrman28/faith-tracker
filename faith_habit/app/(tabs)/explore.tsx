import { styled } from 'nativewind';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

const habits = [
  { id: '1', name: 'Prayer', completed: false },
  { id: '2', name: 'Bible Reading', completed: false },
  { id: '3', name: 'Worship', completed: false },
  { id: '4', name: 'Fasting', completed: false },
  { id: '5', name: 'Serving Others', completed: false },
];

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledFlatList = styled(FlatList);

export default function ExploreScreen() {
  const [habitList, setHabitList] = useState(habits);

  const toggleHabitCompletion = (id) => {
    setHabitList((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const renderHabit = ({ item }) => (
    <StyledTouchableOpacity
      className={`p-4 bg-white rounded-lg mb-2 shadow ${item.completed ? 'bg-gray-300' : ''}`}
      onPress={() => toggleHabitCompletion(item.id)}
    >
      <StyledText className="text-lg">{item.name}</StyledText>
    </StyledTouchableOpacity>
  );

  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      <StyledText className="text-2xl font-bold mb-4">Explore Habits</StyledText>
      <StyledFlatList
        data={habitList}
        renderItem={renderHabit}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </StyledView>
  );
}
