import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import AuthGuard from '@/presentation/theme/components/AuthGuard';
import ThemedBackground from '@/presentation/theme/components/ThemedBackground';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { router } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native';


const HomePacienteScreen = () => {
  const {status, userType} = useAuthStore();

  console.log(status)
  const backgroundColor = useThemeColor({}, 'background');
  const next = () => {
    router.push('/usuario/kit-game')
  }

  console.log('User in HomePacienteScreen:', userType);
  return (
    <AuthGuard>
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView
              style={{ flex: 1, backgroundColor: backgroundColor }}
            >
              <ThemedBackground backgroundColor="#fba557" style={{ 
            width: '100%', 
            borderRadius: 20, 
            padding: 30,
            alignItems: 'center'
          }}>
            <ThemedText type="welcome" style={{ 
              alignSelf: 'center', 
              color: '#000000',
              fontSize: 32,
              fontWeight: 'bold',
              marginBottom: 30
            }}>
              Bienvenido
            </ThemedText>

            {userType === 'Paciente ' ? (
              <View style={{ width: '100%' }}>
                {/* Kits Asignados */}
                <ThemedText style={{ 
                  color: '#000000', 
                  fontSize: 18, 
                  fontWeight: 'bold',
                  marginBottom: 10 
                }}>
                  Kits Asignados
                </ThemedText>
                
                <View style={{ 
                  flexDirection: 'row', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: 30 
                }}>
                  <ThemedBackground backgroundColor="white" style={{ 
                    borderRadius: 15, 
                    padding: 15,
                    flex: 1,
                    marginRight: 15
                  }}>
                    <ScrollView 
                      horizontal 
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{
                        gap: 10,
                        paddingHorizontal: 5
                      }}
                    >
                      <ThemedButton style={{ 
                        backgroundColor: '#e5e5e5', 
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 10,
                        minWidth: 60
                      }}>
                        <ThemedText style={{ color: '#000000', fontSize: 14 }}>
                          Kit 2
                        </ThemedText>
                      </ThemedButton>
                      
                      <ThemedButton style={{ 
                        backgroundColor: '#fba557', 
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 10,
                        minWidth: 60
                      }}>
                        <ThemedText style={{ color: '#000000', fontSize: 14 }}>
                          Kit 3
                        </ThemedText>
                      </ThemedButton>
                    </ScrollView>
                  </ThemedBackground>

                  <ThemedButton style={{ 
                    backgroundColor: '#ff8c00', 
                    paddingHorizontal: 25,
                    paddingVertical: 12,
                    borderRadius: 15
                  }}>
                    <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>
                      JUGAR
                    </ThemedText>
                  </ThemedButton>
                </View>

                {/* Historial */}
                <ThemedText style={{ 
                  color: '#000000', 
                  fontSize: 18, 
                  fontWeight: 'bold',
                  marginBottom: 10 
                }}>
                  Historial
                </ThemedText>
                
                <ThemedBackground backgroundColor="white" style={{ 
                  borderRadius: 15, 
                  padding: 15
                }}>
                  <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      gap: 10,
                      paddingHorizontal: 5
                    }}
                  >
                    <ThemedButton style={{ 
                      backgroundColor: '#e5e5e5', 
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                      borderRadius: 10,
                      minWidth: 60
                    }}>
                      <ThemedText style={{ color: '#000000', fontSize: 14 }}>
                        Kit 1
                      </ThemedText>
                    </ThemedButton>
                    
                    <ThemedButton style={{ 
                      backgroundColor: '#e5e5e5', 
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                      borderRadius: 10,
                      minWidth: 60
                    }}>
                      <ThemedText style={{ color: '#000000', fontSize: 14 }}>
                        Kit 4
                      </ThemedText>
                    </ThemedButton>
                    
                    <ThemedButton style={{ 
                      backgroundColor: '#e5e5e5', 
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                      borderRadius: 10,
                      minWidth: 60
                    }}>
                      <ThemedText style={{ color: '#000000', fontSize: 14 }}>
                        Kit 5
                      </ThemedText>
                    </ThemedButton>
                  </ScrollView>
                </ThemedBackground>
              </View>
            ) : (
          <View>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                  <ThemedButton onPress={() => next}>
                    <ThemedText type="subtitle" style={{ padding: 20, alignSelf: 'center', marginBottom: 20, color: 'white' }}>
                      Jugar
                    </ThemedText>
                  </ThemedButton>
                  </View>
                  <View style={{ marginTop: '80%' , alignItems: 'center'}}>
                  <ThemedButton >

                    <ThemedText type="subtitle" style={{ alignSelf: 'center', color: 'white', padding: 20 }}>
                      Conectar con el Doctor
                    </ThemedText>
                  </ThemedButton>
                  </View>
                </View>
              </View>
            )}
              </ThemedBackground>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
    </AuthGuard>
  )
};

export default HomePacienteScreen;