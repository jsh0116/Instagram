
import {getServerSession} from "next-auth";
import { redirect } from "next/navigation";
import FollowingBar from "@/components/molecules/FollowingBar";
import {PostList} from "@/components/organisms/Post";
import SideBar from "@/components/molecules/Aside/SideBar";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "@/models/User";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (!user) {
    redirect('/auth/signin');
  }
  return (
    <main className="w-full max-w-[880px] flex flex-col md:flex-row">
      <section className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </section>
      <SideBar user={user} />
    </main>

  );
}
