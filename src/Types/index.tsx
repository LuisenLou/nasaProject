/* eslint-disable prettier/prettier */


// Tipados del post de imagen que debe poseer de manera opcional. Representa la estructura de datos de un objeto PostImage.
export type PostImage = {
    copyright?:string;
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_cersion?: string;
    title?: string;
    url?: string;
};


// Tipados de Routes que debe poseer de manera obligatoria. Representa la estructura de datos de un objeto RootStackParams, es decir los parametros que posee.
export type RootStackParams = {
    Home: undefined;
    Details: PostImage;//Composicion.
}




