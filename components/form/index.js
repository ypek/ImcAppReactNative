import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import ResultImc from '../resultimc';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');

  function imcCalculator() {
    if (height && weight) {
      const calculatedImc = (weight / (height * height)).toFixed(2);
      return calculatedImc;
    }
    return null;
  }

  function validationImc() {
    const calculatedImc = imcCalculator();

    if (calculatedImc) {
      setImc(calculatedImc);
      setMessageImc('Seu IMC é:');
      setTextButton('Calcular Novamente');
      setHeight(null);
      setWeight(null);
    } else {
      setImc(null);
      setMessageImc('Preencha o peso e a altura');
      setTextButton('Calcular');
    }
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setHeight(parseFloat(text))}
          value={height}
          placeholder='Ex. 1.75'
          keyboardType='numeric'
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setWeight(parseFloat(text))}
          value={weight}
          placeholder='Ex. 75.36'
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.buttonCalculator}>
            <Text style={styles.textButton} onPress={() => validationImc()}>
                {textButton}
            </Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
