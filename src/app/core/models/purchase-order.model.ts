export interface ITransationPurchase {
  purcherOrder: PurcherOrder
  purcherOrderDetail: PurcherOrderDetail
}

export interface PurcherOrder {
  branch: IReqBranch
  user: IReqUser
  vendor: IReqVendor
  order_date: string
  status: string
}

export interface IReqBranch {
  id: number
}

export interface IReqUser {
  id: number
}

export interface IReqVendor {
  id: number
}

export interface PurcherOrderDetail {
  product: IReqProduct
  quantity: number
  price: number
}

export interface IReqProduct {
  id: number
}
/////////////////////////


export interface IPurchaseOrderRoot {
  content: IPurchaseOrder[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  first: boolean
  empty: boolean
}

export interface IPurchaseOrder {
  id: number
  user: User
  branch: Branch
  vendor: any
  order_date: string
  status: string
  detalles: Detalle[]
}

export interface User {
  id: number
  username: string
  password: string
  email: string
  role: string
  status: string
  enabled: boolean
  accountNonExpired: boolean
  credentialsNonExpired: boolean
  accountNonLocked: boolean
  authorities: Authority[]
}

export interface Authority {
  authority: string
}

export interface Branch {
  id: number
  name: string
  address: string
  phone: string
}

export interface Detalle {
  id: number
  product: Product
  quantity: number
  price: string
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: Category
}

export interface Category {
  id: number
  name: string
  description: string
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  unpaged: boolean
  paged: boolean
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface Sort2 {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
