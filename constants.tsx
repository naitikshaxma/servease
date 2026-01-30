
import { Service, Provider, ServiceRequest } from './types';

export const SERVICES: Service[] = [
  { 
    id: 'electrician', 
    name: 'Electrician', 
    icon: '⚡', 
    description: 'Expert fault fixing, wiring, and premium appliance installation.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200'
  },
  { 
    id: 'plumber', 
    name: 'Plumber', 
    icon: '🚰', 
    description: 'Leak repairs, luxury pipe fittings, and modern sanitation.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200'
  },
  { 
    id: 'ac-repair', 
    name: 'AC Repair', 
    icon: '❄️', 
    description: 'Cinematic cooling repair, gas refilling, and master servicing.',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b354bcadc088?q=80&w=1200'
  },
  { 
    id: 'cleaning', 
    name: 'Cleaning', 
    icon: '🧹', 
    description: 'Deep architectural cleaning and textile restoration.',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=1200'
  },
  { 
    id: 'appliance-repair', 
    name: 'Appliance Repair', 
    icon: '🛠️', 
    description: 'Modern appliance diagnostics and expert restoration.',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200'
  },
  { 
    id: 'ro-service', 
    name: 'RO Service', 
    icon: '💧', 
    description: 'Advanced water purification and filtration maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?q=80&w=1200'
  },
];

export const PROVIDERS: Provider[] = [
  {
    id: 'p1',
    serviceId: 'electrician',
    name: 'Rahul Sharma',
    rating: 4.8,
    price: '₹299 onwards',
    experience: '8 Years',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400',
    description: 'Expert in residential wiring and premium smart home maintenance.',
    contact: '+91 9876543210',
    earnings: '₹42,500',
    totalJobs: 156
  },
  {
    id: 'p2',
    serviceId: 'electrician',
    name: 'Amit Singh',
    rating: 4.6,
    price: '₹199 onwards',
    experience: '5 Years',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    description: 'Specialist in cinematic lighting and intelligent power setups.',
    contact: '+91 9876543211'
  },
  {
    id: 'p5',
    serviceId: 'cleaning',
    name: 'Suman Devi',
    rating: 4.9,
    price: '₹999 onwards',
    experience: '4 Years',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
    description: 'Passionate about architectural deep cleaning and hygiene standards.',
    contact: '+91 9876543214',
    earnings: '₹28,000',
    totalJobs: 45
  }
];

// Fix: Corrected property 'serviceType' to 'serviceName' and added missing required fields 'customerId', 'providerId', and 'price' to satisfy ServiceRequest interface
export const DUMMY_REQUESTS: ServiceRequest[] = [
  { id: 'req1', customerId: 'c1', providerId: 'p1', customerName: 'Ishaan Verma', serviceName: 'Electrician', status: 'pending', date: '2024-03-25', location: 'Noida Sector 15', price: '₹299' },
  { id: 'req2', customerId: 'c2', providerId: 'p5', customerName: 'Ananya Gupta', serviceName: 'Cleaning', status: 'accepted', date: '2024-03-26', location: 'Gurgaon Phase 3', price: '₹999' },
  { id: 'req3', customerId: 'c3', providerId: 'p2', customerName: 'Rohan Mehta', serviceName: 'AC Repair', status: 'completed', date: '2024-03-22', location: 'Delhi South Ex', price: '₹499' },
];
