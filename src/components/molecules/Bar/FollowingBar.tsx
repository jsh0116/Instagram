'use client';

import React from 'react';
import useSWR from "swr";
import {DetailUser} from "@/models/User";
import {PropagateLoader} from "react-spinners";
import Link from "next/link";
import {Avatar} from "@/components/atoms/Icon";
import ScrollableBar from "@/components/molecules/Bar/ScrollableBar";


const FollowingBar = () => {
  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity 에서 가지고옴
  // 4. 클라이언트 컴포넌트에서 followings 의 정보를 UI에 보여줌
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  const renderFollowingData = () => {
    if (!users || users.length === 0) {
      return <p>you don't have following</p>;
    }

    return (
      <ScrollableBar>
        {users.map(({ username, image}) => (
          <Link
            key={username}
            className='flex flex-col items-center w-20'
            href={`/user/${username}`}
          >
            <Avatar image={image} size='normal' highlight />
            <p className='w-full text-sm text-center text-ellipsis overflow-auto'>{username}</p>
          </Link>
        ))}
      </ScrollableBar>
    )
  }

  return (
    <section
      className='flex justify-center items-center w-full p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'
    >
      {isLoading ? <PropagateLoader /> : renderFollowingData()}
    </section>
  );
};

export default FollowingBar;
