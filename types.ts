
export interface Alien {
  id: string;
  name: string;
  description: string;
  image: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
}

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  text: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  topics: string[];
}
