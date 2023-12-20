
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FollowingBar, SideBar } from "@/components/molecules/Bar";
import { PostList } from "@/components/organisms/Post";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

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
    <section className="w-full max-w-[880px] flex flex-col md:flex-row">
      <section className="w-full basis-3/4 min-w-0">
        <FollowingBar />
        <PostList />
      </section>
      <SideBar user={user} />
    </section>
  );
}
