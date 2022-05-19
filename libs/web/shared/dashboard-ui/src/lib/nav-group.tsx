import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

interface NavGroupProps {
  label: string;
  children: React.ReactNode;
}

export const NavGroup = (props: NavGroupProps) => {
  const { label, children } = props;
  return (
    <Box>
      <Text
        px="3"
        fontSize="xs"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="widest"
        color="green.500"
        mb="3"
      >
        {label}
      </Text>
      <Stack spacing="1">{children}</Stack>
    </Box>
  );
};

export default NavGroup;
