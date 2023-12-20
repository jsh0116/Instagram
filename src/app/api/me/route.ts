import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getUserByUsername} from "@/services/UserService";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return NextResponse.json({ message: 'Authentication error' }, { status: 401 });
  }
  return getUserByUsername(user.username).then((data) => NextResponse.json(data[0]));
}
