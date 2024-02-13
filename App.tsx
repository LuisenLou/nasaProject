/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes';


//https://api.nasa.gov/planetary/apod?api_key=M4dpA8GkOggpVzCo0Ol19rzTgezQo61X1PLkLzCv

function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.container}
    >
      <Routes/>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'rgba(7,26,93,255)',


  },

});

export default App;
