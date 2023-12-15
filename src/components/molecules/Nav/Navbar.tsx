'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {signIn, signOut, useSession} from "next-auth/react";
import {Avatar, Icon} from "@/components/atoms/Icon";
import { DefaultButton } from "@/components/atoms/Button";

const menu = [
  {
    href: '/',
    icon: <Icon type='home' className={'justify-center'} />,
    clickedIcon: <Icon type='home' isFill />,
  },
  {
    href: '/search',
    icon: <Icon type='search' />,
    clickedIcon: <Icon type='search' isFill />,
  },
  {
    href: '/new',
    icon: <Icon type='plus' />,
    clickedIcon: <Icon type='plus' isFill />,
  }
]

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  const handleClickSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    session ? signOut() : signIn();
  }

  return (
    <div className='flex justify-between items-center p-1'>
      <Link href='/'>
        <h1 className="text-2xl font-bold p-4">Instagram</h1>
      </Link>
      <nav className='flex flex-row justify-center gap-3.5'>
        <ul className='flex gap-3.5 items-center'>
          {menu.map((item) => {
            const { href, icon, clickedIcon } = item;
            return (
              <li key={href}>
                <Link href={href}>
                  {pathname === href ? clickedIcon : icon}
                </Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image}/>
              </Link>
            </li>
          )}
        </ul>
        <DefaultButton
          name='Sign In'
          onClick={handleClickSignIn}
        >
          {session ? 'Sign Out' : 'Sign In'}
        </DefaultButton>
      </nav>
    </div>
  );
};

export default Navbar;
