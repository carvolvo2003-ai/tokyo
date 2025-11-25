export enum LocationType {
  Transport = '交通',
  Spot = '景點',
  Food = '美食',
  Hotel = '住宿',
  Flight = '航班',
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ItineraryItem {
  id: string;
  time?: string;
  type: LocationType;
  title: string;
  description: string; // The PDF content
  tips?: string; // AI Enriched content (stories/strategies)
  tags: string[]; // "Must Eat", "Reservation Needed", etc.
  locationStr: string; // For Google Maps query
  cost?: string;
}

export interface DayPlan {
  date: string; // "10/23"
  dayOfWeek: string; // "週四"
  title: string; // "成田機場 -> 橫濱"
  weather: {
    temp: string;
    condition: 'Sunny' | 'Cloudy' | 'Rain';
    icon: any; // We'll store the Lucide icon component name or render it directly
  };
  items: ItineraryItem[];
}

export interface HotelInfo {
  name: string;
  dates: string;
  address: string;
  checkIn?: string;
  checkOut?: string;
  notes: string;
}

export interface FlightInfo {
  airline: string;
  flightNo: string;
  route: string;
  time: string;
  baggage: string;
}
