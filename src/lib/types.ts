// BR-UAE Trade Hub - Tipos de Dados

export type UserRole = 'buyer' | 'seller' | 'broker' | 'admin'

export interface User {
  id: string
  name: string
  role: UserRole
  company: string
  country: string
  email: string
  phone: string
  whatsapp_verified: boolean
  created_at: string
}

export interface Product {
  id: string
  name: string
  category: string
  unit: 'MT' | 'kg'
  packaging: string
  specs: string
  halal_required: boolean
  image_url?: string
  created_at: string
}

export interface Price {
  id: string
  product_id: string
  base_price_usd_per_unit: number
  min_order_qty: number
  incoterm: string
  port_origin: string
  port_destination: string
  updated_at: string
}

export type RFQStatus = 'open' | 'quoted' | 'negotiating' | 'closed' | 'cancelled'

export interface RFQ {
  id: string
  buyer_id: string
  product_id: string
  qty: number
  incoterm: string
  destination_port: string
  payment_method: string
  status: RFQStatus
  created_at: string
  product?: Product
  buyer?: User
}

export type OfferStatus = 'pending' | 'accepted' | 'rejected' | 'expired'

export interface Offer {
  id: string
  seller_id: string
  rfq_id: string
  price: number
  lead_time_days: number
  docs_list: string[]
  validity_date: string
  status: OfferStatus
  created_at: string
  seller?: User
  rfq?: RFQ
}

export type DealStatus = 'LOI' | 'ICPO' | 'SCO' | 'FCO' | 'SPA' | 'SHIPPED' | 'COMPLETED'

export interface Deal {
  id: string
  buyer_id: string
  seller_id: string
  product_id: string
  qty: number
  price: number
  incoterm: string
  contract_doc_url?: string
  status: DealStatus
  created_at: string
  buyer?: User
  seller?: User
  product?: Product
}

export type DocumentType = 'LOI' | 'ICPO' | 'SCO' | 'FCO' | 'SPA' | 'CO' | 'SGS' | 'HALAL' | 'BL' | 'Invoice'

export interface Document {
  id: string
  deal_id: string
  type: DocumentType
  file_url: string
  verified: boolean
  uploaded_at: string
}

export type ComplianceStatus = 'pending' | 'in_progress' | 'completed' | 'overdue'

export interface ComplianceCheck {
  id: string
  deal_id: string
  step: string
  owner: string
  due_date: string
  status: ComplianceStatus
  created_at: string
}

// Dados para filtros e seleções
export const INCOTERMS = ['FOB', 'CIF', 'CFR', 'EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP']

export const BRAZILIAN_PORTS = [
  'Santos (SP)',
  'Rio de Janeiro (RJ)', 
  'Paranaguá (PR)',
  'Itaguaí (RJ)',
  'São Francisco do Sul (SC)',
  'Rio Grande (RS)',
  'Vitória (ES)',
  'Salvador (BA)',
  'Fortaleza (CE)',
  'Suape (PE)'
]

export const UAE_PORTS = [
  'Jebel Ali (Dubai)',
  'Port Rashid (Dubai)',
  'Khalifa Port (Abu Dhabi)',
  'Fujairah Port',
  'Sharjah Port',
  'Ras Al Khaimah Port'
]

export const PAYMENT_METHODS = [
  'Letter of Credit (LC)',
  'Documentary Collection',
  'Bank Transfer (T/T)',
  'Cash Against Documents (CAD)',
  'Open Account'
]

export const PRODUCT_CATEGORIES = [
  'Sugar & Sweeteners',
  'Rice & Grains',
  'Coffee & Beverages',
  'Meat & Poultry',
  'Soybeans & Oils',
  'Water & Beverages',
  'Natural Products',
  'Processed Foods',
  'Industrial Products'
]