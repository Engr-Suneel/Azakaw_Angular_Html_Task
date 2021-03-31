import { IUser } from "../interfaces/response";

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  email: string;

  constructor(data: IUser = null) {
		this.id = data?.id;
		this.username = data?.username;
		this.password = data?.password;
		this.firstName = data?.firstName;
		this.lastName = data?.lastName;
		this.token = data?.token;
		this.email = data?.email;
  }
}
