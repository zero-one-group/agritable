import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

export const Card = (props: BoxProps) => (
  <Box
    py="10"
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
);
