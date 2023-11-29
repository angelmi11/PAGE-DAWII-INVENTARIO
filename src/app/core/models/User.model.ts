import { Pageable, Sort2, User } from "./purchase-order.model";

export interface IUser {
  id: number;
  name:string
}

export interface IUserRoot {
  content: User[]
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