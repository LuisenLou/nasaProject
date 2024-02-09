/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import fecth from '../../utils/fecth';

const Home = () => {
    const [todaysImage, setTodaysImage ] = useState();
    useEffect(() => {
        const loadTodayImage = async () => {
            try {
                const todaysImageResponse = await fecth();
                setTodaysImage(todaysImageResponse);
                console.info(todaysImageResponse);
            } catch (error){
                console.error(error);
            }

        };
        loadTodayImage().catch(null);
    }, [] );

    return (
        <View style= {styles.container}>
            <Header />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 18,

    },






}
);




export default Home;
