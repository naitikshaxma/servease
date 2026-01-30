
export type UserRole = 'customer' | 'provider';

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  imageUrl: string;
}

export interface ProviderService {
  id: string;
  providerId: string;
  providerName: string;
  name: string;
  category: string;
  price: string;
  description: string;
  imageUrl: string;
  availability: 'Available' | 'Busy';
  location: string;
}

export interface Provider {
  id: string;
  serviceId: string;
  name: string;
  rating: number;
  price: string;
  experience: string;
  imageUrl: string;
  description: string;
  contact: string;
  earnings?: string;
  totalJobs?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface ServiceRequest {
  id: string;
  customerId: string;
  customerName: string;
  providerId: string;
  serviceName: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  date: string;
  location: string;
  price: string;
}
