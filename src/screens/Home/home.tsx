/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import fetch from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import { PostImage } from '../../Types';
import {format, sub} from 'date-fns';
import LastDaysImages from '../../components/LastDaysImages'

const Home = () => {
    const [todaysImage, setTodaysImage ] = useState<PostImage>();
    const [lastDaysImages, setLastDaysImages] = useState<PostImage[]>([]);
    useEffect(() => {
        const loadTodayImage = async () => {
            try {
                const todaysImageResponse = await fetch();
                setTodaysImage(todaysImageResponse);
            } catch (error){
                console.error(error);
                setTodaysImage({});
            }

        };

        const loadLast5Days = async () => {
            try{
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgo = format(sub(date,{days:5}),'yyyy-MM-dd');
                const last5DaysImagesResponse = await fetch(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`);
                setLastDaysImages(last5DaysImagesResponse);
            }catch (error){
                console.error(error);
            }
        }
        loadTodayImage().catch(null);
        loadLast5Days().catch(null);
    }, [] );

    return (
        <View style= {styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastDaysImages postImages={lastDaysImages}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor:'rgba(18,39,113,255)',

    },






}
);




export default Home;
