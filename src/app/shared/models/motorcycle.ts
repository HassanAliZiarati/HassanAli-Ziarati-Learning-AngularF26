export interface Motorcycle {
  id: number;
  brand: string;
  model: string;
  engineCC: string;
  hasABS?: boolean; // Optional
  category: 'sport' | 'nacked' | 'cruiser'; // Union type
}
