import { IResCategory } from "./category.model"

export interface IResProduc {
  id: number,
  name: string,
  description: string
  category:IResCategory
  price: number
}

export interface IReqProduc {
  name: string,
  description: string
  category_id: number
  price: number
}