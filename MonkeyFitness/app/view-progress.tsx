import { View, Text, StyleSheet } from "react-native";

export default function ViewProgress() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📈 Here’s your progress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
