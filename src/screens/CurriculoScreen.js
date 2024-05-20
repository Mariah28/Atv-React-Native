import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CurriculoScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.jpeg')}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>Mariah Cecilia</Text>
      <Text style={styles.description}>
        Atualmente estou no 3° período de ADS na Faculdade Senac. {'\n'}
        Sou apaixonada por aprender novas tecnologias e resolver problemas complexos.
      </Text>
      <Text style={styles.experience}>
         Conhecimento em HTML, CSS, Javascript, Mysql{'\n'}
         Idade: 21 anos{'\n'}
         Endereço: Recife - PE {'\n'}
         Formação: Análise e Desenvolvimento de Sistemas{'\n'}
         Contato: mariahcecilia.alves@outlook.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c142f',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nameText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  experience: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },
});

export default CurriculoScreen;