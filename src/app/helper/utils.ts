import { IUser } from "../core/interfaces/response";
import { Constants } from "./constants";

export class Utils {
  constructor() {}

  static getDefaultUser(): IUser {
    return {
      id: 1,
      email: "test@gmail.com",
      firstName: "John",
      lastName: "Doe",
      username: Constants.USERNAME,
      password: Constants.PASSWORD,
      token: 'ertyuiiughj-jhghjhgfghbgh-nhhhj',
    }
  }

  static getFullUrl(url): string {
    return `${Constants.API_BASE_URL}${url}`;
  }
}