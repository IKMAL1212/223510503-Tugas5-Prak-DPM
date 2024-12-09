import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff5722',   // Warna utama (contoh: orange terang)
    accent: '#8bc34a',    // Warna aksen (contoh: hijau muda)
    background: '#212121', // Latar belakang gelap
    surface: '#424242',    // Warna permukaan gelap
    text: '#ffffff',      // Teks putih untuk kontras lebih tinggi
    placeholder: '#bdbdbd', // Placeholder abu-abu
    notification: '#ff9800', // Warna notifikasi oranye terang
  },
};

const App = () => {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
