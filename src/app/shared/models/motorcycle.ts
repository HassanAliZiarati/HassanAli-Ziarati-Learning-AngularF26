export interface Motorcycle {
  id: number;
  brand: string;
  model: string;
  engineCC: number;
  category: 'sport' | 'naked' | 'cruiser'; // Union type
  hasABS?: boolean; // Optional
  image: string;
}
