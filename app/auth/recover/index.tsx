import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, View } from 'react-native'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { router } from 'expo-router';
import ThemedBackground from '@/presentation/theme/components/ThemedBackground';

const RecoveryScreen = () => {
  const { height, width } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');
  const secondaryColor = useThemeColor({}, 'secondaryText');
  const [form, setForm] = useState({
    email: ''
  });
  const [isPosting, setIsPosting] = useState(false);

  const onSendRecovery = async () => {
    const { email } = form;
    if (email.length === 0) {
      return Alert.alert('Por favor ingresa tu email');
    }
    setIsPosting(true);
    // Aquí deberías llamar a lu API para enviar el correo de recuperación
    // await sendRecoveryEmail(email);
    setTimeout(() => {
      setIsPosting(false);
      Alert.alert('Si el correo existe, se ha enviado un código de recuperación');
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
          <ThemedBackground />
          <ThemedText type="title" style={{ alignSelf: 'center', top: height * 0.06, position: 'absolute' }}>Lexyvoz</ThemedText>
          <ThemedText type="subtitle" style={{ alignSelf: 'center' }}>Recuperar contraseña</ThemedText>
          <ThemedText style={{ color: secondaryColor, alignSelf: 'center' }}>Mandame un código de restauración</ThemedText>
          {/* Email */}
          <View style={{ marginTop: 20 }}>
            <ThemedText>Email</ThemedText>
            <ThemedTextInput
              placeholder="correo@ejemplo.com"
              style={{
                borderBottomWidth: 1,
                borderColor: 'grey',
                paddingVertical: 10,
                fontSize: 16,
              }}
              autoCapitalize="none"
              keyboardType="email-address"
              icon="mail-outline"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
          </View>
          <View style={{ marginTop: 10 }} />
          <ThemedButton
            onPress={onSendRecovery}
            disabled={isPosting}
          >
            Enviar código
          </ThemedButton>
          <View style={{ marginTop: 50 }} />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ThemedText style={{ color: secondaryColor }}>¿Ya tienes una cuenta?</ThemedText>
            <ThemedLink href='/auth/recover/confirmar_accion/index' style={{ marginHorizontal: 5 }}>
              Iniciar sesión
            </ThemedLink>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RecoveryScreen