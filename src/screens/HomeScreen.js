import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleGithubLink = () => {
      Linking.openURL('https://github.com/Mariah28');
    };
    
    const handleLinkedinLink = () => {
      Linking.openURL('https://www.linkedin.com/in/mariah-alves-a937a2246?');
    };
  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/profile.jpeg')}
        style={styles.profileImage}
      />
      <Text style={styles.introText}>
        Bem-vindo! Eu sou Mariah Cecilia, uma desenvolvedor apaixonada por tecnologia e inovação.
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#e7ae47' }]} 
        onPress={() => navigation.navigate('Curriculo')}
      >
        <Text style={styles.buttonText}>Ver Currículo</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#333' }]} 
          onPress={handleGithubLink}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#0077b5' }]} 
          onPress={handleLinkedinLink}
        >
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
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
  introText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', 
  },
  linksContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
});

export default HomeScreen;