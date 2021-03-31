import { Injectable } from "@angular/core";
import { Utils } from "src/app/helper/utils";
import { IPosts, IUsers } from "../interfaces/response";
import { ApiProvider } from "./api.provider";

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(
    private api: ApiProvider
  ) {

  }

  posts = {
    all: async(url: string) => {
      try {
        return await this.api.get<Array<IPosts>>(Utils.getFullUrl(url));
      } catch (error) {
        throw error;
      }
    },
    get: async () => {

    },
    post: async () => {

    },
    put: async () => {

    },
    patch: async () => {

    },
    delete: async () => {

    }
  }

  users = {
    all: async(url: string) => {
      try {
        return await this.api.get<Array<IUsers>>(Utils.getFullUrl(url));
      } catch (error) {
        throw error;
      }
    },
    get: async () => {

    },
    post: async () => {

    },
    put: async () => {

    },
    patch: async () => {

    },
    delete: async () => {

    }
  }
}