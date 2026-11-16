export type Language = 'UA' | 'EN' | 'HU' | 'SK';

export type VehicleCategory = 'passenger' | 'crossover' | 'van' | 'moto';

export type VehicleCondition = 'standard' | 'locked' | 'accident' | 'ditch';

export interface LocationCoordinates {
  x: number;
  y: number;
  lat: number;
  lng: number;
}

export interface OrderFormSubmission {
  name: string;
  phone: string;
  vehicleCategory: VehicleCategory;
  condition: VehicleCondition;
  address: string;
  coords: LocationCoordinates | null;
  needReceipt: boolean;
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  serviceType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
