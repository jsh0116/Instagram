import { User } from '@/models/User';
import {client} from "@/services/Sanity";
export async function addUser({ id, username, email, image, name }: User) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    image,
    name,
    following: [],
    followers: [],
    bookmarks: [],
  });
}
