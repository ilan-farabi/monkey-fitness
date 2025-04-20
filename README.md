# monkey-fitness
Get swol

🛠️ Step 1: Set Up Your Development Environment
1. Install Node.js
Download from: https://nodejs.org/
You'll get npm (Node Package Manager) with it.

2. Install Expo CLI (Easiest for Beginners)
bash
Copy
Edit
npm install -g expo-cli
Expo simplifies React Native development and is great for prototyping.

Alternatively, you can use the React Native CLI if you need more native module support. Want to go that route?

3. Create Your Project
bash
Copy
Edit
npx create-expo-app MyApp
cd MyApp
npx expo start
This opens a local dev server, and you can test the app on your phone with the Expo Go app.

🧱 Step 2: Build Basic App Structure
Inside the project folder:

App.js: Main entry point

Create folders like:

components/ – for reusable UI components

screens/ – for different app pages

services/ – for DB or API logic

Example screens/HomeScreen.js:

jsx
Copy
Edit
import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home!</Text>
    </View>
  );
}
Update App.js to use it.

🧩 Step 3: Add Navigation (if needed)
bash
Copy
Edit
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
Set up basic stack navigation:

js
Copy
Edit
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
🗄️ Step 4: Set Up Local Database
You’ve got a few options depending on your needs:

Option 1: SQLite (local on-device)
Expo has a wrapper for SQLite:

bash
Copy
Edit
npx expo install expo-sqlite
Usage:

js
Copy
Edit
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('mydb.db');

// Create table
db.transaction(tx => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, name TEXT);');
});
Option 2: AsyncStorage (simple key-value store)
For simpler data (e.g. settings):

bash
Copy
Edit
npx expo install @react-native-async-storage/async-storage
🧪 Step 5: Run and Test Your App Locally
Run dev server: npx expo start

Use Expo Go on your iOS/Android device and scan the QR code.

🧰 Step 6: Optional Tools
Debugging: Use React Native Debugger

UI libraries: Try NativeBase, React Native Paper, or Tailwind with RN
