// Hooks customizados para BR-UAE Trade Hub

import { useState, useEffect, useCallback } from 'react'

// Hook para gerenciar estado de filtros
export const useFilters = (initialFilters: any = {}) => {
  const [filters, setFilters] = useState(initialFilters)
  
  const updateFilter = useCallback((key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }))
  }, [])
  
  const resetFilters = useCallback(() => {
    setFilters(initialFilters)
  }, [initialFilters])
  
  return { filters, updateFilter, resetFilters }
}

// Hook para gerenciar paginação
export const usePagination = (data: any[], itemsPerPage: number = 10) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)
  
  const goToPage = useCallback((page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }, [totalPages])
  
  const nextPage = useCallback(() => {
    goToPage(currentPage + 1)
  }, [currentPage, goToPage])
  
  const prevPage = useCallback(() => {
    goToPage(currentPage - 1)
  }, [currentPage, goToPage])
  
  return {
    currentPage,
    totalPages,
    currentData,
    goToPage,
    nextPage,
    prevPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  }
}

// Hook para gerenciar ordenação
export const useSorting = (initialSort: { key: string; order: 'asc' | 'desc' } = { key: '', order: 'asc' }) => {
  const [sort, setSort] = useState(initialSort)
  
  const updateSort = useCallback((key: string) => {
    setSort(prev => ({
      key,
      order: prev.key === key && prev.order === 'asc' ? 'desc' : 'asc'
    }))
  }, [])
  
  return { sort, updateSort }
}

// Hook para debounce (útil para busca)
export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return debouncedValue
}

// Hook para gerenciar estado de loading
export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialState)
  
  const startLoading = useCallback(() => setIsLoading(true), [])
  const stopLoading = useCallback(() => setIsLoading(false), [])
  const toggleLoading = useCallback(() => setIsLoading(prev => !prev), [])
  
  return { isLoading, startLoading, stopLoading, toggleLoading }
}

// Hook para gerenciar modals/dialogs
export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState)
  
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])
  const toggleModal = useCallback(() => setIsOpen(prev => !prev), [])
  
  return { isOpen, openModal, closeModal, toggleModal }
}

// Hook para gerenciar seleção múltipla
export const useSelection = <T extends { id: string }>(items: T[] = []) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  
  const selectItem = useCallback((id: string) => {
    setSelectedIds(prev => new Set([...prev, id]))
  }, [])
  
  const deselectItem = useCallback((id: string) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }, [])
  
  const toggleItem = useCallback((id: string) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }, [])
  
  const selectAll = useCallback(() => {
    setSelectedIds(new Set(items.map(item => item.id)))
  }, [items])
  
  const deselectAll = useCallback(() => {
    setSelectedIds(new Set())
  }, [])
  
  const selectedItems = items.filter(item => selectedIds.has(item.id))
  const isSelected = (id: string) => selectedIds.has(id)
  const isAllSelected = items.length > 0 && selectedIds.size === items.length
  const isPartiallySelected = selectedIds.size > 0 && selectedIds.size < items.length
  
  return {
    selectedIds,
    selectedItems,
    selectItem,
    deselectItem,
    toggleItem,
    selectAll,
    deselectAll,
    isSelected,
    isAllSelected,
    isPartiallySelected,
    selectedCount: selectedIds.size
  }
}

// Hook para gerenciar notificações
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<any[]>([])
  
  const addNotification = useCallback((notification: any) => {
    const id = Date.now().toString()
    const newNotification = { ...notification, id, timestamp: new Date() }
    setNotifications(prev => [newNotification, ...prev])
    
    // Auto remove após 5 segundos se não for persistente
    if (!notification.persistent) {
      setTimeout(() => {
        removeNotification(id)
      }, 5000)
    }
  }, [])
  
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }, [])
  
  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])
  
  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    unreadCount: notifications.filter(n => !n.read).length
  }
}

// Hook para localStorage
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
      return initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })
  
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])
  
  return [storedValue, setValue] as const
}

// Hook para gerenciar formulários
export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  
  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))
    // Limpar erro quando campo é modificado
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])
  
  const setError = useCallback((name: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }))
  }, [])
  
  const setTouched = useCallback((name: keyof T, isTouched: boolean = true) => {
    setTouched(prev => ({ ...prev, [name]: isTouched }))
  }, [])
  
  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])
  
  const isValid = Object.keys(errors).length === 0
  const isDirty = JSON.stringify(values) !== JSON.stringify(initialValues)
  
  return {
    values,
    errors,
    touched,
    setValue,
    setError,
    setTouched,
    reset,
    isValid,
    isDirty
  }
}