/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { PostImage as PostImageTypes } from '../../Types';
import React, { FC } from 'react';
import PostImage from '../PostImage';

//Componente funcional tipado para aceptar una prop de postImages que es un array de tipos PostImages.
//({postImages}) DESESTRUCTURA la prop.
//Dentro se realiza un mapeo de postImages en el que se extrae cada postImage y se renderiza con su titulo y toda la informacion.
//con cada iteracion se renderiza uno con los anteriores. Scrollview es un componente de react-native que permite realizar scroll.
const LastDaysImages: FC<{postImages?:PostImageTypes[]}> = ({postImages}) => {
  return (
    <View style= {styles.container}>
      <Text style= {styles.title}> Last 5 Days </Text>
      <ScrollView  style={{padding:24}}> 
      {postImages?.map(postImage=> (
        <PostImage key={`post-image-${postImage.title}`}{...postImage}/>
      ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginVertical: 8,
  },
  title:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },


});


export default LastDaysImages;
