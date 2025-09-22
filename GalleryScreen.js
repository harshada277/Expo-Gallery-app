import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const images = [
  { id: '1', url: 'https://placekitten.com/300/300' },
  { id: '2', url: 'https://placekitten.com/301/300' },
  { id: '3', url: 'https://placekitten.com/302/300' },
];

export default function GalleryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Viewer', { image: item })}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
  },
  image: {
    width: 150,
    height: 150,
    margin: 4,
  },
});