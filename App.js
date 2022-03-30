import React,{ useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


function App(){
  const [img, setImg]= useState(require('./src/biscoito.png'));
  const[textoFrase, setTextoFrase]= useState('');

  let frases=[
    'A vida trará coisas boas se tiveres paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  ];

  function quebraBiscoito(){
    let numeroAleatorio=Math.floor(Math.random()* frases.length)
    setTextoFrase(' "' + frases[numeroAleatorio] +'" ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return(
    <View style={styles.container}>
      
      <Image
      source={img}
      style={styles.img}
      />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop:15, borderColor:'#dd7b22'}]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

  },
  img:{
    width: 230,
    height: 230,

  },
  textofrase:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25
  },
  btnArea:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:17,
    fontWeight:'bold',
    color:'#515151',
    
  }
});

export default App;