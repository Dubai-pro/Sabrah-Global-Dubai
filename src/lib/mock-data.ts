// BR-UAE Trade Hub - Mock Data for Demonstration

import { Product, RFQ, Offer, Deal, User, Price } from './types'

// Brazil-UAE commodity products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Sugar ICUMSA 45',
    category: 'Sugar & Sweeteners',
    unit: 'MT',
    packaging: '50kg PP bags',
    specs: 'ICUMSA 45, Polarization min 99.80%, Moisture max 0.04%',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e02ce8a3-5deb-4fa2-beb9-a820d66c648a.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Brazilian Arabica Coffee',
    category: 'Coffee & Beverages',
    unit: 'MT',
    packaging: '60kg Jute bags',
    specs: 'Santos NY2/3 Screen 17/18, Moisture max 12%',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b0409ba6-7384-4083-b7f4-cfab83a7b856.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '3',
    name: 'Long Grain White Rice',
    category: 'Rice & Grains',
    unit: 'MT',
    packaging: '25kg PP bags',
    specs: 'Long grain, broken max 5%, moisture max 14%',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/8cddd32c-f584-4165-be44-00ae8ace731e.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '4',
    name: 'Frozen Chicken Halal',
    category: 'Meat & Poultry',
    unit: 'MT',
    packaging: '15kg cartons',
    specs: 'Whole chicken, Halal certified, Grade A',
    halal_required: true,
    image_url: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '5',
    name: 'Soybean',
    category: 'Soybeans & Oils',
    unit: 'MT',
    packaging: '20L containers',
    specs: 'Refined, bleached, deodorized',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/af0a1151-f2ad-4c0c-aa3f-35ebcf3664e3.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '6',
    name: 'Natural Mineral Water',
    category: 'Water & Beverages',
    unit: 'MT',
    packaging: '500ml PET bottles',
    specs: 'Natural spring water from Amazon rainforest, pH 7.2-7.8',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/53f09b61-ffda-4b48-b4b3-b462e12a0fff.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '7',
    name: 'Premium Beef Halal',
    category: 'Meat & Poultry',
    unit: 'MT',
    packaging: '20kg vacuum sealed',
    specs: 'Premium cuts, Halal certified, Grade AAA, aged 21 days',
    halal_required: true,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/24835e98-720e-4c25-8607-93e3272cfdfa.webp',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '8',
    name: 'Pure Honey',
    category: 'Natural Products',
    unit: 'MT',
    packaging: '500g glass jars',
    specs: 'Pure wildflower honey, moisture max 18%, no additives',
    halal_required: false,
    image_url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '9',
    name: 'Yellow Corn',
    category: 'Rice & Grains',
    unit: 'MT',
    packaging: '50kg PP bags',
    specs: 'Grade 2, moisture max 14%, protein min 8%',
    halal_required: false,
    image_url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '10',
    name: 'Brazilian Açaí',
    category: 'Natural Products',
    unit: 'MT',
    packaging: '10kg frozen packs',
    specs: 'Premium grade açaí pulp, frozen at -18°C, no additives',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/57284837-d564-4e0a-a179-c37fb1740478.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '11',
    name: 'Wheat Flour',
    category: 'Rice & Grains',
    unit: 'MT',
    packaging: '25kg PP bags',
    specs: 'All-purpose wheat flour, protein 10-12%, moisture max 14%',
    halal_required: false,
    image_url: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d54cbdb7-751d-475b-94c4-603c62757ac0.jpg',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '12',
    name: 'Industrial Products',
    category: 'Processed Foods',
    unit: 'MT',
    packaging: 'Mixed packaging',
    specs: 'Variety of processed foods including canned goods, sauces, and beverages',
    halal_required: false,
    image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    created_at: '2024-01-15T10:00:00Z'
  }
]

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ahmed Al Mansouri',
    role: 'buyer',
    company: 'Dubai Trading LLC',
    country: 'UAE',
    email: 'ahmed@dubaitrading.ae',
    phone: '+971-50-123-4567',
    whatsapp_verified: true,
    created_at: '2024-01-10T08:00:00Z'
  },
  {
    id: '2',
    name: 'Carlos Silva',
    role: 'seller',
    company: 'Brasil Export SA',
    country: 'Brazil',
    email: 'carlos@brasilexport.com.br',
    phone: '+55-11-98765-4321',
    whatsapp_verified: true,
    created_at: '2024-01-12T09:00:00Z'
  },
  {
    id: '3',
    name: 'Fatima Hassan',
    role: 'buyer',
    company: 'Abu Dhabi Foods',
    country: 'UAE',
    email: 'fatima@adfoods.ae',
    phone: '+971-52-987-6543',
    whatsapp_verified: true,
    created_at: '2024-01-14T11:00:00Z'
  }
]

