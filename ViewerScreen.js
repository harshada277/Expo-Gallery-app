import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import * as Sharing from 'expo-sharing';

export default function ViewerScreen({ route }) {
  const { image } = route.params;

  const shareImage = async () => {
    try {
      if (!(await Sharing.isAvailableAsync())) {
        alert('Sharing is not available on this device');
        return;
      }
      await Sharing.shareAsync(image.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <Button title="Share Image" onPress={shareImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});