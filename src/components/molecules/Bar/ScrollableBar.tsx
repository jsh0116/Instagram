import React from 'react';

import Carousel from "react-multi-carousel";

import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

interface Props {
  children: React.ReactNode;
}

const ScrollableBar = ({ children }: Props) => {
  return (
    <Carousel
      swipeable={true}
      responsive={responsive}
      containerClass={'flex gap-2 w-full'}
    >
      {children}
    </Carousel>
  );
};

export default ScrollableBar;
