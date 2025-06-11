type StaticImageData = import("next/image").StaticImageData;

export type hero = {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export type testimonial = {
  id: number;
  comment: string;
  image: StaticImageData;
  name: string;
  position: string;
  rating: string; 
}

export type team = {
  id: number;
  image: StaticImageData;
  name: string;
  position: string;
};


