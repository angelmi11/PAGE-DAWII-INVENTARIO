import { Pageable, Sort2 } from "./purchase-order.model"

export interface IVendor {
  id: number,
  name: string,
  phone: string,
  address: string
}

export interface IVendorRoot {
  content: IVendor[]
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
