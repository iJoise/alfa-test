export type Nullable<T> = T | null;

export interface Dogs {
  weight: Parameters;
  height: Parameters;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  description: Nullable<string>;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: Image;
}

export interface Parameters {
  imperial: string;
  metric: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
