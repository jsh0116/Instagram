import React from 'react';
import {RiSearchFill, RiSearchLine} from "react-icons/ri";
import {AiFillHome, AiOutlineHome} from "react-icons/ai";
import {BsPlusSquare, BsPlusSquareFill} from "react-icons/bs";

type TIcon = 'home' | 'search' | 'plus';

interface Props {
  type: TIcon;
  isFill?: boolean;
  className?: string;
}

const Icon = ({ type, isFill, className }: Props) => {
  if (type === 'home') {
    return isFill
      ? <AiFillHome className={`${className} w-7 h-7`}/>
      : <AiOutlineHome className={`${className} w-7 h-7`} />;
  }

  if (type === 'search') {
    return isFill
      ? <RiSearchFill className={`${className} w-7 h-7`}/>
      : <RiSearchLine className={`${className} w-7 h-7`} />;
  }

  if (type === 'plus') {
    return isFill
      ? <BsPlusSquareFill className={`${className} w-7 h-7`}/>
      : <BsPlusSquare className={`${className} w-7 h-7`} />;
  }
};

export default Icon;
