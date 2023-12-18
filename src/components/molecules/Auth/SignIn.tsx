'use client';
import React from 'react';
import {ClientSafeProvider, signIn} from "next-auth/react";
import {DefaultButton} from "@/components/atoms/Button";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

const SignIn = ({ providers, callbackUrl = '/' }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ id, name}) => {
        return (
          <DefaultButton
            key={name}
            onClick={() => signIn(id, { callbackUrl })}
            size={"big"}
          >
            {`Sign in with ${name}`}
          </DefaultButton>
        );
      })}
    </>
  )
};

export default SignIn;
