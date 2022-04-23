export interface IGyphyImage {
  height: string;
  width: string;
  webp: string;
  hash: string;
  url: string;
}

export interface IGyphyImageObject {
  [key: string]: IGyphyImage;
}

export interface IGyphy {
  id: string;
  title: string;
  images: IGyphyImageObject;
}

export interface IGyphyResponse {
  data: IGyphy[];
  pagination: {
    total_count: number;
    count: number;
    offset: 0;
  };
}
