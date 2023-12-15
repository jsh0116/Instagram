import React from 'react';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {getProviders} from "next-auth/react";
import SignIn from "@/components/molecules/Auth/SignIn";

interface Props {
  searchParams: {
    callbackUrl: string;
  }
}

const SignInPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    redirect('/');
  }

  const providers = await getProviders();

  if (!providers) {
    return null;
  }

  return (
    <section className={'flex justify-center mt-24'}>
      <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>

  )
};

export default SignInPage;
