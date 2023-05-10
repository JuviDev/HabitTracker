import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  // Constantes
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);

  // Funciones

  const addHabit = () => {
    setHabits([
      ...habits,
      {
        id: Math.random().toString(),
        name: habit,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setHabit("");
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={habit}
          onChangeText={(text) => setHabit(text)}
        />
        <Button title="Add" onPress={addHabit} />
      </View>
      <FlatList
        style={styles.list}
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.habitName}>{item.name}</Text>
            <Text style={styles.habitDate}>{item.date}</Text>
            <Button title="Delete" onPress={() => deleteHabit(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  list: {
    width: "90%",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  habitName: {
    fontWeight: "bold",
  },
  habitDate: {
    fontStyle: "italic",
  },
});
