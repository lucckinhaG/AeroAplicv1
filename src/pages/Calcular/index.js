import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,

 } from 'react-native';

 import Lista from '../Lista';

export default function Calcular() {
  const [fazenda, setFazenda] = useState(null);
  const [area, setArea] = useState('');
  const [havoo, setHavoo] = useState('');

  const fullaplic = parseInt ( area / havoo );
  const unfullaplic = parseInt ( area - (fullaplic * havoo));

  const [produto, setProduto] = useState (null);
  const [doseha, setDoseha] = useState ('');
  const completa = (havoo * doseha).toFixed(2);
  const incompleta = (unfullaplic * doseha).toFixed(2);

  const [lista, setLista] = useState([]);

  const [prod, setProd] = useState ([]);

  function SaveProduct(){

      setLista
      ( (arr) => [...arr, {
        id: new Date(). getTime(),
        nome: produto,
        doseha: doseha,
        completa: completa,
        incompleta: incompleta,
      }]);
      setProduto ('');
      setDoseha ('');
      console.log(lista);
  }

  useEffect(() => { setProd (lista);
  }, [lista]);

 return (
  <KeyboardAvoidingView>
    <Pressable onPress={() => Keyboard.dismiss()}>
    
    <View style={styles.containerImage}>
          <Image source={require('../../assets/Logo.png')} />
    </View>

   <View style={styles.containerTitle}>
      <Text style={styles.titleList}>Fazenda / Lote</Text>
      <TextInput 
              style={styles.titleInput} 
              value={fazenda}
              placeholder="Nome da fazenda"
              placeholderTextColor="#000"
              onChangeText={ (text) => setFazenda({text}) }
          />
   </View>

   <View style={styles.containerArea}>
          <Text style={styles.titleForm}>Área / hectáre</Text>
          <Text style={styles.titleForm}>Hectáre p/ Aplic</Text>
        </View>
      
          <View style={styles.containerForm}>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Área do terreno"
                placeholderTextColor="#000"
                value={area}
                onChangeText={ (number) => setArea(number) }
            />

            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Hectáres por aplicação"
                placeholderTextColor="#000"
                value={havoo}
                onChangeText={ (number) => setHavoo(number) }
            />
          </View>

          <View style={styles.areaInfo}>
            <Text style={styles.topInput}>Carga Cheia</Text>
            <Text style={styles.topInput}>Carga incompleta</Text>
          </View>

          <View style={styles.containerResArea}>
                <Text style={styles.textResult}>{fullaplic}</Text>
                <Text style={styles.textResult}>{unfullaplic}</Text>
          </View>

          <View style={styles.descProdutos}>
              <Text style={styles.topInput}>Produto</Text>
              <Text style={styles.topInput}>Dose/há</Text>
          </View>

          <View style={styles.containerProdutos}>

              <TextInput
                style={styles.productInput}
                value={produto}
                keyboardType="default"
                placeholder="Produto"
                placeholderTextColor="#000"
                onChangeText={ (text) => setProduto(text) }
              />

              <TextInput
                style={styles.productInput}
                placeholder="Dose / há"
                keyboardType='numeric'
                value={doseha}
                onChangeText={ (number) => setDoseha(number) }
              />
  
          </View>

          <View style={styles.containerAdd}>
            <TouchableOpacity style={styles.addButton} onPress={SaveProduct}>
              <Text style={styles.buttonAdic}>Adicionar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerProdutoTitle}>
            <Text style={styles.titleProd}>Produto</Text>
            <Text style={styles.titleRes}>Dose/ha</Text>
            <Text style={styles.titleRes}>Carga Cheia</Text>
            <Text style={styles.titleRes}>Carga incompleta</Text>
          </View>

          <View style={styles.containerResult}>
           <FlatList
           showsVerticalScrollIndicator={false}
           keyExtractor={ (item) => item.id}
          data={prod.reverse()}
          renderItem={ ({ item }) => <Lista data={item}/> }
           />
          </View>
          </Pressable>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F4F7F8',
},
containerImage:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
},
containerTitle:{
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
},
titleList:{
  fontSize: 16
},
titleInput:{
  width: '80%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    borderWidth: 3,
    paddingLeft: 15,
    margin: 10,
    fontSize: 12,
    fontWeight: '500',
    borderColor: '#7CC81C',
    color: '#000',
},
containerArea:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginTop: 10,
},
titleForm:{ 
  fontSize: 16,
},
containerForm:{
  justifyContent:  'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginStart: 20,
},
textInput: {
    width: '42%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    borderWidth: 3,
    paddingLeft: 15,
    margin: 10,
    fontSize: 12,
    fontWeight: '500',
    borderColor: '#7CC81C',
    color: '#000',
},
addProdutos:{
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
    color: '#7CC81C',
    textAlign: 'center',
},
descProdutos:{
  justifyContent:  'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  width: '90%',
  marginHorizontal: 20, 
  marginTop: 10,
},
areaInfo:{
  justifyContent:  'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  width: '90%',
  marginHorizontal: 35, 
  marginTop: 10,
},
containerResArea:{
  justifyContent:  'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  width: '90%',
  marginStart: 20,
},
textResult:{
  width: '42%',
  height: 40,
  backgroundColor: '#D9D9D9',
  borderRadius: 10,
  borderWidth: 3,
  paddingLeft: 15,
  justifyContent: 'center',
  alignItems: 'center',
  textAlignVertical: 'center',
  margin: 10,
  fontSize: 12,
  fontWeight: '500',
  borderColor: '#7CC81C',
  color: '#000',
},
descProdutos:{
  justifyContent:  'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  width: '90%',
  marginHorizontal: 20, 
  marginTop: 10,
},
containerProdutos:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginTop: 10,
},
productInput:{
  width: '42%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    borderWidth: 3,
    paddingLeft: 15,
    margin: 10,
    fontSize: 12,
    fontWeight: '500',
    borderColor: '#7CC81C',
    color: '#000',
},
containerAdd:{
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
},
addButton:{
  marginTop: 15,
  marginHorizontal: 10,
  width: 120,
  height: 40,
  backgroundColor: '#D9D9D9',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  borderWidth: 3,
  borderColor: '#019D10',
},
buttonAdic:{
fontWeight: '500',
fontSize: 14,
},
containerProdutoTitle:{
  flexDirection: 'row',
  margin: 5,
  justifyContent:'center',
  alignItems: 'center',
},
titleProd:{
  width: 120,
  height: 35,
  textAlign: 'center',
  textAlignVertical: 'center',
  margin: 5,
  fontSize: 12,
  borderBottomWidth: 2,
},
titleRes:{
  width: 70,
  height: 35,
  textAlign: 'center',
  textAlignVertical: 'center',
  fontSize: 12,
  fontWeight: '500',
  margin: 5,
  borderBottomWidth: 2,
}
});