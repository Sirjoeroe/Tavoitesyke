import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const App = () => {
  const [ika, setIka] = useState('');
  const [alempiRaja, setAlemppiRaja] = useState(null);
  const [ylempiRaja, setYlempiRaja] = useState(null);

  const laskeSykerajat = () => {
    const parsedIka = parseInt(ika, 10);
    if (!isNaN(parsedIka) && parsedIka > 0) {
      const alempi = (220 - parsedIka) * 0.65;
      const ylempi = (220 - parsedIka) * 0.85;
      setAlemppiRaja(alempi.toFixed(2));
      setYlempiRaja(ylempi.toFixed(2));
    } else {
      setAlemppiRaja(null);
      setYlempiRaja(null);
      alert('Syötä ikä');
    }
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sykerajojen laskuri</Text>
        <TextInput
          style={styles.input}
          placeholder="Syötä ikäsi"
          keyboardType="numeric"
          value={ika}
          onChangeText={setIka}
        />
        <TouchableOpacity style={styles.button} onPress={laskeSykerajat}>
          <Text style={styles.buttonText}>Laske</Text>
        </TouchableOpacity>
        {alempiRaja !== null && ylempiRaja !== null && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>Alempi sykeraja: {alempiRaja}</Text>
            <Text style={styles.resultText}>Ylempi sykeraja: {ylempiRaja}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    paddingTop: 40,
    alignItems: 'flex-start'
  },
});

export default App;
