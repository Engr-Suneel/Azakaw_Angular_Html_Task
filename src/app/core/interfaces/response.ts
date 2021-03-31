import { IPageable, ISort } from "./common";

export interface IGetPagedResponse {
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: IPageable;
  size?: number;
  sort?: ISort;
  totalElements?: number;
  totalPages?: number;
}

export interface IReponse<T> {
  success?: boolean,
  message?: string,
  data?: T
}

export interface IError {
  status?: number,
  title?: string,
  message?: string,
  error?: any
}

export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  email?: string;
}

export interface IPosts {
  userId?: number,
  id?: number,
  title?: string,
  body?: string
}

export interface IUsers {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: IAddress,
  phone?: string,
  website?: string,
  company?: ICompany
}

export interface IAddress {
  street?: string
  suite?: string
  city?: string
  zipcode?: string
  geo?: IGeo 
}

export interface IGeo {
  lat?: string,
  lng?: string
}

export interface ICompany {
  name?: string,
  catchPhrase?: string,
  bs?: string 
}