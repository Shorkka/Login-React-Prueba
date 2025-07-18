import ThemedBackground from '@/presentation/theme/components/ThemedBackground';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, View } from 'react-native';

const NuevoPasswordScreen = () => {
  const { height, width } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');
  const secondaryColor = useThemeColor({}, 'secondaryText');
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
    code: '',
  });
  const [isPosting, setIsPosting] = useState(false);

  const onChangePassword = async () => {
    const { password, confirmPassword, code } = form;
    if (!code || !password || !confirmPassword) {
      return Alert.alert('Completa todos los campos');
    }
    if (password !== confirmPassword) {
      return Alert.alert('Las contraseñas no coinciden');
    }
    if (password.length < 6) {
      return Alert.alert('La contraseña debe tener al menos 6 caracteres');
    }
    setIsPosting(true);
    // Aquí deberías llamar a tu API para cambiar la contraseña
    setTimeout(() => {
      setIsPosting(false);
      Alert.alert('Contraseña cambiada exitosamente');
      router.replace('/auth/login');
    }, 1500);
  };

  const getResponsivePadding = (value: number, base: number ) => {
    if (Platform.OS === 'web') { 
      return Math.min(width * 0.3, value);
    } else {
      const basePadding = width * 0.1; 
      return Math.max(16, Math.min(basePadding, base)); 
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
          paddingHorizontal: getResponsivePadding(700, 30),
          alignContent: 'center',
        }}>
        <View style={{ paddingTop: height * 0.30 }}>
          <ThemedBackground backgroundColor='#fff' align='center'>
          <ThemedText type="title" style={{ alignSelf: 'center', top: height * 0.06, position: 'absolute' }}>Lexyvoz</ThemedText>
          <ThemedText type="subtitle" style={{ alignSelf: 'center' }}>Nueva contraseña</ThemedText>
          <ThemedText style={{ color: secondaryColor, alignSelf: 'center' }}>Ingresa tu nueva contraseña</ThemedText>
          <View style={{ marginTop: 20 }}>
            <ThemedText style={{ marginTop: 10 }}>Nueva contraseña</ThemedText>
            <ThemedTextInput
              placeholder="***********"
              style={{
                borderBottomWidth: 1,
                borderColor: 'grey',
                paddingVertical: 10,
                fontSize: 16,
              }}
              autoCapitalize="none"
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <ThemedText style={{ marginTop: 10 }}>Confirmar contraseña</ThemedText>
            <ThemedTextInput
              placeholder="***********"
              style={{
                borderBottomWidth: 1,
                borderColor: 'grey',
                paddingVertical: 10,
                fontSize: 16,
              }}
              autoCapitalize="none"
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
            />
          </View>
          <View style={{ marginTop: 10 }} />
          <ThemedButton
            onPress={onChangePassword}
            disabled={isPosting}
            style={{
              alignSelf: 'center',
              marginBottom: 10,
              minWidth: 180,
              maxWidth: '100%',
              paddingHorizontal: 12,
              flexShrink: 1,
            }}
          >
            Cambiar contraseña
          </ThemedButton>
          <View style={{ marginTop: 30 }} />
        </ThemedBackground> 
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default NuevoPasswordScreen;
