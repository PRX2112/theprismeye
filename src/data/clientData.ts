import {
    Award, Camera, Users, Star,
    Heart, User, Calendar, Package,
    Phone, Mail, MapPin, Clock
} from 'lucide-react';

export const GALLERY_PASSWORD = import.meta.env.VITE_GALLERY_PASSWORD || 'client2024';

// --- Hero & Home ---
export const heroImages = [
    {
        url: '/images/cs/1.jpg',
        title: 'Wedding Photography',
        subtitle: 'Capturing your most precious moments',
        alt: 'Bride and groom sharing a romantic moment'
    },
    {
        url: '/images/cs/2.jpg',
        title: 'Portrait Sessions',
        subtitle: 'Professional headshots and lifestyle portraits',
        alt: 'Portrait of a woman with soft lighting'
    },
    {
        url: '/images/cs/3.jpg',
        title: 'Event Photography',
        subtitle: 'Corporate events and celebrations',
        alt: 'People celebrating at a corporate event'
    },
    {
        url: '/images/cs/4.jpg',
        title: 'Product Photography',
        subtitle: 'Corporate events and celebrations',
        alt: 'People celebrating at a corporate event'
    }
];

export const portfolioPreviewImages = [
    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1024961/pexels-photo-1024961.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
];

// --- About Page ---
export const achievements = [
    { icon: Award, title: 'Best Wedding Photographer 2023', description: 'Regional Photography Awards' },
    { icon: Camera, title: '15+ Years Experience', description: 'Professional Photography' },
    { icon: Users, title: '500+ Happy Clients', description: 'Satisfied Customers' },
    { icon: Star, title: '5-Star Rating', description: 'Google Reviews' }
];

export const testimonials = [
    {
        name: 'Sarah & Michael',
        event: 'Wedding Photography',
        text: 'The Prism Eye captured our wedding day perfectly! Every moment was beautifully documented, and we couldn\'t be happier with the results.',
        rating: 5
    },
    {
        name: 'Jennifer Collins',
        event: 'Portrait Session',
        text: 'Professional, creative, and so easy to work with. The headshots exceeded my expectations and really helped boost my professional image.',
        rating: 5
    },
    {
        name: 'Tech Corp Inc.',
        event: 'Corporate Event',
        text: 'Outstanding work at our annual conference. The team was professional, unobtrusive, and delivered exceptional photos that captured the energy of our event.',
        rating: 5
    }
];

