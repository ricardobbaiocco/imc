

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState} from 'react';
export default function App() {

  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('');


  function calculaPeso(){
    const alt = altura/100;
    const multiplica = alt*alt;
    const divisao = peso / multiplica;
    
    
 if (divisao > 18.5 && divisao <= 24.9) {
    console.warn((divisao).toFixed(1) + " e está com o peso normal");

}else if(divisao >= 25 && divisao <= 29.9) {
    console.warn((divisao).toFixed(1) + " e está com sobrepeso");

}else if(divisao >= 30 && divisao <= 34.9) {
    console.warn((divisao).toFixed(1) + " e está com obesidade grau 1");

}else if(divisao >= 35 && divisao <= 39.9) {
    console.warn((divisao).toFixed(1) + " e está com obesidade grau 2");

}

  
  }

  return (
    <View>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput 
        style= {styles.input}
        value={peso}
        onChangeText={ (peso) =>setPeso(peso)}
        keyboardType="numeric"
        placeholder="Insira seu peso(kg)"
      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        keyboardType="numeric"
        placeholder="Insira sua altura(cm)"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={calculaPeso}
      >
      <Text>Calcular</Text>
     </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize:30,
    textAlign:'center',
    marginTop:50,
  },
  input:{
    textAlign:'center',
    borderRadius:5,
    margin:15,
    padding:15,
    color:'black',
    borderColor:'blue',
    borderWidth:4,
  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'green',
    padding:10,
  },
});
