/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { PostImage } from '../../Types';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Details'>;


const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate('Details' , {title, date, url, explanation});
  };

  return (
    <View style= {styles.container}>
        <Image source={{uri: url}} style={styles.image} />
      <Text style= {styles.title}>
        {title}
      </Text>
      <Text style= {styles.date}>
        {date}
      </Text>
      <View style= {styles.button}>
        <Button title="View" onPress={handleViewPress} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2c449d',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,

    },
    image:{
        width: '100%',
        height: 190,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 32,

    },
    title:{
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },
    date:{
        color: '#fff',
        fontSize: 16,
    },
    button:{
        alignItems: 'flex-end',
    },

});




export default TodaysImage;
