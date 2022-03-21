
export interface Image {
  id?: number;
  title?: string; 
  url: string;
}

export interface NasaModel {
  [x: string]: any;
  loading: boolean;
  image?: Image;
  favorites: Image[];
}

export namespace NasaModel {
  export enum Filter {
    SHOW_IMAGE = 'all',
  }
}  
