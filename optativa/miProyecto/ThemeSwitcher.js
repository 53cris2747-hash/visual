import { View, Text, Switch, StyleSheet, Button } from 'react-native';
import { useThemeStore } from './store/useThemeStore';

export default function ThemeSwitcher() {
  const darkMode = useThemeStore(state => state.darkMode);
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  const resetTheme = useThemeStore(state => state.resetTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modo oscuro: {darkMode ? 'Activado' : 'Desactivado'}
      </Text>

      <Switch
        value={darkMode}
        onValueChange={toggleTheme}
      />

      <View>
        <Button title="Resetear el estado" onPress={resetTheme} color="red"/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  }

  
});

