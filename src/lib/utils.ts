// Utilitários para BR-UAE Trade Hub

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formatadores de dados
export const formatCurrency = (amount: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export const formatDateTime = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

// Validadores
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

// Calculadores de negócio
export const calculateTotalValue = (price: number, quantity: number) => {
  return price * quantity
}

export const calculateLeadTime = (days: number) => {
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + days)
  return deliveryDate
}

// Status helpers
export const getStatusColor = (status: string) => {
  const statusColors: Record<string, string> = {
    'open': 'bg-green-600',
    'quoted': 'bg-blue-600',
    'negotiating': 'bg-yellow-600',
    'closed': 'bg-gray-600',
    'cancelled': 'bg-red-600',
    'pending': 'bg-yellow-600',
    'accepted': 'bg-green-600',
    'rejected': 'bg-red-600',
    'expired': 'bg-gray-600',
    'LOI': 'bg-blue-600',
    'ICPO': 'bg-indigo-600',
    'SCO': 'bg-purple-600',
    'FCO': 'bg-pink-600',
    'SPA': 'bg-orange-600',
    'SHIPPED': 'bg-green-600',
    'COMPLETED': 'bg-emerald-600',
    'completed': 'bg-green-600',
    'in_progress': 'bg-blue-600',
    'overdue': 'bg-red-600'
  }
  return statusColors[status] || 'bg-gray-600'
}

export const getStatusText = (status: string) => {
  const statusTexts: Record<string, string> = {
    'LOI': 'Letter of Intent',
    'ICPO': 'Irrevocable Corporate Purchase Order',
    'SCO': 'Soft Corporate Offer',
    'FCO': 'Full Corporate Offer',
    'SPA': 'Sales & Purchase Agreement',
    'SHIPPED': 'Goods Shipped',
    'COMPLETED': 'Deal Completed'
  }
  return statusTexts[status] || status.charAt(0).toUpperCase() + status.slice(1)
}

// Geradores de ID
export const generateRFQId = () => {
  return `RFQ-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}

export const generateOfferId = () => {
  return `OFF-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}

export const generateDealId = () => {
  return `DEAL-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}

// Helpers para documentos
export const getDocumentIcon = (docType: string) => {
  const docIcons: Record<string, string> = {
    'LOI': '📄',
    'ICPO': '📋',
    'SCO': '📊',
    'FCO': '📈',
    'SPA': '📝',
    'CO': '🏛️',
    'SGS': '🔍',
    'HALAL': '☪️',
    'BL': '🚢',
    'Invoice': '💰'
  }
  return docIcons[docType] || '📄'
}

export const getDocumentName = (docType: string) => {
  const docNames: Record<string, string> = {
    'LOI': 'Letter of Intent',
    'ICPO': 'Irrevocable Corporate Purchase Order',
    'SCO': 'Soft Corporate Offer',
    'FCO': 'Full Corporate Offer',
    'SPA': 'Sales & Purchase Agreement',
    'CO': 'Certificate of Origin',
    'SGS': 'SGS Inspection Certificate',
    'HALAL': 'Halal Certificate',
    'BL': 'Bill of Lading',
    'Invoice': 'Commercial Invoice'
  }
  return docNames[docType] || docType
}

// Helpers para compliance
export const getComplianceProgress = (dealStatus: string) => {
  const statusOrder = ['LOI', 'ICPO', 'SCO', 'FCO', 'SPA', 'SHIPPED', 'COMPLETED']
  const currentIndex = statusOrder.indexOf(dealStatus)
  return currentIndex >= 0 ? ((currentIndex + 1) / statusOrder.length) * 100 : 0
}

// Helpers para notificações
export const getNotificationMessage = (type: string, data: any) => {
  const messages: Record<string, (data: any) => string> = {
    'new_rfq': (data) => `New RFQ received for ${data.product} - ${data.quantity} MT`,
    'new_offer': (data) => `New offer received: $${data.price}/MT for ${data.product}`,
    'offer_accepted': (data) => `Your offer for ${data.product} has been accepted!`,
    'deal_status_change': (data) => `Deal status updated to ${data.status} for ${data.product}`,
    'document_uploaded': (data) => `New document uploaded: ${data.documentType}`,
    'compliance_due': (data) => `Compliance check due: ${data.step} - Due ${data.dueDate}`
  }
  return messages[type]?.(data) || 'New notification'
}

// Helpers para filtros e busca
export const filterProducts = (products: any[], filters: any) => {
  return products.filter(product => {
    if (filters.category && filters.category !== 'all' && product.category !== filters.category) {
      return false
    }
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !product.specs.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    if (filters.halalOnly && !product.halal_required) {
      return false
    }
    return true
  })
}

export const sortData = (data: any[], sortBy: string, sortOrder: 'asc' | 'desc' = 'asc') => {
  return [...data].sort((a, b) => {
    let aVal = a[sortBy]
    let bVal = b[sortBy]
    
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase()
      bVal = bVal.toLowerCase()
    }
    
    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })
}