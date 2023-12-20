'use client';

import React from "react";
import {SWRConfig} from "swr";

interface Props {
  children: React.ReactNode;
}

const AuthContext = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json())
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default AuthContext;
