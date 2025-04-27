import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, FlatList } from 'react-native';

import { Link } from "expo-router";
import { useState } from "react";
import { useItems } from '../hooks/useItems';


export default function HomeScreen() {
  const [isDark, setIsDark] = useState(false);
  const { items, addItem } = useItems();


  const toggleTheme = () => setIsDark((prev) => !prev);
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐵 MonkeyFitness</Text>
      <Text style={styles.subtitle}>Track. Train. Transform.</Text>

      <Link href={{ pathname: "./start-workout" }} asChild>
      <TouchableOpacity style={{ ...styles.button, maxWidth: 350 }}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
      </Link>

      <Link href={{ pathname: "./view-progress" }} asChild>
      <TouchableOpacity style={{ ...styles.button, maxWidth: 350 }}>
        <Text style={styles.buttonText}>View Progress</Text>
      </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
      <Text style={styles.toggleText}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </Text>
      </TouchableOpacity>

    </View>

  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#121212" : "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      color: isDark ? "#90ee90" : "#4CAF50",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: isDark ? "#bbb" : "#777",
      marginBottom: 40,
    },
    button: {
      backgroundColor: isDark ? "#388e3c" : "#4CAF50",
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 8,
      marginBottom: 15,
      width: "80%",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    toggleButton: {
      marginTop: 20,
      padding: 10,
    },
    toggleText: {
      color: isDark ? "#90ee90" : "#4CAF50",
      fontSize: 14,
    },
  });
