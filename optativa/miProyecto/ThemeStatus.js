import { View, Text } from 'react-native';
import { useThemeStore } from './store/useThemeStore';

export default function ThemeStatus() {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <View>
      <Text>
        Tema: {darkMode ? 'Modo oscuro' : 'Modo claro'}
      </Text>
    </View>
  );
}