// --- Services Page ---
export const serviceData = {
    wedding: {
        icon: Heart,
        title: "Wedding Photography",
        description: "Complete wedding day coverage with professional editing and delivery",
        packages: [
            {
                name: "Essential",
                price: "Starting at $1,999",
                duration: "6 hours coverage",
                features: [
                    "1 Professional Photographer",
                    "6 hours of coverage (any one event: wedding OR reception)",
                    "250+ edited high-resolution images",
                    "Professional color correction & retouching",
                    "Online gallery for easy sharing with family",
                    "Delivery in 3 weeks",
                ],
            },
            {
                name: "Premium",
                price: "Starting at ₹1,25,000",
                duration: "8–10 hours coverage",
                features: [
                    "1 Professional Photographer + 1 Assistant",
                    "8–10 hours of coverage (wedding + one pre-wedding event e.g. mehndi/sangeet)",
                    "500+ edited high-resolution images",
                    "Premium editing & retouching",
                    "Online gallery + USB drive with all images",
                    "USB drive with all photos",
                    "Delivery in 2 weeks",
                    "Complimentary Pre-Wedding Shoot",
                ],
            },
            {
                name: "Luxury",
                price: "Starting at ₹2,25,000",
                duration: "Full day coverage",
                features: [
                    "2 Professional Photographers + Dedicated Team",
                    "Full-day coverage (10+ hours / multiple events same day)",
                    "800+ edited high-resolution images",
                    "Premium cinematic edits + artistic retouching",
                    "Online gallery + USB drive",
                    "USB drive + premium photo album",
                    "Delivery in 7 days",
                    "Complimentary Pre-Wedding + Bridal Portrait Session",
                    "Same-day sneak peeks for social media",
                ],
            },
        ],
    },
    portrait: {
        icon: User,
        title: "Portrait Photography",
        description: "Professional headshots, family portraits, and personal branding sessions",
        packages: [
            {
                name: "Headshots",
                price: "Starting at ₹8,000",
                duration: "1 hour session",
                features: [
                    "Professional studio lighting",
                    "1 hour session",
                    "3 outfit changes",
                    "20+ high-resolution images",
                    "Retouched & professionally edited photos",
                    "Private online gallery for downloads",
                    "Delivery within 7 days",
                ],
            },
            {
                name: "Family Portrait",
                price: "Starting at ₹15,000",
                duration: "2 hour session",
                features: [
                    "Indoor studio or outdoor location of choice",
                    "2 hour session",
                    "Up to 6 family members (₹1,000 per extra member)",
                    "50+ high-resolution images",
                    "Professional retouching & edits",
                    "Online gallery + print release",
                    "Option to add premium photo album",
                ],
            },
            {
                name: "Lifestyle Session",
                price: "Starting at ₹25,000",
                duration: "3 hour session",
                features: [
                    "Multiple locations (indoor + outdoor)",
                    "3 hour session",
                    "Unlimited outfit changes",
                    "100+ high-resolution images",
                    "Premium fashion-style editing",
                    "Online gallery for downloads",
                    "Personal branding consultation included",
                ],
            },
        ],
    },
    event: {
        icon: Calendar,
        title: "Event Photography",
        description: "Corporate events, celebrations, and special occasions coverage",
        packages: [
            {
                name: "Corporate Basic",
                price: "Starting at ₹25,000",
                duration: "4 hours coverage",
                features: [
                    "1 Professional event photographer",
                    "4 hours of coverage",
                    "200+ high-resolution images",
                    "Professional editing & color correction",
                    "Online gallery with easy download links",
                    "Delivery within 5 days",
                    "Usage rights included (corporate & personal use)",
                ],
            },
            {
                name: "Full Event",
                price: "Starting at ₹40,000",
                duration: "8 hours coverage",
                features: [
                    "1 Professional event photographer + 1 assistant",
                    "8 hours of coverage",
                    "400+ high-resolution images",
                    "Professional editing & retouching",
                    "Private online gallery",
                    "Same-day preview highlights (10–15 images)",
                    "Commercial usage rights",
                ],
            },
            {
                name: "Premium Event",
                price: "Starting at ₹75,000",
                duration: "Full day coverage",
                features: [
                    "2 Professional photographers",
                    "10+ hours of coverage",
                    "600+ high-resolution images",
                    "Premium retouching & edits",
                    "Online gallery + USB drive",
                    "Same-day selected highlights for social media",
                    "Short highlight video (3–5 mins) included",
                    "Full commercial rights",
                ],
            },
        ],
    },
    product: {
        icon: Package,
        title: "Product Photography",
        description: "High-quality product images for e-commerce and marketing",
        packages: [
            {
                name: "Basic Product",
                price: "Starting at ₹5,000",
                duration: "Per product",
                features: [
                    "White background catalog shots (Amazon/Flipkart ready)",
                    "5 professional angles per product",
                    "High-resolution images (web + print)",
                    "Professional lighting setup",
                    "Basic editing & color correction",
                    "Delivery within 3 days",
                ],
            },
            {
                name: "Lifestyle Product",
                price: "Starting at ₹12,000",
                duration: "Per product",
                features: [
                    "Styled lifestyle or contextual shots",
                    "Up to 10 images per product",
                    "Creative set design with props",
                    "High-resolution images (marketing ready)",
                    "Professional editing & retouching",
                    "Online gallery for easy access",
                    "Delivery within 7 days",
                ],
            },
            {
                name: "Complete Package",
                price: "Starting at ₹25,000",
                duration: "Up to 5 products",
                features: [
                    "Both white background + lifestyle shots",
                    "15 images per product",
                    "Professional styling & creative direction",
                    "High-resolution images (social media + ads)",
                    "Premium retouching & color grading",
                    "Full commercial usage rights included",
                    "Delivery within 7 days",
                ],
            },
        ],
    },
};

