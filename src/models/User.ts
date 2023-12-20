export interface User {
  username: string;
  email: string;
  name: string;
  image: string;
}

export type SimpleUser = Pick<User, 'username' | 'image'>;

export interface DetailUser extends User {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
}
