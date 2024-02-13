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

//Componente de la pantalla Home.

const Home = () => {
    //Hook que permite establecer la imagen del dia actual. Este componente esta tipado como PostImage. 
    const [todaysImage, setTodaysImage ] = useState<PostImage>();
    //Hook que permite establecer las imagenes de los ultimos 5 dias. Estas 5 imagenes son un componente que posee como prop un array de PostImage.
    const [lastDaysImages, setLastDaysImages] = useState<PostImage[]>([]);
    //Hook que en el rederizado espera a obtener la imagen de la API tanto de hoy como de los ultimos 5 dias cada vez que renderices al no haber dependencia.
    //En ambos casos son funciones asincronas que esperan una respuesta de la api. Try-catch si no obtienen respuesta dan error y cargan null.
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
                //Formatea la fecha mediante libreria 'date-fns'. Primero formatea fecha actual, despues mediante libreria obtiene los ultimos cinco dias
                //a partir del actual y despues genera la respuesta a la promesa de la funcion almacenandolo gracias al hook.
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgo = format(sub(date,{days:5}),'yyyy-MM-dd');
                const last5DaysImagesResponse = await fetch(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`);
                setLastDaysImages(last5DaysImagesResponse);
            }catch (error){
                console.error(error);
            }
        }
        //Casos de error.
        loadTodayImage().catch(null);
        loadLast5Days().catch(null);
    }, [] );

    //Retorna el Header como componente, la imagen actual como componente y las ultimas cinco imagenes como objeto/componmente.
    //LastDaysImages es FUNCTIONAL COMPONENT. postImages es un array de las ultimas 5 imagenes con sus datos por tipado.
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
