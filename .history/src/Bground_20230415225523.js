import React from 'react';
import { Image } from '@chakra-ui/react';
import bground from '../assets/bground.jpg';

const Bground = () => {
  return (
    <Image
      src={bground}
      filter='grayscale(40%)'
      objectFit='cover'
      boxSize={'calc(100vh - 60px)'}
      borderRightRadius='10px'
    />
  );
};

export default Bground;
