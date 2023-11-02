'use client';

import React from 'react';
import Link from "next/link";
import Icon from "@/components/atoms/Icon";
import {usePathname} from "next/navigation";
import Button from "@/components/atoms/Button";

const menu = [
  {
    href: '/',
    icon: <Icon type='home' />,
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

  const handleClickSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  return (
    <div className='flex justify-between items-center p-1'>
      <Link href='/'>
        <h1 className="text-2xl font-bold p-4">Instagram</h1>
      </Link>
      <nav className='flex flex-row justify-center items-center gap-3.5'>
        <ul className='flex gap-3.5'>
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
        </ul>
        <Button name='Sign In' className='rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-1' onClick={handleClickSignIn}>
          {'Sign In'}
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
