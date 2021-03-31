import { IAddress, ICompany, IUsers } from "../interfaces/response";

export class Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany; 

  constructor(data: IUsers = null) {
    this.id = data?.id;
    this.name = data?.name;
    this.username = data?.username;
    this.email = data?.email;
    this.address = data?.address;
    this.phone = data?.phone;
    this.website = data?.website;
    this.company = data?.company;
  }
}