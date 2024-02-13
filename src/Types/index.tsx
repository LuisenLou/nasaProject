/* eslint-disable prettier/prettier */
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

export type RootStackParams = {
    Home: undefined;
    Details: PostImage;
}




