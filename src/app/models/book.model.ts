export interface VolumeInfo {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  }
  
  export interface Book {
    id: string;
    volumeInfo: VolumeInfo; // Add volumeInfo with its structure
    rating: number;
  }