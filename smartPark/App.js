import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function App() {
  const [data, setData] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Fetch data from server
      //Change this address accoriding the the link you see when running server.py in backend
      const dataResponse = await fetch('ENTER THE URL PROVIDED TO YOU AFTER RUNNING server.py/data/12345');
      const dataJson = await dataResponse.json();

      // Set image from server
      //Change this address accoriding the the link you see when running server.py in backend
      setData(dataJson);
      setImageUri('ENTER THE URL PROVIDED TO YOU AFTER RUNNING server.py/image/12345');
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data or image:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    //The first fetch
    fetchData();

    //Fetch data every 30 seconds
    const interval = setInterval(fetchData, 30000);

    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!data || !imageUri) {
    return (
      <View style={styles.container}>
        <Text>Error loading data or image. Please check the server.</Text>
      </View>
    );
  }

  const totalSpaces = data.total_spaces;
  const freeSpots = data.free_spots.length;
  const occupiedSpots = data.occupied_spots.length;

  return (
    <View style={styles.container}>
      {/* Image stuff */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>

      {/* Bottom half with text */}
      <View style={styles.dataContainer}>
        <View style={styles.row}>
          <Text style={styles.smallText}>Free: {freeSpots}</Text>
          <Text style={styles.largeText}>Total: {totalSpaces}</Text>
          <Text style={styles.smallText}>Occupied: {occupiedSpots}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  dataContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});




