/* eslint-disable prettier/prettier */

const API_KEY = 'M4dpA8GkOggpVzCo0Ol19rzTgezQo61X1PLkLzCv';
const API_URL = 'https://api.nasa.gov/planetary/apod';
//https://api.nasa.gov/planetary/apod?api_key=M4dpA8GkOggpVzCo0Ol19rzTgezQo61X1PLkLzCv

//Conexion con backend - API.
//Se exporta una funcion asincrona que espera de manera funcional un string (url).
export default async (urlParams?: string) => {
    try {
        //Utiliza fetch para realizar una solicitud HTTP.
        const response = await fetch(
            //Se usa plantilla de cadena JS. Si el tipo no es undefined y es mayor que cero se agrega a la cadena completa.
            `${API_URL}?api_key=${API_KEY}${
                typeof urlParams !== 'undefined' && urlParams?.length > 0
                    ? urlParams
                    : ''
            }`,
        );
        //Convierte la respuesta de la solicitud a formato JSON utilizando el método json().
        //La función espera a que esta operación se complete antes de continuar.
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error){
        return Promise.reject(error);
    }




};
