import Home from './pages/Home';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import * as SplashScreen from "expo-splash-screen";

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  if (fontsLoaded) {
    // Hide native splash screen after fonts are loaded
    SplashScreen.hideAsync();
  }

  return (
    <Home/>
  );
}
