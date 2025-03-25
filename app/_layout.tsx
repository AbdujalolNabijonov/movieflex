import { Stack } from "expo-router";
import './css/globals.css';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen
            name={"(tabs)"}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name={"movies/[id]"}
            options={{headerShown:false}}
        />
      </Stack>
  );
}
