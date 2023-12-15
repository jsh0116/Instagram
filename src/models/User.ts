export interface User {
  id: string;
  email: string | null;
  name: string | null;
  username: string;
  image?: string | null;
}