export const faqs = [
    {
        question: "How far in advance should I book?",
        answer: "For weddings, we recommend booking at least 6-9 months in advance, especially during peak wedding season (Nov–Feb). For portraits, products, and events, 2-4 weeks in advance is usually sufficient.",
    },
    {
        question: "What's included in the editing process?",
        answer: "Our professional editing includes color correction, exposure adjustment, skin tone balancing, cropping, and artistic enhancement while keeping the look natural and flattering.",
    },
    {
        question: "Do you provide raw/unedited photos?",
        answer: "We deliver high-resolution professionally edited images. RAW/unedited files are usually not provided, but can be available on request at an additional cost.",
    },
    {
        question: "What happens if weather affects outdoor shoots?",
        answer: "We always keep backup plans. If weather affects your shoot, we can reschedule at no extra cost or suggest suitable indoor/studio locations.",
    },
    {
        question: "How are the photos delivered?",
        answer: "Photos are delivered via a private online gallery, with options for USB drive and premium printed photo albums on request.",
    },
    {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment options. A 30% booking amount is required to secure your date, 50% is due during the event/shoot, and the remaining balance before delivery.",
    },
    {
        question: "Do you travel outside Surat/Gujarat?",
        answer: "Yes, we regularly cover weddings and events across India. Travel and accommodation costs are additional and will be discussed during booking.",
    },
    {
        question: "Are albums and prints included?",
        answer: "Select packages include premium handcrafted photo albums. Additional albums and framed prints can be ordered separately.",
    },
    {
        question: "Is GST applicable?",
        answer: "Yes, as per Indian regulations, 18% GST is applicable on all professional photography services and invoices.",
    },
];

// --- Portfolio Page ---
export const portfolioCategories = ['all', 'weddings', 'portraits', 'events', 'products'];

export const portfolioItems = [
    { id: 1, category: 'weddings', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Beach Wedding Ceremony' },
    { id: 2, category: 'portraits', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Professional Headshot' },
    { id: 3, category: 'weddings', image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Wedding Reception' },
    { id: 4, category: 'events', image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Corporate Event' },
    { id: 5, category: 'portraits', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Family Portrait' },
    { id: 6, category: 'weddings', image: 'https://images.pexels.com/photos/1024961/pexels-photo-1024961.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Bridal Session' },
    { id: 7, category: 'products', image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Product Photography' },
    { id: 8, category: 'events', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Birthday Celebration' },
    { id: 9, category: 'portraits', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Senior Portrait' },
];

export const sampleImages = portfolioItems.map(item => item.image);

// --- Contact Page ---
export const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: '+91 7622890379',
        action: 'tel:+917622890379'
    },
    {
        icon: Mail,
        title: 'Email',
        details: 'theprismeye@gmail.com',
        action: 'mailto:theprismeye@gmail.com'
    },
    {
        icon: MapPin,
        title: 'Studio Address',
        details: 'Surat, Gujarat 394120',
        action: 'https://www.google.com/maps/place/Rudra+Digital+Studio/@21.4517675,72.9453442,17z/data=!3m1!4b1!4m6!3m5!1s0x3be03be85b04031d:0xa9765c95ad966d62!8m2!3d21.4517625!4d72.9479191!16s%2Fg%2F11gmfydhzy?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        icon: Clock,
        title: 'Hours',
        details: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: By Appointment',
        action: '#'
    }
];
