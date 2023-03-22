import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { NativeBaseProvider } from 'native-base';
import AppBlockerScreen from "./screens/AppBlockerScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <NativeBaseProvider>

      <Stack.Navigator>

          <Stack.Screen name="AppBlockerScreen" component={AppBlockerScreen} />
      </Stack.Navigator>
      </NativeBaseProvider>

    </NavigationContainer>

  );
}