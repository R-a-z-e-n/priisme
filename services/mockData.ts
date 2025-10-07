import { Product, Salon, Service, Video, Beautician } from '../types';
import { SparklesIcon, ScissorsIcon, PaintBrushIcon, HeartIcon } from '../components/IconComponents';

export const trendingProducts: Product[] = [
  { id: 1, name: 'Vintage Graphic Tee', category: 'Streetwear', price: '$45', imageUrl: 'https://picsum.photos/400/500?random=1' },
  { id: 2, name: 'Oversized Denim Jacket', category: 'Trending', price: '$85', imageUrl: 'https://picsum.photos/400/500?random=2' },
  { id: 3, name: 'High-Top Canvas Sneakers', category: 'Streetwear', price: '$70', imageUrl: 'https://picsum.photos/400/500?random=3' },
  { id: 4, name: 'Cargo Pants', category: 'Streetwear', price: '$65', imageUrl: 'https://picsum.photos/400/500?random=4' },
];

export const allProducts: Product[] = [
    ...trendingProducts,
    { id: 5, name: 'Retro Sunglasses', category: 'Accessories', price: '$30', imageUrl: 'https://picsum.photos/400/500?random=5' },
    { id: 6, name: 'Bucket Hat', category: 'Streetwear', price: '$25', imageUrl: 'https://picsum.photos/400/500?random=6' },
    { id: 7, name: 'Minimalist Hoodie', category: 'Trending', price: '$90', imageUrl: 'https://picsum.photos/400/500?random=7' },
    { id: 8, name: 'Crossbody Bag', category: 'Accessories', price: '$55', imageUrl: 'https://picsum.photos/400/500?random=8' },
    { id: 9, name: 'Pleated Skirt', category: 'Trending', price: '$50', imageUrl: 'https://picsum.photos/400/500?random=9' },
    { id: 10, name: 'Platform Boots', category: 'Trending', price: '$120', imageUrl: 'https://picsum.photos/400/500?random=10' },
];

const generateAvailableDates = (): string[] => {
    const dates: string[] = [];
    const today = new Date();
    // Add some random available dates in the next 60 days
    for (let i = 0; i < 60; i++) {
        if (Math.random() > 0.4) { // 60% chance of being available
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    return dates;
};

export const beauticians: Beautician[] = [
    { id: 1, name: 'Jessica Smith', specialty: 'Hair Styling', imageUrl: 'https://picsum.photos/100/100?random=31', availableDates: generateAvailableDates(), rating: 4.9, reviews: 120 },
    { id: 2, name: 'Emily White', specialty: 'Makeup Artistry', imageUrl: 'https://picsum.photos/100/100?random=32', availableDates: generateAvailableDates(), rating: 5.0, reviews: 98 },
    { id: 3, name: 'Olivia Green', specialty: 'Nail Art', imageUrl: 'https://picsum.photos/100/100?random=33', availableDates: generateAvailableDates(), rating: 4.8, reviews: 215 },
    { id: 4, name: 'Chloe Brown', specialty: 'Spa Treatments', imageUrl: 'https://picsum.photos/100/100?random=34', availableDates: generateAvailableDates(), rating: 4.9, reviews: 75 },
    { id: 5, name: 'Sophia Miller', specialty: 'All-rounder', imageUrl: 'https://picsum.photos/100/100?random=35', availableDates: generateAvailableDates(), rating: 5.0, reviews: 150 },
];

export const topSalons: Salon[] = [
  { id: 1, name: 'Glamour Lounge', rating: 4.9, reviews: 245, location: 'New York, NY', imageUrl: 'https://picsum.photos/400/300?random=11', beauticians: [beauticians[0], beauticians[1]] },
  { id: 2, name: 'The Style Studio', rating: 4.8, reviews: 189, location: 'Los Angeles, CA', imageUrl: 'https://picsum.photos/400/300?random=12', beauticians: [beauticians[2], beauticians[4]] },
  { id: 3, name: 'Elegance Hair & Spa', rating: 5.0, reviews: 310, location: 'Chicago, IL', imageUrl: 'https://picsum.photos/400/300?random=13', beauticians: [beauticians[1], beauticians[3], beauticians[4]] },
  { id: 4, name: 'Nail Nirvana', rating: 4.7, reviews: 150, location: 'Miami, FL', imageUrl: 'https://picsum.photos/400/300?random=14', beauticians: [beauticians[2]] },
];

export const salonServices: Service[] = [
  { name: 'Hair Styling', icon: ScissorsIcon },
  { name: 'Makeup', icon: PaintBrushIcon },
  { name: 'Nails', icon: SparklesIcon },
  { name: 'Spa Treatment', icon: HeartIcon },
];

export const availableTimeSlots: string[] = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export const videos: Video[] = [
    { id: 1, user: '@stylemaven', description: 'My top 5 streetwear looks for this season! #fashion #streetwear', videoUrl: 'https://videos.pexels.com/video-files/854728/854728-hd.mp4', avatarUrl: 'https://picsum.photos/100/100?random=21' },
    { id: 2, user: '@glowupguru', description: 'Trying the viral makeup hack ✨ #makeup #beauty', videoUrl: 'https://videos.pexels.com/video-files/855799/855799-hd.mp4', avatarUrl: 'https://picsum.photos/100/100?random=22' },
    { id: 3, user: '@denimdreamer', description: 'How to style cargo pants 👖 #ootd #stylehacks', videoUrl: 'https://videos.pexels.com/video-files/4902970/4902970-hd.mp4', avatarUrl: 'https://picsum.photos/100/100?random=23' },
    { id: 4, user: '@vintagewaves', description: 'Come thrift with me! 🛍️ #vintage #thrifting', videoUrl: 'https://videos.pexels.com/video-files/5586629/5586-629-hd.mp4', avatarUrl: 'https://picsum.photos/100/100?random=24' },
];