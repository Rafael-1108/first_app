import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require("./assets/logo.png")} style={styles.image}/>
        <Text></Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 30,
    marginBottom: 40,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  }
});