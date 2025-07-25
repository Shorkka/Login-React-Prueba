import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="registerStep1/index"    options={{
          title: '',
          headerShadowVisible: false,
        }}/>
          <Stack.Screen name="registerStep2/index"    options={{
          title: '',
          headerShadowVisible: false,
        }}/>
          <Stack.Screen name='registerStep3/index'   options={{
          title: '',
          headerShadowVisible: false,
        }}/>
      </Stack>
  );
}