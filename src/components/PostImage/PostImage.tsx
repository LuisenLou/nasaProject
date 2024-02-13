/* eslint-disable prettier/prettier */
import React , {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {PostImage as PostImageTypes, RootStackParams} from '../../Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//Tipado que define nuevo tipo que representa propiedades de navegación específicas de la pantalla 'Details' en la pila de navegación.
type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Details'>;

//Componente funcional que posee tipado y recibe datos necesarios por tipado. Retorna datos del tipo sin mostrar todos al pasarlos a la siguiente screen.
const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {
  //Funcion del boton que refiere a la pantalla con los datos del componente.
  const handleViewPress = () => {
    navigate('Details' , {title, date, url, explanation});
  };
  //Permite navegar con la seguridad de que se hace con las props especificas. Hook de react.
  const {navigate} = useNavigation<PostImageNavigationProps>();
  return (
    <View style= {styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style= {styles.button}>
        <Button title="View" onPress={handleViewPress}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(18,39,113,255)',
    borderRadius:20,
    marginBottom: 12,
    padding: 16,
  },
  title:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:12,
  },
  date:{
    color:'#fff',
  },
  button:{
    alignItems:'flex-end',
  },



});

export default PostImage;
