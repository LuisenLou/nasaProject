/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Types';
import Header from '../../components/Header';

const Details = () => {
  const {
    params : {title, url, explanation, date},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Details'>['route']>();

  return (
    <View style= {styles.container}>
      <Header/>
      <View style= {styles.content}>
      <Image source={{uri : url}} style={styles.image} />
      <Text style= {styles.title} > {title} </Text>
      <Text style= {styles.date} > {date} </Text>
      <ScrollView style={styles.explanation}>
        <Text style= {{color: '#fff', fontSize: 16}}>
          {explanation}
        </Text>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgba(18,39,113,255)',
    paddingHorizontal:16,
  },
  content:{
    flex:1,
    backgroundColor: '#2c449d',
    borderRadius:32,
    marginVertical:24,
    padding: 16,
  },
  image:{
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  explanation:{
    marginVertical: 16,

  },




});

export default Details;
