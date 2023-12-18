import { User } from '@/models/User';
import {client} from "@/services/Sanity";

interface OAuthUser extends User {
  id: string;
}

export async function addUser({ id, username, email, image, name }: OAuthUser) {
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
