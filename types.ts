export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}

export interface Beautician {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  availableDates: string[];
  rating: number;
  reviews: number;
}

export interface Salon {
  id: number;
  name:string;
  rating: number;
  reviews: number;
  location: string;
  imageUrl: string;
  beauticians: Beautician[];
}

export interface Service {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Video {
    id: number;
    user: string;
    description: string;
    videoUrl: string;
    avatarUrl: string;
}