"use client"

import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Globe, 
  TrendingUp, 
  Users, 
  FileText, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Ship,
  Package,
  ArrowRight,
  Star,
  Shield,
  Zap,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
  Building2,
  Eye,
  Plus
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { mockProducts, mockRFQs, mockOffers, mockDeals, mockStats, mockUsers } from '@/lib/mock-data'
import { INCOTERMS, BRAZILIAN_PORTS, UAE_PORTS, PAYMENT_METHODS, PRODUCT_CATEGORIES } from '@/lib/types'

export default function BRUAETradeHub() {
  const [activeTab, setActiveTab] = useState('catalog')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [userRole, setUserRole] = useState<'buyer' | 'seller' | 'broker' | 'admin'>('buyer')
  const [showRFQForm, setShowRFQForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  // Filtrar produtos
  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.specs.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const RFQForm = () => (
    <Dialog open={showRFQForm} onOpenChange={setShowRFQForm}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Request for Quotation (RFQ)
          </DialogTitle>
          <DialogDescription>
            Get instant quotes from verified Brazilian suppliers
          </DialogDescription>
        </DialogHeader>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="product">Product *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  {mockProducts.map(product => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="quantity">Quantity (MT) *</Label>
              <Input type="number" placeholder="e.g. 1000" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="incoterm">INCOTERM *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select INCOTERM" />
                </SelectTrigger>
                <SelectContent>
                  {INCOTERMS.map(term => (
                    <SelectItem key={term} value={term}>
                      {term}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="destination">Destination Port *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select UAE port" />
                </SelectTrigger>
                <SelectContent>
                  {UAE_PORTS.map(port => (
                    <SelectItem key={port} value={port}>
                      {port}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="payment">Payment Method *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_METHODS.map(method => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="requirements">Special Requirements</Label>
            <Textarea 
              placeholder="Halal certification, specific packaging, delivery timeline, etc."
              rows={3}
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <FileText className="w-4 h-4 mr-2" />
              Submit RFQ
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowRFQForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a2d8d85-9a81-45b6-b209-d6c7f88282a6.jpg" 
                  alt="SABRAH GLOBAL Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SABRAH GLOBAL</h1>
                  <p className="text-xs text-gray-500">Brazil ↔ Emirates Trade Platform</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={userRole} onValueChange={(value: any) => setUserRole(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="broker">Broker</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                onClick={() => setShowRFQForm(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Stats */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fast Quotes, Clear Compliance, Verified Partners
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Connect Brazilian suppliers with UAE buyers for commodities and industrial products
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{mockStats.totalRFQs}</div>
              <div className="text-emerald-100">Active RFQs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{mockStats.completedDeals}</div>
              <div className="text-emerald-100">Completed Deals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{mockStats.totalVolume.toLocaleString()}</div>
              <div className="text-emerald-100">MT Traded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">${mockStats.averagePrice}</div>
              <div className="text-emerald-100">Avg Price/MT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
            <TabsTrigger value="catalog" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Catalog</span>
            </TabsTrigger>
            <TabsTrigger value="rfqs" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">RFQs</span>
            </TabsTrigger>
            <TabsTrigger value="offers" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Offers</span>
            </TabsTrigger>
            <TabsTrigger value="deals" className="flex items-center gap-2">
              <Ship className="w-4 h-4" />
              <span className="hidden sm:inline">Deals</span>
            </TabsTrigger>
            <TabsTrigger value="compliance" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Compliance</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
          </TabsList>

          {/* Catalog Tab */}
          <TabsContent value="catalog" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {PRODUCT_CATEGORIES.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.halal_required && (
                      <Badge className="absolute top-2 right-2 bg-green-600">
                        Halal
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </div>
                      <Badge variant="outline">{product.unit}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Specifications:</p>
                        <p className="text-sm text-gray-800">{product.specs}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Packaging:</p>
                        <p className="text-sm text-gray-800">{product.packaging}</p>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                          onClick={() => {
                            setSelectedProduct(product)
                            setShowRFQForm(true)
                          }}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Request Quote
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* RFQs Tab */}
          <TabsContent value="rfqs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Request for Quotations</h3>
              <Button 
                onClick={() => setShowRFQForm(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                New RFQ
              </Button>
            </div>

            <div className="grid gap-4">
              {mockRFQs.map((rfq) => (
                <Card key={rfq.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{rfq.product?.name}</CardTitle>
                        <CardDescription>
                          {rfq.qty.toLocaleString()} MT • {rfq.incoterm} • {rfq.destination_port}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={rfq.status === 'open' ? 'default' : 'secondary'}
                        className={rfq.status === 'open' ? 'bg-green-600' : ''}
                      >
                        {rfq.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-600">Buyer</p>
                        <p className="text-gray-900">{rfq.buyer?.company}</p>
                        <p className="text-gray-600">{rfq.buyer?.country}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Payment</p>
                        <p className="text-gray-900">{rfq.payment_method}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Created</p>
                        <p className="text-gray-900">
                          {new Date(rfq.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {userRole === 'seller' && (
                        <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-teal-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Submit Offer
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Offers Tab */}
          <TabsContent value="offers" className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Offers & Quotations</h3>

            <div className="grid gap-4">
              {mockOffers.map((offer) => (
                <Card key={offer.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          ${offer.price}/MT • {offer.rfq?.product?.name}
                        </CardTitle>
                        <CardDescription>
                          {offer.rfq?.qty.toLocaleString()} MT • Lead time: {offer.lead_time_days} days
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={offer.status === 'pending' ? 'default' : 'secondary'}
                        className={offer.status === 'pending' ? 'bg-yellow-600' : ''}
                      >
                        {offer.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <p className="font-medium text-gray-600">Seller</p>
                        <p className="text-gray-900">{offer.seller?.company}</p>
                        <p className="text-gray-600">{offer.seller?.country}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Total Value</p>
                        <p className="text-gray-900 text-lg font-bold">
                          ${(offer.price * (offer.rfq?.qty || 0)).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Valid Until</p>
                        <p className="text-gray-900">
                          {new Date(offer.validity_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium text-gray-600 mb-2">Required Documents:</p>
                      <div className="flex flex-wrap gap-2">
                        {offer.docs_list.map((doc, index) => (
                          <Badge key={index} variant="outline">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {userRole === 'buyer' && offer.status === 'pending' && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Accept
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 border-red-600">
                            Decline
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Deals Tab */}
          <TabsContent value="deals" className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Active Deals</h3>

            <div className="grid gap-4">
              {mockDeals.map((deal) => (
                <Card key={deal.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {deal.product?.name} • {deal.qty.toLocaleString()} MT
                        </CardTitle>
                        <CardDescription>
                          ${deal.price}/MT • Total: ${(deal.price * deal.qty).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Badge className="bg-blue-600">
                        {deal.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="font-medium text-gray-600">Buyer</p>
                        <p className="text-gray-900">{deal.buyer?.company}</p>
                        <p className="text-gray-600">{deal.buyer?.country}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Seller</p>
                        <p className="text-gray-900">{deal.seller?.company}</p>
                        <p className="text-gray-600">{deal.seller?.country}</p>
                      </div>
                    </div>

                    {/* Deal Progress */}
                    <div className="mb-4">
                      <p className="font-medium text-gray-600 mb-3">Deal Progress:</p>
                      <div className="flex items-center space-x-2 text-xs">
                        {['LOI', 'ICPO', 'SCO', 'FCO', 'SPA', 'SHIPPED'].map((step, index) => (
                          <div key={step} className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                              step === deal.status ? 'bg-blue-600 text-white' :
                              ['LOI', 'ICPO'].includes(step) ? 'bg-green-600 text-white' :
                              'bg-gray-200 text-gray-600'
                            }`}>
                              {index + 1}
                            </div>
                            <span className={`ml-1 ${step === deal.status ? 'font-bold' : ''}`}>
                              {step}
                            </span>
                            {index < 5 && <ArrowRight className="w-3 h-3 mx-2 text-gray-400" />}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Documents
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Compliance Dashboard</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Brazil Export Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Export License</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Certificate of Origin</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Phytosanitary Certificate</span>
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Commercial Invoice</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    UAE Import Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Import Permit</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Halal Certificate</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ESMA Conformity</span>
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Customs Declaration</span>
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Quality Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SGS Inspection</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Bureau Veritas</span>
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lab Analysis Report</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weight Certificate</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.totalVolume.toLocaleString()} MT</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
                  <Ship className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.activeDeals}</div>
                  <p className="text-xs text-muted-foreground">+2 new this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Price</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${mockStats.averagePrice}/MT</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.5%</div>
                  <p className="text-xs text-muted-foreground">Deal completion rate</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Products by Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStats.topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{product.volume.toLocaleString()} MT</div>
                        <div className="text-sm text-gray-500">
                          {((product.volume / mockStats.totalVolume) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* RFQ Form Dialog */}
      <RFQForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a2d8d85-9a81-45b6-b209-d6c7f88282a6.jpg" 
                  alt="SABRAH GLOBAL Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="text-lg font-bold">SABRAH GLOBAL</h3>
                  <p className="text-sm text-gray-400">General Trading FZE LLC</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Fast quotes, clear compliance, and verified partners for Brazil-UAE trade.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sugar & Sweeteners</li>
                <li>Coffee & Beverages</li>
                <li>Meat & Poultry</li>
                <li>Rice & Grains</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>RFQ Management</li>
                <li>Compliance Tracking</li>
                <li>Document Verification</li>
                <li>Secure Messaging</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>CONTACT@SABRAHGLOBAL.COM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 50 356 3169</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 SABRAH GLOBAL GENERAL TRADING FZE LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}