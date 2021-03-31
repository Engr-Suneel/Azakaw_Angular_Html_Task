import { IPosts } from "../interfaces/response";

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string; 
  constructor(data: IPosts = null) {
    this.userId = data?.userId;
    this.id = data?.id;
    this.title = data?.title;
    this.body = data?.body;
  }
}