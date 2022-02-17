import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Route from './src/routes/';
import { useEffect, useState } from 'react';
import { theme } from './src/styles/theme';


export default function App() {

  let customFonts = {
    'Chewy-Regular': require('./src/assets/fonts/Chewy-Regular.ttf'),
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold' : require('./src/assets/fonts/Roboto-Bold.ttf'),
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  async () => {
    
  } 
  
  let _loadFontsAsync = async ()  => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    _loadFontsAsync();
  }, []);
 

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >

      <StatusBar
        style="light"
        backgroundColor= {theme.colors.background}
        translucent={true}
        hidden={true}
      />

      <Route />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