// Mock base prices
export const mockPrices: Price[] = [
  {
    id: '1',
    product_id: '1',
    base_price_usd_per_unit: 420,
    min_order_qty: 1000,
    incoterm: 'FOB',
    port_origin: 'Santos (SP)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    product_id: '2',
    base_price_usd_per_unit: 3200,
    min_order_qty: 100,
    incoterm: 'FOB',
    port_origin: 'Santos (SP)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '3',
    product_id: '3',
    base_price_usd_per_unit: 580,
    min_order_qty: 500,
    incoterm: 'CIF',
    port_origin: 'Rio Grande (RS)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '7',
    product_id: '7',
    base_price_usd_per_unit: 6800,
    min_order_qty: 50,
    incoterm: 'CIF',
    port_origin: 'Santos (SP)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '8',
    product_id: '8',
    base_price_usd_per_unit: 4200,
    min_order_qty: 10,
    incoterm: 'FOB',
    port_origin: 'Santos (SP)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '9',
    product_id: '9',
    base_price_usd_per_unit: 280,
    min_order_qty: 1000,
    incoterm: 'FOB',
    port_origin: 'Paranaguá (PR)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '10',
    product_id: '10',
    base_price_usd_per_unit: 2800,
    min_order_qty: 50,
    incoterm: 'FOB',
    port_origin: 'Belém (PA)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '11',
    product_id: '11',
    base_price_usd_per_unit: 380,
    min_order_qty: 500,
    incoterm: 'FOB',
    port_origin: 'Paranaguá (PR)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '12',
    product_id: '12',
    base_price_usd_per_unit: 1200,
    min_order_qty: 100,
    incoterm: 'CIF',
    port_origin: 'Santos (SP)',
    port_destination: 'Jebel Ali (Dubai)',
    updated_at: '2024-01-15T10:00:00Z'
  }
]

// Mock RFQs
export const mockRFQs: RFQ[] = [
  {
    id: '1',
    buyer_id: '1',
    product_id: '1',
    qty: 5000,
    incoterm: 'CIF',
    destination_port: 'Jebel Ali (Dubai)',
    payment_method: 'Letter of Credit (LC)',
    status: 'open',
    created_at: '2024-01-16T14:30:00Z',
    product: mockProducts[0],
    buyer: mockUsers[0]
  },
  {
    id: '2',
    buyer_id: '3',
    product_id: '4',
    qty: 2000,
    incoterm: 'FOB',
    destination_port: 'Khalifa Port (Abu Dhabi)',
    payment_method: 'Documentary Collection',
    status: 'quoted',
    created_at: '2024-01-17T09:15:00Z',
    product: mockProducts[3],
    buyer: mockUsers[2]
  }
]

// Mock offers
export const mockOffers: Offer[] = [
  {
    id: '1',
    seller_id: '2',
    rfq_id: '1',
    price: 435,
    lead_time_days: 30,
    docs_list: ['SGS Certificate', 'Certificate of Origin', 'Halal Certificate'],
    validity_date: '2024-02-15T23:59:59Z',
    status: 'pending',
    created_at: '2024-01-17T16:45:00Z',
    seller: mockUsers[1],
    rfq: mockRFQs[0]
  }
]

// Mock deals
export const mockDeals: Deal[] = [
  {
    id: '1',
    buyer_id: '1',
    seller_id: '2',
    product_id: '1',
    qty: 5000,
    price: 435,
    incoterm: 'CIF',
    status: 'ICPO',
    created_at: '2024-01-18T10:00:00Z',
    buyer: mockUsers[0],
    seller: mockUsers[1],
    product: mockProducts[0]
  }
]

// Dashboard statistics
export const mockStats = {
  totalRFQs: 24,
  activeDeals: 8,
  completedDeals: 156,
  totalVolume: 51600, // MT
  averagePrice: 520, // USD per MT
  topProducts: [
    { name: 'Sugar ICUMSA 45', volume: 15600 },
    { name: 'Brazilian Coffee', volume: 8900 },
    { name: 'Frozen Chicken', volume: 7200 },
    { name: 'Soybean', volume: 6800 },
    { name: 'Industrial Products', volume: 3200 },
    { name: 'Brazilian Açaí', volume: 3200 },
    { name: 'Wheat Flour', volume: 2800 }
  ]
}